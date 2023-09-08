import React, { useEffect } from 'react'
import Canvas from '../Canvas'
import { Link, useNavigate } from 'react-router-dom'


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


        <div className="col-lg-8 container border-light rounded shadow border-dark mt-5">
        <div className='fw-bold'>
            <div>CHANGE PASSWORD</div>
            <br />
            <div>
            <p>Old Password</p>
                <input className='w-100 rounded' type="text" />
            </div>
        </div>
        <br />

        <div>
            <p className='fw-bold'>New Password</p>
            <div>
            <input className='w-100 rounded' type="text" />
            </div>
        <div>
        <br />
        <div>
            <p className='fw-bold'>Confirm New Passcode</p>
            <div>
            <input className='w-100 rounded' type="text" />
            </div>
            <br />
        </div>
                <Link className='btn btn-dark my-2 text-decoration-none fw-bold' to="">SAVE CHANGES</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Password