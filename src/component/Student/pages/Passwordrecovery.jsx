import axios from 'axios'
import React, { useState } from 'react'
// import { Link } from 'react-fea'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowRoundBack } from 'react-icons/io'

import gif from '../image/gif.gif'

const Passwordrecovery = () => {
  let navigate = useNavigate()
  // let endpoint = 'http://localhost:2300/student/password'
  let endpoint = 'https://databackend-lirs.onrender.com/student/password'
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const [data, setdata] = useState({
    email: '',
  })

  const handlechanges = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value })

  }
  const sumit = () => {
    if (data.email === '') {
      // console.log('error');
      alert("input cannot be empty")
    } else {
      setLoading(true)
      axios.post(endpoint, data)
        .then((res) => {
          // console.log(res.data.message);
          setMessage(res.data.message)
          setLoading("")
          navigate("/reset")

        }).catch((err) => {
          console.log(err);
          if(err.response.data.message){
            // console.log(err.response.data.message);
            setMessage(err.response.data.message)
          }
          setLoading(false)
        })
    }
    // console.log(data);
    localStorage.setItem("email", JSON.stringify(data.email))
  }
  return (
    <section className='passwordrecovery border p-4'>
      <div id='passrec' className='col-lg-4 mx-auto p-4 shadow rounded bg-white'>
      <div  className={message == "" ? "" : "alert alert-danger"}>{message}</div>
        <h3 className='text-center'>Forgotten your password?</h3>
        <div className='d-flex my-3'>
          <IoIosArrowRoundBack className='arr' size={25} />
          <div id='backtoLogin' className='text-center'><a className='underline' href="/student/signin">back to Login</a></div>
        </div>
        <label className='fw-bold' htmlFor="email">Email Address</label>
        <input className='form-control my-2 border-black' placeholder='e.g johndoe@gmail.com' type="text" name='email' onChange={handlechanges} />
        <button onClick={sumit} className='bg-primary form-control text-light fw-bold mt-3'>
                  {loading ? <img src={gif} alt="" width={25} /> : 'Submit'}
        </button>
       
      </div>
    </section>
  )
}

export default Passwordrecovery