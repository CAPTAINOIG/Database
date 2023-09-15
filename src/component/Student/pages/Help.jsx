import React, { useEffect, useState } from 'react'
import Canvas from '../Canvas'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'




const Help = () => {
    let navigate = useNavigate()
    const [subject, setSubject] = useState("")
    const [crash, setCrash] = useState("")
    const [message, setMessage] = useState("")
    
    useEffect(() => {
        if(!localStorage.myStatus){
            navigate("/student/signin")
        }
    }, [])
    
    // let endpoint = 'http://localhost:2300/student/help'
    let endpoint = 'https://databackend-lirs.onrender.com/student/help'
      
      const get =()=>{
        let detail = {subject, crash}
        console.log(detail);

        axios.post(endpoint, detail)
        .then((response)=>{
            console.log(response.data);
            setMessage(response.data.message)
            setCrash("")
            setSubject("")
        })
        .catch((err)=>{
            console.log(err);
        })
         
      }
    return (
        <>
            <Canvas />
            <div className="col-lg-8 col-sm-12 container border border-dark rounded mt-4">
                <h3 className='text-center'>SEND CRASH REPORT</h3>
                <p>Perhaps, you could not find a solution to a problem you encountered from the FAQ section above, Send a crash report to the technical team and a response will be sent to you soon. A crash report can be sent by filling the form below. To properly and effectively describe the situation, you can include a screenshot. Maximum size is 100kb.</p>

                <div className='fw-bold'>
                    Subject:
                    <div>
                        <input className='w-100 rounded' type="text" onChange={(e) => setSubject (e.target.value) } value={subject} />
                    </div>
                </div>
                <br />

                <div>
                    <p className='fw-bold'>Crash Report:</p>
                    <div>
                        <textarea className='w-100 rounded' name="" id="" cols="30" rows="10" onChange={(e) =>setCrash(e.target.value)} value={crash}></textarea>
                    </div>
                    <div>
                        <button onClick={get} className='btn btn-dark my-2 text-decoration-none fw-bold' to="">SEND</button>
                    </div>
                </div>
                <div className='fs-5 fw-bold text-danger'>{message}</div>
            </div>
            
        </>
    )
}

export default Help