import React, {useRef, useState } from "react";
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from "../components/AccountAuth/authcontext";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from 'react-bootstrap'
import { AuthProvider } from "../components/AccountAuth/authcontext";
import logo from '../images/logo-clear.png';

export default function ForgotPasswordForm() {

    const emailRef = useRef()
    const { resetPassword } = useAuth()
    // const { currentUser } = useAuth()
    const [error, setError] = useState('')
    const [setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for further instructions.')
        } catch {
            setError('Failed to reset password')
        }

        setLoading(false)
    }

    return (
        <>
        <div>
            <div className="header-container">
                <div className="nav-bar">
                    <ul>
                        <div className="links">
                            <li><a href="/login">Login</a></li>
                            <li><a href="https://rpmsand.com/contact/">Contact     </a></li>
                            <li><a href="https://rpmsand.com/about/">About    </a></li>
                            <li><a href="/home">Home    </a></li>
                        </div>
                        <li className="left-li" style={{float:'left'}} >
                            <a href="/" style={{paddingTop:'0px', paddingLeft:'5%', paddingBottom: '0px'}}>
                                <img className="logo" alt="logo" src={logo} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
            <AuthProvider>
                <Container
                    className="d-flex align-items-center justify-content-center"
                    style= {{minHeight: "100vh"}}
                >
                    <div className="w-100" style={{ maxWidth: "400px"}}>
                    <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">
                        Password Reset
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
                        </Form.Group><br />
                        <Button disabled={loading} className="w-100" type="submit">
                            Reset Password
                        </Button>
                    </Form>
                    <div className = "w-100 text-center mt-2">
                        <Link to ="/login"> Login </Link>
                    </div>
                </Card.Body>
            </Card>
            <div className = "w-100 text-center mt-2">
                Need an account? <Link to="/signup">Sign Up</Link>
            </div>
                    </div>
                </Container>
            </AuthProvider>
           </div>
           </div>
        </>
    )
}