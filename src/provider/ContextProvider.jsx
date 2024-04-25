import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { auth } from '../firebaseCofig';

export const AuthContext = createContext(null)
function ContextProvider({ children }) {

    const [dark, setDark] = useState(false)
    const [user, setUser] = useState(null)
    const [loading, setloading] = useState(true)
    const logInByGoogle = () => {
        setloading(true)
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }

    const logInByGithub = () => {
        setloading(true)
        const provider = new GithubAuthProvider();
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, pass) => {
        // setloading(true);
        return  createUserWithEmailAndPassword(auth, email, pass);
    };

    const signIn = (email, pass) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, pass)
    }

    const LogOut = () => {
        setloading(true)
        signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                setUser(null);
            }
            setloading(false);
        });
        return () => {
            unSubscribe()
        }
    }, [])



    const authinfo = { user, setUser, createUser, signIn, LogOut, logInByGoogle, loading, setloading, logInByGithub,dark ,setDark }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default ContextProvider