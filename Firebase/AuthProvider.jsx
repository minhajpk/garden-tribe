import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from './Firebase.init';

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
      const [loading, setLoading] = useState(true)
 

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    const signInWithGoogle = () =>{
        setLoading(true)

        return signInWithPopup(auth, provider )
    }
    const verificationEmail = () =>{
        setLoading(true)

        return sendEmailVerification(auth.currentUser)
    }




    useEffect(() =>{

        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setLoading(false)
            setUser(currentUser)

        })
        return ()=>{
            unsubscribe();
        }


    },[])

  const userInfo = {
    createUser,
    logIn,
    logOut,
    user,
    signInWithGoogle,
    verificationEmail,
    loading
  };

  return (
    <AuthContext value={userInfo}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;
