import React from "react";
import SignupForm from "../components/AccountAuth/forms/signupform";

import { Container } from 'react-bootstrap'
import { AuthProvider } from "../components/AccountAuth/authcontext";

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