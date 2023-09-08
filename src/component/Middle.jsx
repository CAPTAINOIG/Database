import React from 'react'
import '../assets/Styles/Middle.css'
import photo from './Student/image/photo.webp'
import stock from './Student/image/stock.webp'
// import scaled from './Student/image/scaled.jpg'
import whatsapp from './Student/image/whatsapp.png'
import { Link } from 'react-router-dom'




// <img className='imgig' src={image} alt="" />

const Middle = () => {
  return (
    <>


      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-10 col-sm-12">

            <h1 id='study' className='ms-5'>Study to <br /> become a <br /> global talent</h1>
            <p id="Learn" className="ms-5 fw-bold">Learn new tech skills using world-class curriculum and top <br /> industry experts.</p>
           
            <Link id="butt" class="btn btn-lg ms-5 text-light" to="/student/signup">Start Now</Link>
          </div>
          <div class="col-lg-6 col-md-10 col-sm-12">
            <img id='image' className='img-fluid' src={photo} alt="" />
          </div>
        </div>
      </div>
      <div>



      </div>
      <div id="alt" class="ms-5">
        <img id='image11' src={whatsapp} alt="" height={40} />
        <span><button class="btn btn-sm btn-light">Need Help? Chat with us</button></span>
      </div>



      <div class="container my-5">
        <div class="row">
          <div class="col-lg-6 col-md-10 col-sm-12 ">
            <img id='stock' src={stock} alt="" height={500} width={500} />
          </div>
          <div id="sci" class="col-lg-6 col-md-10 col-sm-12">
            <h2 class="fw-bold mt-5">SCICT AT A GLANCE</h2>
            <p class="fw-bold">SQI College of ICT offers both <Link to=""> National Diploma</Link> and <Link to="">Professional Certificate programmes.</Link></p>

            <p class="fw-bold mt-5"> The diploma Certificate conforms with the standard National Diploma Certificate obtained in Polytechnics while the Professional certificate is the certificate you earn after taking a professional course here at SQI.</p>

            <p class="fw-bold mt-5">You can use the Diploma certificate to seek admissions into the University through Direct Entry or for Higher National Diploma (HND). While the professional Certificate is recognized worldwide not as a degree but as a proof of having undergone professional training in the field for which the certificate is issued.</p>
            <button type="button" class="btn btn-outline-light btn-lg">Learn More</button> </div>
        </div>
      </div>
    </>
  )
}

export default Middle