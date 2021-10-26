import React from "react";
import SignupForm from "../components/AccountAuth/forms/signupform";

import { Container } from 'react-bootstrap'
import { AuthProvider } from "../components/AccountAuth/authcontext";

import "bootstrap/dist/css/bootstrap.min.css"
import logo from '../images/logo-clear.png';

export default function Signup() {
    return (
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
                            <SignupForm />
                        </div>
                    </Container>
                </AuthProvider>
            </div>
        </div>
    )
}