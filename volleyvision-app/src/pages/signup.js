import React from "react";
import SignupForm from "../components/Login/signupform";

import { Container } from 'react-bootstrap'
import { AuthProvider } from "../components/Login/authcontext";

import "bootstrap/dist/css/bootstrap.min.css"

export default function Signup() {
    return (
        <AuthProvider>
            <Container
                className="d-flex align-items-center justify-content-center"
                style= {{minHeight: "100vh"}}
            >
                <div className="w-100" style={{ maxWidth: "400px"}}>
                    <SignupForm />
                </div>
            </Container>
        </AuthProvider>

    )
}