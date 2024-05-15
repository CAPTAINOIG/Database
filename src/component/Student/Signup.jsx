import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from "yup"
// import { FiLoader } from 'react-icons/fi'
import gif from '../Student/image/gif.gif'
import graduation from '../Student/image/graduation.png'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlashFill } from "react-icons/bs";


const Signup = () => {
    const [loading, setLoading] = useState(false)
    const [passwordVisible, setPasswordVisible] = useState(false)


    let lower = new RegExp(`(?=.*[a-z])`);
    let upper = new RegExp(`(?=.*[A-Z])`);
    let number = new RegExp(`(?=.*[0-9])`);
    let length = new RegExp(`(?=.{8,})`);

    // let endpoint = 'http://localhost:2300/student/signup'
    let endpoint = 'https://databackend-lirs.onrender.com/student/signup'



    let navigate = useNavigate()

    const togglePasswordVisibility=(field)=> {
        if(field === 'password') {
            setPasswordVisible(!passwordVisible)
        }
    }

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            image: "",
            logo: "",
            dob: "",
            matric: `CA2023${Math.round(Math.random() * 100000)}`,
            phone: "",
            otp: ""
        },
        onSubmit: (values) => {
            setLoading(true)
            axios.post(endpoint, values)
                .then((result) => {
                    setLoading("")
                    // console.log(result.data.result);
                    toast.success("Sign up Successful!");
                    localStorage.setItem("result", JSON.stringify(result.data.result));
                    navigate("/student/signin")
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false)
                    if (err.response.status === 409) {
                        toast.error("Duplicate user found");
                    }
                })
        },

        validationSchema: Yup.object({
            firstName: Yup.string().required("This field is required"),

            lastName: Yup.string().required("This field is required"),

            email: Yup.string().required("This field is required").email("You must enter an email address"),

            password: Yup.string().matches(lower, "Must include lowercase letter").matches(upper, "Must include uppercase letter").matches(number, "Must include a number").matches(length, "Must not be less than 8 characters").required("This field is required"),

            dob: Yup.string().required("This field is required"),

            phone: Yup.string().matches(/^\d{10}$/, "Phone number must be 10 digits").required("This field is required"),

        })
    })

    return (
        <>
            <section id='section' className='border'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img className='graduation' src={graduation} alt="" />
                        </div>
                        <div className="col-lg-5 shadow">
                            <h1 id='reg' className='fw-bold'>SIGN UP</h1>
                            <form action="" onSubmit={formik.handleSubmit}>

                                <div className='my-2'>
                                    <label id='label' htmlFor="">FIRSTNAME</label>
                                    <input type="text" placeholder='Enter Your firstname' onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.touched.firstName && formik.errors.firstName ? "form-control is-invalid" : "form-control"} value={formik.values.firstName} name='firstName' />
                                    <small className='text-danger'>{formik.touched.firstName && formik.errors.firstName}</small>
                                </div>

                                <div className='my-2'>
                                    <label id='label' htmlFor="">LASTNAME</label>
                                    <input type="text" placeholder='Enter Your lastname' onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.touched.lastName && formik.errors.lastName ? "form-control is-invalid" : "form-control"} value={formik.values.lastName} name='lastName' />
                                    <small className='text-danger'>{formik.touched.lastName && formik.errors.lastName}</small>
                                </div>

                                <div className='my-2'>
                                    <label id='label' htmlFor="">EMAIL</label>
                                    <input type="text" placeholder='Enter Your email' onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.touched.email && formik.errors.email ? "form-control is-invalid" : "form-control"} value={formik.values.email} name='email' />
                                    <small className='text-danger'>{formik.touched.email && formik.errors.email}</small>
                                </div>

                                <div className='my-2 ' style={{ position: 'relative' }}>
                                    <label id='label' htmlFor="">PASSWORD</label>
                                    <div style={{ position: 'relative' }}>
                                    <input  type={!passwordVisible ? 'text' : 'password'} placeholder='Enter Your password' onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.touched.password && formik.errors.password ? "form-control is-invalid" : "form-control"} value={formik.values.password} name='password' />
                                    <span id='password' onClick={() => togglePasswordVisibility('password')} className=''>{!passwordVisible ?  <IoEyeSharp /> :<BsEyeSlashFill /> }</span>
                                </div>

                                    <small className='text-danger'>{formik.touched.password && formik.errors.password}</small>
                                </div>

                                <div className='my-2'>
                                    <label id='label' htmlFor="">DATE OF BIRTH</label>
                                    <input type="date" placeholder='Enter Your DOB' onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.touched.dob && formik.errors.dob ? "form-control is-invalid" : "form-control"} value={formik.values.dob} name='dob' />
                                    <small className='text-danger'>{formik.touched.dob && formik.errors.dob}</small>
                                </div>

                                <div className='my-2'>
                                    <label id='label' htmlFor="">PHONE NUMBER</label>
                                    <input type="number" className={formik.touched.phone && formik.errors.phone ? "form-control is-invalid" : "form-control"} placeholder='Enter Your phone number' name='phone' onChange={formik.handleChange} value={formik.values.phone} onBlur={formik.handleBlur} />
                                    <small className='text-danger'>{formik.touched.phone && formik.errors.phone}</small>
                                </div>
                                <button id='submit' type='submit' className='btn w-100 fs-5 fw-bold rounded my-3'>
                                    {loading ? <img src={gif} alt="" width={25} /> : 'Submit'}</button>
                            </form>
                        </div>
                    </div>
                    <ToastContainer />
                </div>
            </section>


        </>
    )
}

export default Signup