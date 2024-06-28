import React, { useState } from 'react'
import io from "socket.io-client"
import Chat from './Chat'
import music from "./mixkit-tile-game-reveal-960.wav"

const socket=io.connect("https://chatroom-backend-o0v9.onrender.com/")

export default function App() {
  const [username,setUsername]=useState("");
  const [room,setRoom]=useState("");
  const [showchat,setShowChat]=useState(false)
  const notification = new Audio(music)
  const joinChat=()=>{
    if(username !== "" && room !== ""){
socket.emit("join_room",room)
setShowChat(true)
notification.play()
    }
  }
  return (
   <>
   

   
   {
    !showchat && (
    <div className="join_room">
    <h1>
      Join Chat
    </h1>
    <input type='text'
    placeholder='Enter Your Name'
    onChange={(e)=>setUsername(e.target.value)}/>
    <input type='text'
    placeholder='Enter Chat Room'
    onChange={(e)=>setRoom(e.target.value)}/>
    <button onClick={joinChat}>join</button>
   </div>
   )}
   {
  showchat &&
  (
    <Chat socket={socket} username={username} room={room} />

  )
}

 
   </>
  )
}
