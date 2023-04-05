import React, { useState } from 'react';
import { doc, setDoc } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db } from '../firebase';
import { auth } from '../firebase';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const Register = () => {
    const [err, setErr] = useState(false)
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        // console.log(name);
        const file = e.target[3].files[0];
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            // console.log(res);
            const storage = getStorage();
            const storageRef = ref(storage, displayName);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(

                (error) => {
                    setErr(true)
                    // Handle unsuccessful uploads
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateProfile(res.user, {
                            displayName,
                            photoURL: downloadURL,
                        });
                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL
                        });
                        navigate("/login")
                        await setDoc(doc(db, "userChats", res.user.uid), {});
                    });
                }
            );
        } catch (err) {
            setErr(true);
        }
    }
    return (
        <div className='formContainer'>
            <section className="text-gray-600 h-screen  body-font">
                <form onSubmit={handleSubmit}>
                    <div className="container lg:px-40 sm:px-20 sm:my-10 mx-auto justify-center  items-center">
                        <div className='justify-center mx-auto mb-10'>
                            <h2 className='text-center text-4xl text-gray-200 font-extrabold spa font-Poppins'>Register</h2>
                        </div>
                        <div className="lg:w-2/6 md:w-1/2 bg-gradient-to-b from-pink-500  to-orange-300  justify-center mx-auto rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
                            {/* <h2 className="text-gray-100 font-semibold text-2xl  title-font mb-5">Sign Up</h2> */}
                            <div className="relative mb-4">
                                <label htmlFor="full-name" className="leading-7 font-Poppins font-extralight text-lg mb-10 text-gray-100">Full Name</label>
                                <input type="text" required id="full-name" name="full-name" autoComplete='off' className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 font-Poppins font-extralight text-lg mb-10 text-gray-100">Email</label>
                                <input type="email" required id="email" name="email" autoComplete='off' className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="password" className="leading-7 font-Poppins font-extralight text-lg mb-10 text-gray-100">Password</label>
                                <input type="password" required id="pass" autoComplete='off' name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="file" className="leading-7 font-Poppins font-extralight text-lg mb-10 text-gray-100">Choose Avatar</label>
                                <input type="file" required className="block w-full rounded-full text-sm text-slate-500
                                    file:mr-4 file:py-2 file:px-4
                                    file:rounded-full file:border-0
                                    file:text-sm file:font-semibold
                                    file:bg-violet-100 file:text-violet-700
                                    hover:file:bg-violet-200
                                    "/>
                            </div>
                            <button type='submit' className="text-white rounded-full bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg">Register</button>
                            <p className="font-Poppins font-extralight text-lg mt-10 text-gray-100 dark:text-gray-400">
                                Already Have an Account?
                                <Link to="/login" className="font-medium font-Poppins font-extralight text-lg mt-10 text-gray-100 hover:underline dark:text-primary-500">Log In</Link>
                            </p>
                        </div>
                    </div>
                    {err && <span>Something went wrong</span>}
                </form>
            </section>
        </div>
    )
}

export default Register
