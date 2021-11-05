import React, {useRef, useState } from "react";
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from "../authcontext";
import { Link, useHistory } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css"

export default function SignupForm() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    // const { signup, currentUser } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        var userPreference
        var email

        if (passwordRef.current.value !== 
            passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        if (passwordRef.current.value.length < 6){
            return setError('Password is too short')
        }

        try {
            setError('')
            alert('Attempted sign-up for VolleyVision. Additional verification required.')
            if (window.confirm("Do you want to continue signing up?") == true) {
                userPreference = "Proceeding to verification stage."
                email = prompt("Please enter your professional email.", "user@rpmsand.com")
                if (email) {
                    alert("The email you entered is: " + email + ". Sign-up successful!" )
                    setLoading(true)
                    history.push("/coach_dashboard")
                } else {
                    alert("You did not enter a valid sign-up email. Redirecting to the login page.")
                    history.push('/login')
                }
            } else {
                userPreference = "Sign-up cancelled!"
                alert("Sign-up failed. Redirecting to the login page.")
                history.push('/login')
            }
        } catch {
            setError('Failed to create an account')
        }

        setLoading(false)
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">
                        Sign Up
                    </h2>
                    {/* <p>This is here for debugging purposes: <br />
                        Current User: <br />
                        {currentUser && currentUser.email}
                    </p> */}
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required />
                        </Form.Group>
                        <br />
                        <Button disabled={loading} className="w-100" type="submit">
                            Sign Up
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className = "w-100 text-center mt-2">
                Already have an account? <Link to="/login"> Log In</Link>
            </div>
        </>
    )
}