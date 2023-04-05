import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { auth } from "../firebase";
import { useContext } from 'react';
import usersvg from "../userImages/user.svg"
import { signOut } from 'firebase/auth';

const Navigation = () => {
  const {currentUser} = useContext(AuthContext);
  return (
    <>

      <header className="text-gray-600 body-font navbar">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="/" className="flex title-font font-medium items-center text-gray-800 mb-4 md:mb-0">
            <img src="images/logotcf.png" alt="tcflogo" className="w-16" />
            <span className="ml-3 text-2xl font-semibold font-Poppins text-blue-900">thecodersfactory</span>
          </Link>
          <nav className="md:ml-auto md:mr-auto font-Poppins text-zinc flex flex-wrap text-xl text-center items-center font-bold justify-center space-x-4">
            {/* <Link to="/learn" className="hover:text-gray-900 uppercase ">Learn</Link>
            <Link to="/about" className="hover:text-gray-900 uppercase ">Projects</Link>
            <Link to="/discuss" className="hover:text-gray-900 uppercase ">Discussions</Link>
            <Link to="/developers" className="hover:text-gray-900 uppercase ">Developers</Link>
            <Link to="/about" className="hover:text-gray-900 uppercase ">About</Link> */}
            <Link to="/Chatsys" className="hover:text-gray-900 uppercase ">Chat</Link>

          </nav>
          <div className="flex items-center">
            <div className='flex items-center font-Poppins justify-center'>
              <img src={(!currentUser) ? usersvg : currentUser.photoURL} className='w-10 h-10 rounded-full ' alt="usersvg" srcset="" />

            </div>
            <div className='flex items-center font-Poppins'>
              <Link to={(!currentUser) ? "/login" : "/chatsys"} className="items-center text-orange-800 font-bold font-Poppins border-0 py-1 px-3 focus:outline-none hover:text-orange-900 rounded-lg text-xl mt-4 md:mt-0">{(!currentUser) ? " Log In " : currentUser.displayName }</Link>
              <button onClick={()=>signOut(auth) } className="items-center text-zinc-900 font-bold font-Poppins border-0 py-1 px-3 focus:outline-none hover:text-orange-900 rounded-lg text-xl mt-4 md:mt-0">{(currentUser) ? "Log out" : ""}</button>

              <Link to="/" className="items-center text-zinc-900 font-bold font-Poppins border-0 py-1 px-3 focus:outline-none hover:text-orange-900 rounded-lg text-xl mt-4 md:mt-0">{(!currentUser) ? " Register " : ""}</Link>  
            
            </div>

          </div>
        </div>
      </header>

    </>
  )
}

export default Navigation;
