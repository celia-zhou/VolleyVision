import React, { useContext, useState, useEffect } from 'react'
import { db, auth } from '../../firebase/firebase'

// import Signup from '../../pages/signup'
// import SignupForm from './forms/signupform'
// import Login from '../../pages/login'
// import LoginForm from './forms/loginform'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password){
        return (dispatch, getState, {getFirebase, getFirestore}) => {
            const firebase = getFirebase();
            const firestore = getFirestore();
            const state = getState();
            
            auth.createUserWithEmailAndPassword(email, password)
            .then((resp) => {
                return firestore.collection('users').doc(resp.user.uid).set({
                    id: resp.user.uid,
                    email: email
                })
            }).then(() => {
                console.log('success')
            }).catch (err => {
                console.log('fail')
            })
            
        }
    }

    function login(email, password){
        return auth.signInWithEmailAndPassword(email,password)
    }

    function logout(){
        return auth.signOut()
    }

    function resetPassword(email){
        return auth.sendPasswordResetEmail(email)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser, 
        signup,
        login,
        logout,
        resetPassword
    }

    return (
        <AuthContext.Provider value ={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}