import React from 'react'
import '../assets/Styles/Middle.css'
import tech5 from './Student/image/tech5.jpg'
import stock from './Student/image/stock.webp'
import tech9 from './Student/image/tech9.webp'
import tech8 from './Student/image/tech8.webp'

import { Link } from 'react-router-dom'






const Middle = () => {
  return (
    <>


      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-10 col-sm-12">

            <h1 id='study' className='ms-5'>Study to <br /> become a <br /> global talent</h1>
            <p id="Learn" className="ms-5 fw-bold">Learn new tech skills using world-class curriculum and top <br /> industry experts.</p>
           
            <Link id="butt" className="btn btn-lg ms-5 text-light" to="/student/signup">Start Now</Link>
          </div>
          <div class="col-lg-6 col-md-10 col-sm-12">
            <img id='image' className='img-fluid' src={tech5} alt="" />
          </div>
        </div>
      </div>
      <div>



      </div>
      <div id="alt" className="ms-5">
        <img id='image11' src={tech9} alt="" height={40} />
        <span><button className="btn btn-sm btn-light">Need Help? Chat with us</button></span>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 col-md-10 col-sm-12 ">
            <img id='stock' src={tech8} alt="" height={450} width={500} />
          </div>
          <div id="sci" className="col-lg-6 col-md-10 col-sm-12">
            <h2 className="fw-bold mt-5">CAPTAIN COLLEGE AT A GLANCE</h2>
            <p className="fw-bold">Captain College of ICT offers both <Link className='text-decoration-none' to=""> National Diploma</Link> and <Link className='text-decoration-none' to="">Professional Certificate programmes.</Link></p>

            <p className="fw-bold mt-5"> The diploma Certificate conforms with the standard National Diploma Certificate obtained in Polytechnics while the Professional certificate is the certificate you earn after taking a professional course here at Captain College.</p>

            <p className="fw-bold mt-5">You can use the Diploma certificate to seek admissions into the University through Direct Entry or for Higher National Diploma (HND). While the professional Certificate is recognized worldwide not as a degree but as a proof of having undergone professional training in the field for which the certificate is issued.</p>
            <button type="button" className="btn btn-dark btn-outline-light btn-lg">Learn More</button> </div>
        </div>
      </div>
    </>
  )
}

export default Middle