import React, { useContext } from 'react'
import Slidebar from '../Components/Slidebar'
import Chat from '../Components/Chat'
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router';




const ChatSystem = () => {
    const currentUser = useContext(AuthContext)
    const ProtectedRoute = ({ children }) => {
        if (!currentUser) {
            return <Navigate to="/" />
        }
        return children;
    }
    return (

            <div className=''><p className='absolute -top-2 py-10 text-center left-1/2 right-0 left-0 justify-center font-Poppins font-semibold leading-8 text-lg text-sky-900'>Chat Admin - <span className='border-2 px-2 border-gray-500 rounded-xl '> thedeveloperyug</span></p>
            <p className='absolute top-8 py-10 text-center left-1/2 right-0 left-0 justify-center font-Poppins font-semibold leading-8 text-lg text-sky-900'>Try Searching " <i>Yogesh</i> "</p>
        <div className='chatContainer'>
            <div className="chatBox">
                <Slidebar/>
                <Chat/>
            </div>
        </div>
        </div>
    )
}

export default ChatSystem
