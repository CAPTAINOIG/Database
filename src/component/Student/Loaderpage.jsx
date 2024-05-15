import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import cap from '../Student/image/cap.png'


const Loadepage = () => {
    
    return (
        <>
                <div id='loader' className='border'>
                <div className='mt-5'>
                            <img id='loaderimg' src={cap} alt="" width={500} />
                            </div>
                    <h1 id='loadercap'>
                        <TypeAnimation
                            sequence={[
                                "Welcome to Captain College",
                                500,
                            ]}
                            repeat={Infinity}
                            />
                            </h1>
                            </div>
        </>
    )
}

export default Loadepage