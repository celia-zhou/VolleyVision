import React, {useRef, useState, useEffect } from "react";
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from "../authcontext";
import { Link, useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import { getAuth } from "firebase/auth";
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore/lite";
import { useParams } from "react-router-dom";

export const LoginForm = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const { login} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const [state, setState] = useState({coach: false, recruiter: false});

    async function handleClickLogin(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            const userCredential = await login(emailRef.current.value, passwordRef.current.value)
            let uid = userCredential.user.uid;

            const db = getFirestore();
            getDoc(doc(db, 'users', uid)).then((snapshot) => {
                const data = snapshot.data()
                
                console.log(data)
                console.log('state before setState')
                console.log(state)

                console.log('data.coach')
                console.log(data.coach)
                console.log('data.recruiter')
                console.log(data.recruiter)
                if (data != null){
                    console.log('we went inside the if statement')
                    
                        setState({
                            coach: true
                        })
                    
                    
                        setState({
                            recruiter: data.recruiter
                        })
                    
                }
    
                console.log('state after setState')
                console.log(state)

            });

            if ((state.coach)){
                history.push("/coach_dashboard")
            } else if ((state.recruiter)){
                history.push("/recruiter_dashboard")
            } else {
                history.push("/player_dashboard")
            }

        } catch {
            setError('Failed to login')
        }
        setLoading(false)
    }

    

    // async function handleSubmit(e) {

    //     e.preventDefault()

    //     try {
    //         setError('')
    //         setLoading(true)
    //         await login(emailRef.current.value, passwordRef.current.value)
    //     } catch {
    //         setError('Failed to login')
    //     }

    //     setLoading(false)
    // }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">
                        Log In
                    </h2>
                    {/* <p>This is here for debugging purposes: <br />
                        Current User: <br />
                        {currentUser && currentUser.email}
                    </p> */}
                    {error && <Alert variant="danger">{error}</Alert>}
                
                    <Form onSubmit={handleClickLogin}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <br />
                        <Button disabled={loading} className="w-100" type="submit" onClick={handleClickLogin}>
                            Log In 
                        </Button>
                    </Form>
                    <div className = "w-100 text-center mt-2">
                        <Link to ="/forgotpassword"> Forgot Password? </Link>
                    </div>
                </Card.Body>
            </Card>
            <div className = "w-100 text-center mt-2">
                Need an account? <Link to="/signup">Sign Up</Link>
            </div>
        </>
    )
}

export default LoginForm