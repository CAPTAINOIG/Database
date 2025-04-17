import axios from 'axios'
import React, { useEffect, useState, } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from './Header'
import Canvas from './Canvas'
import Card from './Card'




const Dashboard = () => {
  const [profile, setProfile] = useState("")
  const [userInfo, setUserInfo] = useState({})

  // useEffect(() => {
  // let image = JSON.parse(localStorage.getItem("image"))
  // console.log(image);
  // setProfile(image)

  // }, [])

  let navigate = useNavigate()
  let token = localStorage.token

  let result = JSON.parse(localStorage.getItem("result"))
  // console.log(result);


  // useEffect(() => {
  //   if(!token){
  //     navigate('/signin')
  //   }
  // }, [])



  // const endpoint = "http://localhost:2300/student/dashboard"
  let endpoint = 'https://databackend-lirs.onrender.com/student/dashboard'



  useEffect(() => {
    axios.get(endpoint, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
      .then((response) => {
        console.log(response.data.userDetail);
        setUserInfo(response.data.userDetail)
        if (!response.data.status) {
          localStorage.removeItem("token")
          // navigate("/student/signin")
        } else {
          localStorage.setItem("myStatus", JSON.stringify(response.data.status))
          localStorage.setItem("myProfile", JSON.stringify(response.data))
          localStorage.setItem("docs", JSON.stringify(response.data.userDetail))
          localStorage.setItem("mail", JSON.stringify(response.data.userDetail.email))
        }
      })
  }, [])



  return (
    <>
      <Header userInfo={userInfo} />
      <Canvas />
      <Card />
    </>
  )
}

export default Dashboard