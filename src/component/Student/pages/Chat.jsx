import React, { useEffect, useRef, useState } from 'react'
import socketClient from 'socket.io-client'
import Canvas from '../Canvas'
import './Styles/Chat.css'
import {GiPlayButton} from 'react-icons/gi'
import { Link } from 'react-router-dom'
import {GrPrevious} from 'react-icons/gr'


const Chat = () => {
    const [message, setMessage] = useState("")
    const [allMessages, setAllMessages] = useState([])
    
    let socket = useRef(0)
    // console.log(socket.current);
    // console.log(date);
    
    let endpoint = 'http://localhost:2300/'
    // let endpoint = 'http://localhost:2300/student/socket'
    
    useEffect(() => {
        socket.current = socketClient(endpoint)
        if (!localStorage.myStatus) {
            navigate("/student/signin")
        }
        
        else if (socket.current) {
            
            socket.current.on("broadcastMsg", (receivedMessage) => {
                setAllMessages([...allMessages, receivedMessage])
                console.log(receivedMessage);
                setMessage("")
            })
        }
    })
    
    
    let date = new Date().toLocaleDateString()
    let time = new Date().toLocaleTimeString()

    const sendMessage = () => {
        // console.log(message);
       
        socket.current.emit("sendMsg", message)
        // console.log(message);
    }


    return (
        <>
            
            <section id='chat'>

                <div id='chatty' className='container'>
                <Link to="/dashboard">
                    <GrPrevious/>
                </Link>
                <span className='datey'>{date}</span>
                {
                    allMessages.map((msg, index) => (
                        <div key={index}>
                       
                            <span>{msg}</span>  
                            <span>{time}</span>  

                            </div>
                        ))
                    }
                </div>
                
                <div className="inputbutton">
                <input id='inputbutton' placeholder='Message' className='rounded' type="text" onChange={(e) => setMessage(e.target.value)} value={message}/>
                    <span className='playbutton'>
                    <GiPlayButton  onClick={sendMessage}>Send Message</GiPlayButton>
                    </span>
                </div>

            </section>
        </>
    )
}

export default Chat