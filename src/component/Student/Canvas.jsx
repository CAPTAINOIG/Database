import React from 'react'
import tog from '../Student/image/tog.png'
import './Styles/Canvas.css'
import portal from '../Student/image/portal.png'
import cap from '../Student/image/cap.png'
import Card from './Card'
import oig2 from '../Student/image/oig2.png'
import real from '../Student/image/real.png'
import prof from '../Student/image/prof.png'
import pass from '../Student/image/pass.png'
import documy from '../Student/image/documy.png'
import coursy from '../Student/image/coursy.png'
import resou from '../Student/image/resou.png'
import price from '../Student/image/price.png'



import { Link } from 'react-router-dom'





const Canvas = () => {
  return (
    <>
      <section id='background'>
        <button id='color' class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
          <img src={tog} alt="" width={50} />
        </button>

        <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title text-light" id="offcanvasWithBothOptionsLabel"></h5>
            <button type="button" class="btn-close bg-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <img id='oig2' src={oig2} alt="" width={300} />
          <div class="offcanvas-body">
            <p className='text-light fs-2 '>General</p>
            <Link className='text-decoration-none' to="">
              <img className='bg-light' src={real} alt="" width={30} /><span className='text-light fs-5 ms-3'>Dashboard</span>
            </Link>

            <div>
              <p className='text-light mt-3 fs-2'>Profile</p>
              <Link className='text-decoration-none' to="">
                <img className='bg-light' src={prof} alt="" width={30} /><span className='text-light fs-5 ms-4'>My Profile</span>
              </Link>
            </div>
            <div>
              <Link className='text-decoration-none' to="">
                <img className='bg-light' src={pass} alt="" width={30} /><span className='text-light fs-5 ms-4'>Change Password</span>
              </Link>
            </div>
            <div>
              <Link className='text-decoration-none' to="">
                <img className='bg-light' src={documy} alt="" width={30} /><span className='text-light ms-4 fs-5'>Documents</span>
              </Link>
            </div>

            <p className='text-light mt-3 fs-2'>Academics</p>
            <div>
              <Link className='text-decoration-none' to="">
                <img className='bg-light' src={coursy} alt="" width={30} /><span className='text-light ms-4 fs-5'>Course Registration</span>
              </Link>
            </div>
            <div>
              <Link className='text-decoration-none' to="">
                <img className='bg-light' src={resou} alt="" width={30} /><span className='text-light ms-4 fs-5'>Resources</span>
              </Link>
            </div>

            <p className='text-light  mt-3 fs-2'>Payments</p>
            <div>
              <Link className='text-decoration-none' to="">
                <img className='bg-light' src={price} alt="" width={30} /><span className='text-light ms-4 fs-5'>Pay Tuition</span>
              </Link>
            </div>
            <div>
              <Link className='text-decoration-none' to="">
                <img className='bg-light' src={price} alt="" width={30} /><span className='text-light ms-4 fs-5'>Payment History</span>
              </Link>
            </div>
            <div>
              <Link className='text-decoration-none' to="">
                <img className='bg-light' src={price} alt="" width={30} /><span className='text-light ms-4 fs-5'>Transaction History</span>
              </Link>
            </div>

            <div>
              <Link className='text-decoration-none' to="/student/signin">
                <span className='text-light fs-3'>Logout</span>
              </Link>
            </div>
          </div>
        </div>

        <div className='d-flex' id='premium'>

          <img src={portal} alt="" width={50} />
          <span>UNIVERSITY OF PREMIUM</span>
          <img src={cap} alt="" width={65} />
        </div>
        <Card />

      </section>

    </>
  )
}

export default Canvas