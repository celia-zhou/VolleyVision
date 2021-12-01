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

        if (passwordRef.current.value !== 
            passwordConfirmRef.current.value) {
            return setError('Passwords do not match.')
        }

        if (passwordRef.current.value.length < 6){
            return setError('Password is too short.')
        }

        if (passwordRef.current.value.search(/[0-9]/) < 0) {
            return setError('Password must contain a number.')
        }

        if (passwordRef.current.value.search(/[a-z]/) < 0) {
            return setError('Password must contain a letter.')
        }

        if (passwordRef.current.value.search(/[A-Z]/) < 0) {
            return setError('Password must contain a capital letter.')
        }

        if (passwordRef.current.value.search(/[!@#$%^&*]/) < 0) {
            return setError('Password must contain a special character.')
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/login")
        } catch {
            setError('Failed to create an account.')
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