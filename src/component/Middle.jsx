import React from 'react'
import image from '../assets/image/image.jpg'
import { Link } from 'react-router-dom'
import '../assets/Styles/Middle.css'


const Middle = () => {
  return (
    <>
    <div id="carouselExampleCaptions" class="carousel slide">
 
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img className='img' src={image} alt="" />
      <div class="carousel-caption d-none d-md-block">
        <h5 id='application'>Applications are Open</h5>
        <div className='bn'>
        <Link className='btn btn-lg btn-dark' to="/student/signup">New Students Apply</Link>
        <Link className='btn btn-lg btn-dark ms-3' to="/student/signin">Current Students Apply</Link>
        <Link className='btn btn-lg btn-dark ms-3' to="">Register External Services</Link>
        </div>
      </div>
    </div>
  </div>
  
</div>









       
    </>
  )
}

export default Middle