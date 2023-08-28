import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'




const Signin = () => {
   let navigate = useNavigate()
    let endpoint = 'https://database-backend.vercel.app/student/signin'
   
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const submitDetails = () =>{
        let detail = {email, password}
        console.log(detail);
    
        axios.post(endpoint, detail)

        .then((response)=>{
          console.log(response.data);
          setMessage(response.data.message)
          if(response.data.status){
            localStorage.token = response.data.token
            // navigate("/dashboard", {state: {authData: response?.data, token:response?.token }})
             navigate("/dashboard")
          }
        })
        .catch((err)=>{
            console.log(err);
        })
    
      }
    return (
        <>
        <section id='sectionA' className='border'>
            <div id='signin' className="col-lg-4 mx-auto bg-light px-2 my-5">
            <div id='clas' className={message == "" ? "" : "alert alert-danger"}>{message}</div>
                <h1 id='page' className="text-center fw-bold text-decoration-underline">
                    Sign In Page
                </h1>
                <div>
                <label className='signin' htmlFor="">EMAIL</label>
                    <input type="text" placeholder="Enter Your Email" className="form-control my-3" onChange={(e) => setEmail(event.target.value)} value={email} />
                </div>

                <div>
                <label className='signin' htmlFor="">PASSWORD</label>
                    <input type="text" placeholder="Enter Your password" className="form-control my-3" onChange={(e) => setPassword(event.target.value)} value={password} />
                </div>
                <button id='buttonA' className='btn form-control fs-5 fw-bold' onClick={submitDetails}>submit</button>
                <div className="d-flex">
                    <p id='mem' className='fs-5'>Not a member?</p> 
                    <span><Link className='text-decoration-none fs-5 text-light mb-3 btn' id='up' to="/Student/Signup">Sign up now</Link></span>
                    </div>
            </div>
            </section>
        </>
    )
}

export default Signin