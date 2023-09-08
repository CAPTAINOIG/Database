import React, { useEffect } from 'react'
import Canvas from '../Canvas'
import { Link, useNavigate } from 'react-router-dom'



const Help = () => {
    let navigate = useNavigate()

    useEffect(() => {
        if(!localStorage.myStatus){
          navigate("/student/signin")
        }
      }, [])
    return (
        <>
            <Canvas />
            <div className="col-lg-8 container border border-dark rounded mt-4">
                <h3>SEND CRASH REPORT</h3>
                <p>Perhaps, you could not find a solution to a problem you encountered from the FAQ section above, Send a crash report to the technical team and a response will be sent to you soon. A crash report can be sent by filling the form below. To properly and effectively describe the situation, you can include a screenshot. Maximum size is 100kb.</p>

                <div className='fw-bold'>
                    Subject:
                    <div>
                        <input className='w-100 rounded' type="text" />
                    </div>
                </div>
                <br />

                <div>
                    <p className='fw-bold'>Crash Report:</p>
                    <div>
                        <textarea className='w-100 rounded' name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div>
                        <Link className='btn btn-dark my-2 text-decoration-none fw-bold' to="">SEND</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Help