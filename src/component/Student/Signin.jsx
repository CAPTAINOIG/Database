import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import graduation from '../Student/image/graduation.png';
import gif from '../Student/image/gif.gif';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Signin = () => {
    let navigate = useNavigate()
    let endpoint = 'https://databackend-lirs.onrender.com/student/signin'
    // let endpoint = 'http://localhost:2300/student/signin'


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [loading, setLoading] = useState(false)


    let result = JSON.parse(localStorage.getItem("result"))
    // console.log(result);
    const submitDetails = () => {
        setLoading(true)
        let detail = { email, password }
        if(email === '' || password === ''){
            setLoading(false)
            toast.error('please fill all input')
        } else{

            axios.post(endpoint, detail)
            .then((response) => {
                console.log(response.data.user._id);
                localStorage.setItem("real", JSON.stringify(response.data.user._id))
                toast.success('Login Successful')
                setLoading("")
                if (response.data) {
                    localStorage.token = response.data.token
                    navigate("/dashboard")
                }
            })
            .catch((err) => {
                console.log(err);
                setLoading(false)
                if (err.response.status == 404) {
                    console.log("Wrong email, please type the correct email");
                    toast.error('Wrong email, please type the correct email')
                } else if (err.response.status === 401) {
                    console.log("Wrong password, please type the correct password");
                    toast.error('Wrong password, please type the correct password')
                }
            })
        }

    }
    return (
        <>
            <section id='sectionA' className='border'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img className='graduation2' src={graduation} alt="" />
                        </div>
                        <div id='pagy' className="col-lg-5 shadow">
                            <h1 id='page' className="text-center fw-bold text-decoration-underline">
                                Sign In Page
                            </h1>
                            <div>
                                <label className='' id='label' htmlFor="">EMAIL</label>
                                <input required type="text" placeholder="Enter Your Email" className="form-control my-3" onChange={(e) => setEmail(event.target.value)} value={email} />
                            </div>
                            <div>
                                <div className='d-flex'>
                                    <div>
                                        <label id='label' className='signin' htmlFor="">PASSWORD</label>
                                    </div>
                                    <Link id='forgpass' to="/passwordrecovery">Forgot Password?*</Link>
                                </div>
                                <input required type="text" placeholder="Enter Your password" className="form-control my-3" onChange={(e) => setPassword(event.target.value)} value={password} />
                            </div>
                            <button id='submit' className='btn form-control fs-5 fw-bold' onClick={submitDetails}>
                                {loading ? <img src={gif} alt="" width={25} /> : 'Submit'}
                            </button>
                            <div id='flex' className="d-flex">
                                <p id='mem' className='mt-4 text-light'>Not a member?</p>
                                <span><Link className='text-decoration-none text-light mb-3 btn' id='up' to="/Student/Signup">Sign up now</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer/>
            </section>
        </>
    )
}

export default Signin