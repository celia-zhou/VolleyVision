// NPM
import React from 'react';

// styles
import '../styles/login.css'

//images
import logo from '../images/logo-clear.png';
import phgrey from '../images/placeholder-gray.png';


const Login = () => {
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
            <div className="body-container" id="homebody">
                <div className="login-container">
                    <p>USERNAME</p>
                    <p>insert username here</p>
                    <br></br>
                    <p>PASSWORD</p>
                    <p>insert password here</p>
                    <br></br>
                    <p>LOGIN AS A: </p>
                    <div class = "row">
                        <div><a class="button" href="/player_dashboard">player</a></div>
                        <div><a class="button" href="/coach_dashboard">coach</a></div>
                    </div>
                    <div class = "row">
                        <div><a class="button" href="/recruiter_dashboard">recruiter</a></div>
                        <div><a class="button" href="/home">new account</a></div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Login;