import axios from 'axios'
import React, { useState } from 'react'


const Profileimage = () => {
    const [myImage, setMyImage] = useState("")
    const [fileUpload, setFileUpload] = useState("")
    
    let endpoint = 'http://localhost:2300/student/upload'

    const changeFile=(e)=>{
        // console.log(e.target.files[0]);
        let myImage = e.target.files[0]
        let reader = new FileReader()
        // to base 64
        reader.readAsDataURL(myImage)
        reader.onload=()=>{
        console.log(reader.result);
        // set to myFile
        setFileUpload(reader.result)
        }
    }

    const upload =()=>{
        axios.post(endpoint, { fileUpload })
            .then((response) => {
                console.log(response.data.myimage);
                setMyImage(response.data.myimage)
                localStorage.setItem("image", JSON.stringify(response.data.myimage))
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <>
        <input type="file"  onChange={(e) => changeFile(e)}/>
        <button onClick={upload}>Upload</button>
        <img src={myImage} alt="" />
        
    </>
  )
}

export default Profileimage