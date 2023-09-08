import React, { useState } from 'react'
import { useEffect } from 'react'
import Canvas from '../Canvas'
import './Styles/Profile.css'
import Profileimage from './Profileimage'
import { useNavigate } from 'react-router-dom'





const Profile = () => {

  let navigate = useNavigate()

  useEffect(() => {
      if(!localStorage.myStatus){
        navigate("/student/signin")
      }
    }, [])

  const [firstname, setfirstname] = useState("")
  const [lastname, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [matric, setMatric] = useState("")
  const [dob, setDob] = useState("")
  const [phone, setPhone] = useState("")



  useEffect(() => {
    let myProfile = JSON.parse(localStorage.getItem("myProfile"))
    // console.log(myProfile);
    // console.log(myProfile.userDetail.firstName);
    setfirstname(myProfile.userDetail.firstName)
    setLastName(myProfile.userDetail.lastName)
    setEmail(myProfile.userDetail.email)
    setMatric(myProfile.userDetail.matric)
    setDob(myProfile.userDetail.dob)
    setPhone(myProfile.userDetail.phone)


  }, [])

  return (
    <>
      <Canvas />
      <section id='info'>
        <div className="container text-center">
          <h1 className='info'>PERSONAL INFORMATION</h1>
          <div className="row">
            <div className='col-lg-6'>
              <p>FIRST NAME</p>
              <div>{firstname}</div>
              <p>_______________________</p>
            </div>
            <div className='col-lg-6'>
              <p>LAST NAME</p>
              <div>{lastname}</div>
              <p>__________________</p>
            </div>
          </div>

        </div>


        <div className="container text-center">

          <div className="row">
            <div className='col-lg-6'>
              <p>EMAIL</p>
              <div>{email}</div>
              <p>____________________________________</p>
            </div>
            <div className='col-lg-6'>
              <p>MATRIC NUMBER</p>
              <div>{matric}</div>
              <p>__________________</p>
            </div>
          </div>


          <div className="row">
            <div className='col-lg-6'>
              <p>DATE OF BIRTH</p>
              <div>{dob}</div>
              <p>________________________</p>
            </div>
            <div className='col-lg-6'>
              <p>PHONE NUMBER</p>
              <div>{phone}</div>
              <p>_______________________</p>
            </div>
          </div>
        </div>
      </section>
      <Profileimage/>


    </>
  )
}

export default Profile