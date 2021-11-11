import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase/firebase'
// import Signup from '../../pages/signup'
// import SignupForm from './forms/signupform'
// import Login from '../../pages/login'
// import LoginForm from './forms/loginform'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function signup(email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    }

export function login(email, password){
        return auth.signInWithEmailAndPassword(email,password)
    }

export function logout(){
        return auth.signOut()
    }

export function resetPassword(email){
        return auth.sendPasswordResetEmail(email)
    }

    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged(user => {
    //         setCurrentUser(user)
    //         setLoading(false)
    //     })

    //     return unsubscribe
    // }, [])

    // const value = {
    //     currentUser, 
    //     signup,
    //     login,
    //     logout,
    //     resetPassword
    // }

    // return (
    //     // <AuthContext.Provider value ={value}>
    //     //     {!loading && children}
    //     // </AuthContext.Provider>
    // )
