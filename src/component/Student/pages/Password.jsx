import React, { useEffect } from 'react'
import Canvas from '../Canvas'
import { Link, useNavigate } from 'react-router-dom'
import Passwordrecovery from './Passwordrecovery'


const Password = () => {
    let navigate = useNavigate()

    useEffect(() => {
        if(!localStorage.myStatus){
          navigate("/student/signin")
        }
      }, [])
  return (
    <>
        <Canvas/>
    <Passwordrecovery/>
    </>
  )
}

export default Password