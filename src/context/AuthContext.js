import React, { useContext, createContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebase"

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});
   
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            // console.log(user)
        });
        return () => {
            unsub();
        }
    }, []);
    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
};


export const useAuth = () => {
    return useContext(AuthContext);  //change
  };