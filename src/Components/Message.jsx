import React, { useEffect } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'
import { useRef } from 'react'
const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext)
  const { data } = useContext(ChatContext)
  const ref = useRef()
  // useEffect(() => {
  //   ref.current?.scrollIntoView({ behavior: "smooth" })
  // }, [message])

  return (

    <div ref={ref} className={`msg flex mx-2 ${message.senderId === currentUser.uid && "owner"}`}>
      <div className='messageInfo px-2  '>
        <img src={message.senderId === currentUser.uid ? currentUser.photoURL : data.user.photoURL} className='w-12 rounded-full' alt="" />
        {/* <span className='text-xs text-gray-600'>just now</span> */}
      </div>
      <div className='messageContent flex w-4/5 flex-col gap-6 '>
        <p className='text-lg  bg-white text-gray-800 rounded-b-lg rounded-tr-lg font-Poppins py-2 px-2'>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}

      </div>

    </div>
  )
}

export default Message
