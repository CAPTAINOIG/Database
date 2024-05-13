import React from 'react'
import tog from '../Student/image/tog.png'
import './Styles/Canvas.css'
import portal from '../Student/image/portal.png'
import cap from '../Student/image/cap.png'
import oig2 from '../Student/image/oig2.png'
import real from '../Student/image/real.png'
import prof from '../Student/image/prof.png'
import pass from '../Student/image/pass.png'
import documy from '../Student/image/documy.png'
import coursy from '../Student/image/coursy.png'
import resou from '../Student/image/resou.png'
import price from '../Student/image/price.png'
import {BiSolidDashboard} from 'react-icons/bi'
import {ImProfile} from 'react-icons/im'
import {RiLockPasswordLine} from 'react-icons/ri'
import {GrDocumentUpdate} from 'react-icons/gr'
import {SiDiscourse} from 'react-icons/si'
import {GrResources} from 'react-icons/gr'
import {FaCcAmazonPay} from 'react-icons/fa'
import {MdPayment} from 'react-icons/md'
import {TbHelpOctagonFilled} from 'react-icons/tb'
import {BiLogOut} from 'react-icons/bi'
import {BsChatDots} from 'react-icons/bs'

import { Link, useNavigate } from 'react-router-dom'





const Canvas = () => {
  const navigate = useNavigate()

  const logout =()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('myStatus')
    navigate("/student/signin")
  }
  return (
    <>
      <section id='background'>
        <button id='color' className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
          <img src={tog} alt="" width={50} />
        </button>

        <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title text-light" id="offcanvasWithBothOptionsLabel"></h5>
            <button type="button" className="btn-close bg-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <img id='oig2' src={oig2} alt="" width={200} />
          <div className="offcanvas-body">
            <p className='text-light fs-5'>General</p>
            <Link className='text-decoration-none' to="/dashboard">
              <BiSolidDashboard className='text-light'/><span className='text-light ms-3'>Dashboard</span>
            </Link>

            <div>
              <p className='text-light mt-2 fs-5'>Profile</p>
              <Link className='text-decoration-none' to="/profile">
                <ImProfile className='text-light'/><span className='text-light ms-4'>My Profile</span>
              </Link>
            </div>
            <div>
              <Link className='text-decoration-none' to="/password">
                <RiLockPasswordLine className='text-light'/><span className='text-light ms-4'>Change Password</span>
              </Link>
            </div>
            <div>
              <Link className='text-decoration-none' to="/document">
                <GrDocumentUpdate className='text-light bg-light'/><span className='text-light ms-4'>Documents</span>
              </Link>
            </div>

            <p className='text-light mt-2 fs-5'>Academics</p>
            <div>
              <Link className='text-decoration-none' to="">
                <SiDiscourse className='text-light'/><span className='text-light ms-4'>Course Registration</span>
              </Link>
            </div>
            <div>
              <Link className='text-decoration-none' to="">
                <GrResources className='text-light bg-light'/><span className='text-light ms-4'>Resources</span>
              </Link>
            </div>

            <p className='text-light  mt-2 fs-5'>Payments</p>
            <div>
              <Link className='text-decoration-none' to="">
                <FaCcAmazonPay className='text-light'/><span className='text-light ms-4'>Pay Tuition</span>
              </Link>
            </div>
            <div>
              <Link className='text-decoration-none' to="">
                <MdPayment className='text-light'/><span className='text-light ms-4'>Payment History</span>
              </Link>
            </div>
            <div>
              <Link className='text-decoration-none' to="/help">
                <TbHelpOctagonFilled className='text-light'/><span className='text-light ms-4'>Help</span>
              </Link>
            </div>
            <div>
              <Link className='text-decoration-none' to="/chat">
                <BsChatDots className='text-light'/><span className='text-light ms-4'>Chat</span>
              </Link>
            </div>

            <div>
              <Link onClick={logout} className='text-decoration-none' to="/student/signin">
              <BiLogOut className='text-light'/> <span className='text-light fs-5'>Logout</span>
              </Link>
            </div>
          </div>
        </div>

        <div className='d-flex' id='premium'>

          <img src={portal} alt="" width={50} />
          <span>CAPTAIN COLLEGE</span>
          <img src={cap} alt="" width={65} />
        </div>
       

      </section>

    </>
  )
}

export default Canvas