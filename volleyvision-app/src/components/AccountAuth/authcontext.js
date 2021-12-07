import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../../firebase/firebase'
import { getFirestore, setDoc, doc } from 'firebase/firestore'
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

    function signup(userEmail, userPassword, userFirstName, userLastName, userGradYear){
        return auth.createUserWithEmailAndPassword(userEmail, userPassword).then(cred => {
            const db = getFirestore();
            const userRef = setDoc(doc(db, 'users', cred.user.uid), {
                firstName: userFirstName,
                lastName: userLastName,
                gradYear: userGradYear,
                email: userEmail,
                coach: false,
                recruiter: false
            });
          });
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