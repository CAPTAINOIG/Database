import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import {FiLoader} from 'react-icons/fi'
import gif from '../Student/image/gif.gif'



const Signin = () => {
    let navigate = useNavigate()
    let endpoint = 'https://databackend-lirs.onrender.com/student/signin'
    // let endpoint = 'http://localhost:2300/student/signin'


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)


    let result = JSON.parse(localStorage.getItem("result"))
    // console.log(result);
    const submitDetails = () => {
        setLoading(true)
        let detail = { email, password }
        // console.log(detail);

        axios.post(endpoint, detail)

            .then((response) => {
                console.log(response.data);
                localStorage.setItem("real", JSON.stringify(response.data.user.email))
                setMessage(response.data.message)
                setLoading("")
                if (response.data) {
                    localStorage.token = response.data.token

                    // navigate("/dashboard", {state: {authData: response?.data, token:response?.token }})
                    navigate("/dashboard")
                }
            })
            .catch((err) => {
                console.log(err);
                setLoading(false)
                if (err.response.status == 404) {
                    console.log("Wrong email, please type the correct email");
                    setMessage('Wrong email, please type the correct email')
                } else if (err.response.status === 401) {
                    console.log("Wrong password, please type the correct password");
                    setMessage("Wrong password, please type the correct password")
                }
            })

    }
    return (
        <>
            <section id='sectionA' className='border'>
                <div id='signin' className="col-lg-4 mx-auto rounded bg-light px-4 my-5">
                    <div id='clas' className={message == "" ? "" : "alert alert-danger"}>{message}</div>
                    <h1 id='page' className="text-center fw-bold text-decoration-underline">
                        Sign In Page
                    </h1>
                    <div>
                        <label className='signin' htmlFor="">EMAIL</label>
                        <input type="text" placeholder="Enter Your Email" className="form-control my-3" onChange={(e) => setEmail(event.target.value)} value={email} />
                    </div>

                    <div>
                        <div className='d-flex'>
                            <div>
                                <label className='signin' htmlFor="">PASSWORD</label>
                            </div>
                            <Link id='forgpass' to="/passwordrecovery">Forgotten your Password?*</Link>
                        </div>
                        <input type="text" placeholder="Enter Your password" className="form-control my-3" onChange={(e) => setPassword(event.target.value)} value={password} />
                    </div>
                    <button id='buttonA' className='btn form-control fs-5 fw-bold' onClick={submitDetails}>
                        {loading ? <img src={gif} alt="" width={25} /> : 'Submit'}
                    </button>
                    <div className="d-flex">
                        <p id='mem' className='mt-4'>Not a member?</p>
                        <span><Link className='text-decoration-none fs-5 text-light mb-3 btn' id='up' to="/Student/Signup">Sign up now</Link></span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signin