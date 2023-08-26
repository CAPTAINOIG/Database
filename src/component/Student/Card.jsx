import React from 'react'
import './Styles/Card.css'
import { Link } from 'react-router-dom'

import prof from '../Student/image/prof.png'
import docu from '../Student/image/docu.png'
import pass from '../Student/image/pass.png'
import coursey from '../Student/image/coursey.png'
import tuition from '../Student/image/tuition.png'
import pay from '../Student/image/pay.png'
import resou from '../Student/image/resou.png'
import regis from '../Student/image/regis.png'
import acco from '../Student/image/acco.png'
import board from '../Student/image/board.png'
import timey from '../Student/image/timey.png'
import result from '../Student/image/result.png'




const Card = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="card">
              <div className="card-body">
                <Link className='text-decoration-none' to="">
                  <h5 id='profile' className="card-title">Student Profile</h5>
                  <img className='profile' src={prof} alt="" width={70} />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
          <div className="card">
          <div className="card-body">
            <Link className='text-decoration-none' to="">
              <h5 id='doc' className="card-title">Document</h5>
              <img className='doc' src={docu} alt="" width={70} />
            </Link>
          </div>
        </div>
          </div>
          <div className="col-lg-3">
          <div className="card">
          <div className="card-body">
            <Link className='text-decoration-none' to="">
              <h5 id='pass' className="card-title">Reset Password</h5>
              <img className='pass' src={pass} alt="" width={70} />
            </Link>
          </div>
        </div>
          </div>
          <div className="col-lg-3">
          <div className="card">
          <div className="card-body">
            <Link className='text-decoration-none' to="">
              <h5 id='course' className="card-title">Course Registration</h5>
              <img className='course' src={coursey} alt="" width={70} />
            </Link>
          </div>
        </div>
          </div>
        </div>
      </div>




      <div className="container">
        <div className="row">
          <div className="col-lg-3">
          <div className="card">
          <div className="card-body">
            <Link className='text-decoration-none' to="">
              <h5 id='fee' className="card-title">Tuition fee</h5>
              <img className='fee' src={tuition} alt="" width={70} />
            </Link>
          </div>
        </div>
          </div>

          <div className="col-lg-3">
          <div id='ca' className="card">
          <div className="card-body">
            <Link className='text-decoration-none' to="">
              <h5 id='pay' className="card-title">Payment History</h5>
              <img className='pay' src={pay} alt="" width={70} />
            </Link>
          </div>
        </div>

          </div>
          <div className="col-lg-3">
          <div id='ca' className="card">
          <div className="card-body">
            <Link className='text-decoration-none' to="">
              <h5 id='resources' className="card-title">Resources</h5>
              <img className='resources' src={resou} alt="" width={70} />
            </Link>
          </div>
        </div>

          </div>
          <div className="col-lg-3">
          <div className="card">
          <div className="card-body">
            <Link className='text-decoration-none' to="">
              <h5 id='reg1' className="card-title">Registration History</h5>
              <img className='reg' src={regis} alt="" width={70} />
            </Link>
          </div>
        </div>
          </div>
        </div>
      </div>

        
        
      <div className="container">
      <div className="row">
        <div className="col-lg-3">
        <div className="card">
          <div className="card-body">
            <Link className='text-decoration-none' to="">
              <h5 id='acco' className="card-title">Accomodation</h5>
              <img className='acco' src={acco} alt="" width={90} />
            </Link>
          </div>
        </div>
        </div>

        <div className="col-lg-3">
        <div className="card">
        <div className="card-body">
          <Link className='text-decoration-none' to="">
            <h5 id='board' className="card-title">Notice Board</h5>
            <img className='board' src={board} alt="" width={70} />
          </Link>
        </div>
      </div>

        </div>
        <div className="col-lg-3">
       
        <div className="card">
          <div className="card-body">
            <Link className='text-decoration-none' to="">
              <h5 id='time' className="card-title">Time Table</h5>
              <img className='time' src={timey} alt="" width={70} />
            </Link>
          </div>
        </div>

        </div>
        <div className="col-lg-3">
        <div className="card">
          <div className="card-body">
            <Link className='text-decoration-none' to="">
              <h5 id='semester' className="card-title">Semester Result</h5>
              <img className='semester' src={result} alt="" width={70} />
            </Link>
          </div>
        </div>
        </div>
      </div>
    </div>

      

        
       
     


      

    </>
  )
}

export default Card