import React, { useContext, useEffect } from 'react'
import Message from './Message'
import { ChatContext } from '../context/ChatContext';
import { useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

const Messages = () => {
  const {data} = useContext(ChatContext);
  const [messages, setmessages ] = useState([])
  useEffect(() => {
    const unsub = onSnapshot(doc(db,"chats",data.chatId),(doc)=>{
      doc.exists() && setmessages(doc.data().messages)
    })
    return () => {
   unsub()
    }
  }, [data.chatId])
  // console.log(messages)
  
  return (
    <div style={{height:"448px"}} className='mt-2 messages overflow-y-scroll ' >
      {messages.map(m=>(
        <Message message={m} key={m.id}/>
        ))}
    </div>
  )
}

export default Messages
