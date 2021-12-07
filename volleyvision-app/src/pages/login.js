import React from "react";
import LoginForm from "../components/AccountAuth/forms/loginform";
import NavBar from "../components/NavBar/Navbar";
import { Container } from 'react-bootstrap'
import { AuthProvider } from "../components/AccountAuth/authcontext";

import "bootstrap/dist/css/bootstrap.min.css"
// styles
import '../styles/login.css'

//images
import logo from '../images/logo-clear.png';
//import phgrey from '../images/placeholder-gray.png';

export default function Login() {
    return (
        <div>
            <NavBar />
            <div className="body-container" id="homebody">
                <AuthProvider>
                    <Container
                    className="d-flex align-items-center justify-content-center"
                    style= {{minHeight: "100vh"}}
                    >
                        <div className="w-100" style={{ maxWidth: "400px"}}>
                            <LoginForm />
                        </div>
                    </Container>
                </AuthProvider>                
            </div>
            <div className="footer">
                <p>Copyright 2021 - All rights reserved by RPM Sand.</p>
            </div>
        </div>
        
    );
}

