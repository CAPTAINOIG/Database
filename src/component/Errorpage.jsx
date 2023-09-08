import React from 'react'
import { Link } from 'react-router-dom'

const Errorpage = () => {
  return (
    <div>
    <Link className='btn btn-dark' to="/home">Go Back</Link>
    <h1>ERRORPAGE</h1>
    <p>{title}</p> 
    <p>{description}</p> 
    </div>
  )
}

export default Errorpage