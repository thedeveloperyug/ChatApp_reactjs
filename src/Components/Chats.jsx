import { doc, onSnapshot } from 'firebase/firestore'
import React from 'react'
import { useEffect } from 'react'
// import userimg from '../userImages/user1.jpg'
import { useState } from 'react'
import { db } from '../firebase'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'


const Chats = () => {
  const [chats, setChats] = useState([])
  const {currentUser} = useContext(AuthContext);
  const {dispatch} =  useContext(ChatContext);
  // console.log(currentUser.uid)
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
        // console.log("Current data: ", doc.data());
      });
      return () => {
        unsub();
      };
    };
    currentUser.uid && getChats();
  }, [currentUser.uid]);
// console.log(chats)
// console.log(Object.entries(chats))
const handleSelect = (u) => {
  dispatch({type:"CHANGE_USER",payload:u})
}

return (
  <>
    <div className='chats '>
      {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => (
        // <div className='bg-transparent text-center text-base font-Poppins font-medium border-b-2 border-opacity-50 border-gray-600'>
          <div key={chat[0]} onClick={()=>handleSelect(chat[1]?.userInfo)} className='flex cursor-pointer items-center text-base font-Poppins font-medium border-b-2 border-opacity-50 border-gray-600 hover:bg-gray-400 '>
              <img src={chat[1]?.userInfo?.photoURL} className='w-16 h-16 px-2 rounded-full py-2 mx-2 ' alt='userimg' />
              <div className="">
              <p className=' text-white text items-start font-Poppins font-medium leading-6'>{chat[1]?.userInfo?.displayName}</p>
                <p className='flex text-gray-400 text-xs items-center font-Poppins  leading-6'>{chat[1]?.lastMessage?.text}</p>
              </div>
          </div>
        // </div>
    ))}
    </div>
  </>
)
}

export default Chats
