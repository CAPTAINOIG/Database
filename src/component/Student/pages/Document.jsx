import React, { useEffect, useState } from 'react'
import Canvas from '../Canvas'
import './Styles/Document.css'
import axios from 'axios'
import { BiSolidJoystickButton } from 'react-icons/bi'
import {useNavigate } from 'react-router-dom'


const Document = () => {
    let navigate = useNavigate()
    const [fileUpload, setFileUpload] = useState("")
    const [myImage, setMyImage] = useState("")
    const [description, setDescription] = useState("")
    const [title, setTitle] = useState("O Levels Certificate")
    const [studentDetails, setStudentDetails] = useState([])

    let endpoint = 'http://localhost:2300/student/upload'


    useEffect(() => {
      if(!localStorage.myStatus){
        navigate("/student/signin")
      }
    }, [])
    

    const changeFile = (e) => {
        let myImage = e.target.files[0]
        let reader = new FileReader()
        reader.readAsDataURL(myImage)
        reader.onload = () => {
            console.log(reader.result);
            setFileUpload(reader.result)
        }
    }

    // console.log(description);
    // console.log(title);

    let date = new Date().toLocaleDateString()
    let time = new Date().toLocaleTimeString()

    const upload = () => {
        let data = { title, description, date, time }
        console.log(data);

        setStudentDetails([...studentDetails, data]);

        setDescription("")
        setTitle("")

        axios.post(endpoint, { fileUpload })
            .then((response) => {
                console.log(response.data.myimage);
                setMyImage(response.data.myimage)
            })
            .catch((err) => {
                console.log(err);
            })
    }


    return (
        <>
            <Canvas />
            <section id='do'>
                <div className='text-center'>
                    <h3>DOCUMENTS</h3>
                    <p>You have not uploaded any document here</p>
                </div>
                <div>
                    <button id='modal' className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <BiSolidJoystickButton />
                    </button>

                </div>

                <div  className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                          
                            <div id='example' className="modal-body">
                                <div id='doc' className='text-center fw-bold my-3'>DOCUMENT UPLOAD</div>
                                <label id='doc2' className='fw-bold' htmlFor="">Title</label>
                                <select onChange={(e) => setTitle(e.target.value)} className='form-control my-3' value={title}>
                                    <option value="O Levels Certificate">O Levels Certificate</option>
                                    <option value="Post Secondary Certificate">Post Secondary Certificate</option>
                                    <option value="Others">Others</option>
                                </select>
                                
                                <label id='doc3' className='fw-bold' htmlFor="">Description</label>
                                <input type="text" className='fom-control w-100 my-3' onChange={(e) => setDescription(e.target.value)} placeholder='Description' value={description} />
                            </div>
                            <div className="modal-footer" id='footer3'>
                                <input className='' id='update' type="file" onChange={(e) => changeFile(e)} />
                                <button type="button" id='update' onClick={upload} className="btn" data-bs-dismiss="modal">UPDATE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <table id='table' className='table table-striped text-light'>
                <tr className='fw-bold'>
                    <td>S/N</td>
                    <td>TITLE</td>
                    <td>DESCRIPTION</td>
                    <td>DATE</td>
                    <td>TIME</td>
                    <td>IMAGE</td>
                </tr>

                {
                    studentDetails.map((item, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td>{item.date}</td>
                            <td>{item.time}</td>
                            <td><img className='img' src={myImage} alt="" /></td>
                        </tr>
                    ))
                }
            </table>
        </>
    )
}

export default Document