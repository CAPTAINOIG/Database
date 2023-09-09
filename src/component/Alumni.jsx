import React from 'react'
import google from '../component/Student/image/google.png'
import Interswitch from '../component/Student/image/Interswitch.png'
import Andela from '../component/Student/image/Andela.png'
import Microsoft from '../component/Student/image/Microsoft.png'
import Paystack from '../component/Student/image/Paystack.png'
import brewery from '../component/Student/image/brewery.png'
import wema from '../component/Student/image/wema.png'
import edozzier from '../component/Student/image/edozzier.png'
import moneymie from '../component/Student/image/moneymie.png'
import Army from '../component/Student/image/Army.png'
import aella from '../component/Student/image/aella.png'







const Alumni = () => {
  return (
    <>
    <h3 className="container my-4 mt-5">Our alumni work at world-class <br/> companies around the world including</h3>
    <div className="container">
        <div className="row">
            <div className="col-3">
                <img className="img-fluid" src={google} height="100" width="120" alt="" />
                
            </div>
            <div className="col-3">
                <img className="img-fluid" src={Interswitch}  height="100" width="120" alt="" />
            </div>
            <div className="col-3">
                <img className="img-fluid" src={Andela}  height="100" width="120" alt="" />
            </div>
            <div className="col-3">
                <img className="img-fluid" src={Microsoft} height="100" width="120" alt="" />        
            </div>
        </div>
    </div>

    <div className="container my-4">
        <div className="row">
            <div className="col-3">
                <img className="img-fluid" src={Paystack} height="100" width="120" alt="" />
                
            </div>
            <div className="col-3">
                <img className="img-fluid" src={brewery}  height="100" width="120" alt="" />
            </div>
            <div className="col-3">
                <img className="img-fluid" src={wema}  height="100" width="120" alt="" />
            </div>
            <div className="col-3">
                <img className="img-fluid" src={Microsoft} height="100" width="120" alt="" />        
            </div>
        </div>
    </div>

    <div className="container my-4">
        <div className="row">
            <div className="col-3">
                <img className="img-fluid" src={edozzier} height="100" width="120" alt="" />
                
            </div>
            <div className="col-3">
                <img className="img-fluid" src={moneymie}  height="100" width="120" alt="" />
            </div>
            <div className="col-3">
                <img className="img-fluid" src={Army}  height="100" width="120" alt="" />
            </div>
            <div className="col-3">
                <img className="img-fluid" src={aella} height="100" width="120" alt="" />        
            </div>
        </div>
    </div>
    </>
  )
}

export default Alumni