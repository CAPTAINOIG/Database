import React from 'react'
import '../Student/Styles/Header.css'
import  reg from '../Student/image/reg.png'
import  doc from '../Student/image/doc.png'
import  pas from '../Student/image/pas.png'
import  res from '../Student/image/res.png'
import  icof from '../Student/image/icof.png'
import { Link } from 'react-router-dom'




const Header = ({userInfo}) => {
  console.log(userInfo);
  return (
    <>
        <div id='header' className='d-flex'>
        <div id='welcome'>  
        WELCOME {userInfo.firstName} {userInfo.lastName}
        </div>
        <div id='imager'>
            <Link className='ms-5' to=""><img className='mt-3' src={reg} alt="" width={40} /></Link>
            <Link className='ms-5' to=""><img className='mt-3' src={doc} alt="" width={30} /></Link>
            <Link className='ms-5' to=""><img className='mt-3' src={pas} alt="" width={30} /></Link>
            <Link className='ms-5' to=""><img className='mt-3' src={res} alt="" width={30} /></Link>
            <Link className='ms-5' to=""><img className='mt-3' src={icof} alt="" width={30} /></Link>
        </div>
        </div>
       
    </>
  )
}

export default Header