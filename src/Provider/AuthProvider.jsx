import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import {GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";


export const AuthContext =createContext(null)

  const AuthProvider = ({children}) => {
    const googleprovider =new GoogleAuthProvider()
   
    const [user,setuser]=useState(null);
    const [loading ,setloading ]=useState(true)

    const createUser =(email,password)=>{
      setloading(true)
        return createUserWithEmailAndPassword(auth,email,password);
      }
      const signin =(email,password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
      }
const signinWithGoogle =()=>{

  setloading(true)
  return signInWithPopup(auth,googleprovider)
}
      const logout = ()=>{
        setloading(true)
       return signOut(auth);
       
      }


      useEffect(()=>{
       
        const UnSubscribe = onAuthStateChanged(auth,currentUser=>{
          setuser(currentUser);
          console.log('observing current user',currentUser);
          setloading(false)
        })
        return()=>{
          UnSubscribe()
        }
      },[])

      
    const authInfo = {
      user,
      loading,
      createUser,
      signin,
      logout,
      signinWithGoogle
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;


AuthProvider.propTypes={
    children:PropTypes.node
}






/**
 * 
 * 1.create Context and export it 
 * 2.set provider with value
 * 3.use the auth provider in the main.jsx file
//  * 4.access  children in the authprovider componants as children and use it is the middle of the provider
 */