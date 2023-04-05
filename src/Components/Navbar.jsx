// import user1 from "../userImages/user1.jpg"
import { signOut } from 'firebase/auth';
import { auth } from "../firebase";
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';


const Navbar = () => {
    const { currentUser } = useContext(AuthContext);
    // console.log(currentUser.email)
    // console.log(currentUser.email)
    // console.log(currentUser)


    return (
        <div className='flex justify-between relative w-full h-20  bg-slate-600 chatNavbar'>
            <span className='chatLogo font-Poppins font-semibold leading-6 text-gray-100 text-lg p-4 tracking-wide'>React Chat </span>
            <div className="user flex w-full items-center bg-slate-600">
                <div className="ml-6">
                    <img src={currentUser.photoURL} className='w-12 h-12  rounded-full' alt="" />
                </div>
                <div className="">
                    <span className='font-Poppins font-medium text-gray-300 text-lg items-center mx-2'>{(!currentUser.displayName) ? "user" : currentUser.displayName}</span>
                    <button onClick={() => signOut(auth)} className='font-Poppins font-medium bg-gray-100 bg-opacity-60 py-1 rounded px-1 ml-2 text-sm'>Log Out</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
