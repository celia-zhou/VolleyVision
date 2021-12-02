import React, {useRef, useState } from "react";
import { Row, Col, Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from "../authcontext";
import { Link, useHistory } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css"

export default function SignupForm() {

    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const gradYearRef = useRef()
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

        if (gradYearRef.current.value.length != 4){
            return setError('Enter a valid graduation year.')
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value, firstNameRef.current.value, lastNameRef.current.value, gradYearRef.current.value)
            history.push("/login")
        } catch {
            setError('Failed to create an account.')
        }

        setLoading(false)
    }

    return (
        <>
        <div class="col d-flex justify-content-center">
            <Card> 
                <Card.Body>
                    <h2 className="text-center mb-4">
                        Sign Up
                    </h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}> 
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control placeholder="First Name" ref={firstNameRef} required/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control placeholder="Last Name" ref={lastNameRef} required/>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridYear">
                            <Form.Label>Graduation Year</Form.Label>
                            <Form.Control type="number" placeholder="Graduation Year" ref={gradYearRef} required/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" ref={emailRef} required/>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" ref={passwordRef} required/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" ref={passwordConfirmRef} required/>
                            </Form.Group>
                        </Row>
                        <br />
                        <Button disabled={loading} className="w-100" type="submit">
                            Sign Up
                        </Button>
                        </Form>
                </Card.Body>
            </Card>
            </div>
            <div className = "w-100 text-center mt-2">
                Already have an account? <Link to="/login"> Log In</Link>
            </div>
        </>
    )
}