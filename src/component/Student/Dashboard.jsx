import axios from 'axios'
import React, { useEffect, useState,  } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Canvas from './Canvas'
import Header from './Header'




const Dashboard = () => {
  const [userInfo, setUserInfo] = useState({})
  let navigate = useNavigate()
  let token = localStorage.token
  const endpoint = "http://localhost:2300/student/dashboard"
 
  useEffect(() => {
    axios.get(endpoint,{
      headers:{
        "Authorization" : `Bearer ${token}`,
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      }
    })
    .then((response)=>{
      console.log(response.data.userDetail);
      setUserInfo(response.data.userDetail)
      if(!response.data.status){
        localStorage.removeItem("token")
        navigate("/student/signin")
      }
    })
  }, [])
  

  
  return (
    <>   
    <Header userInfo={userInfo}/>
    <Canvas/>
    
    
    
    </>
  )
}

export default Dashboard