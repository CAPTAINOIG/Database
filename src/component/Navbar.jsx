import React from 'react'
import { Link } from 'react-router-dom'
import Middle from './Middle'
import Alumni from './Alumni'
import Card from './Card'
import Footer from './Footer'


const Navbar = () => {
  return (
    <>
    <nav id='navbar' className="navbar navbar-expand-lg">
  <div className="container">
  <Link className="nav-link active text-light fw-bold fs-5" aria-current="page" to="/">Home</Link>
    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <Link className="nav-link active text-light fw-bold fs-5" aria-current="page" to="/">How to Apply</Link>
        </li>
        <li className="nav-item dropdown px-1">
        <Link className="nav-link dropdown-toggle text-light fw-bold fs-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >How To Register</Link>
        <ul className="dropdown-menu border-0 shadow-sm">
            <li className='py-1'><Link to="/student/signup" className="dropdown-item">Student</Link></li>
            <li className='py-1'><Link to="" className="dropdown-item">Staff</Link></li>
        </ul>
    </li>  
      </ul>
      <div className="d-flex">
          <Link id='btn' className='btn btn-danger' to="/student/signup">SignUp</Link>
          <Link id='btn' className='btn btn-danger ms-3' to="/student/signin">Signin</Link>
      </div>
    </div>
  </div>
</nav>
 
  <Middle/>
  <Alumni/>
  <Card/>
  <Footer/>
    </>
  )
}

export default Navbar