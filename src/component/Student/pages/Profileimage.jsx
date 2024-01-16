import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Camera, Loader } from "react-feather";
import { Button, CardBody, Label } from "reactstrap";
import avatar from '../pages/avatar.webp'
import gif from '../image/gif.gif'



const Profileimage = () => {
    const id = JSON.parse(localStorage.getItem('real'))
    // console.log(id);

    const [myImage, setMyImage] = useState("")
    const [fileUpload, setFileUpload] = useState("")
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    // console.log(email);


    // let endpoint = 'http://localhost:2300/student/upload'
    let endpoint = 'https://databackend-lirs.onrender.com/student/upload'


    useEffect(() => {
        let store = JSON.parse(localStorage.getItem("profileImage"))
        // console.log(store);
        setMyImage(store)
    }, [])


    const changeFile = (e) => {
        let myImage = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(myImage);
        reader.onload = () => {
            // console.log(reader.result);
            setFileUpload(reader.result);
        };
    };

    const upload = () => {
        setLoading(true)
        const data = { fileUpload, id };
        // console.log(data);
        // console.log(data);
        axios.post(endpoint, data)
            .then((response) => {
                // console.log(response);
                setMyImage(response.data.uploadResult.secure_url);
                localStorage.setItem("profileImage", JSON.stringify(response.data.uploadResult.secure_url));
                setMessage(response.data.message);
                setTimeout(() => {
                    setMessage('');
                }, 4000);
                setLoading(false)
            })
            .catch((err) => {
                // console.log(err);
                if (err.response.status == 500) {
                    // console.log("Error uploading picture");
                    setMessage('Error uploading picture')

                }
                setLoading(false)
            })
    };
    return (
        <>

            <CardBody>
                <div>
                    <div style={{ maxWidth: '120px', position: 'relative' }}>
                        <img style={{ maxWidth: '120px', position: 'relative' }} src={myImage || avatar} alt="" />
                        <Label for="file" style={{ cursor: 'pointer' }}>
                            <Camera style={{ position: 'absolute', right: 10, top: 5, color: 'red' }} />
                        </Label>
                        <input type="file" id="file" className="d-none" onChange={(e) => changeFile(e)} />
                        <Button id='upload' onClick={upload} style={{ marginTop: '10px' }}>
                            {loading ? <img src={gif} alt="" width={25} /> : 'Upload'}
                        </Button>
                        <p className='fs'>{message}</p>
                    </div>

                </div>
            </CardBody>



        </>
    )
}

export default Profileimage