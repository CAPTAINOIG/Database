import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Camera, Loader } from "react-feather";
import { Button, CardBody, Label } from "reactstrap";
import avatar from '../pages/avatar.webp'
import load2 from '../image/load2.gif'
import {GrUpload} from 'react-icons/gr'


const Profileimage = () => {
    const [myImage, setMyImage] = useState("")
    const [fileUpload, setFileUpload] = useState("")
    const [loader, setLoader] = useState(false)

    // let endpoint = 'http://localhost:2300/student/upload'
    let endpoint = 'https://databackend-lirs.onrender.com/student/upload'


    useEffect(() => {
        let store = JSON.parse(localStorage.getItem("profileImage"))
        console.log(store);
        setMyImage(store)
      
    }, [])
    

    const changeFile = (e) => {
        // console.log(e.target.files[0]);
        let myImage = e.target.files[0]
        let reader = new FileReader()
        // to base 64
        reader.readAsDataURL(myImage)
        reader.onload = () => {
            console.log(reader.result);
            // set to myFile
            setFileUpload(reader.result)
            setLoader(false)
        }
    }

    const upload = () => {
        setLoader(true)
        axios.post(endpoint, { fileUpload })
            .then((response) => {
                console.log(response.data.myimage);
                setMyImage(response.data.myimage)
                localStorage.setItem("profileImage", JSON.stringify(response.data.myimage))
                setLoader(false)
            })
            .catch((err) => {
                console.log(err);
                setLoader(false)
            })
    }
    return (
        <>

            <CardBody>
                <div>
                    <div className="position: relative" >
                        <div
                            style={{
                                maxWidth: '120px',
                                position: 'relative'
                            }}
                        >
                            <img style={{
                                maxWidth: '120px',
                                position: 'relative'
                            }} src={myImage || avatar} alt="" />

                            <Label for="file" style={{ cursor: 'pointer' }}>
                                <Camera style={{ position: 'absolute', right: 10, top: 5, color: 'red' }} />
                            </Label>
                            <input type="file" id='file' className="d-none" onChange={e => changeFile(e)} />
                            <div  className='bg-light' type='submit' onClick={upload}>
                            {loader ? <img src={load2} alt="" height={30} /> : <GrUpload size={15} />}</div>                            
                        </div>
                    </div> 
                </div>
                
            </CardBody>



        </>
    )
}

export default Profileimage