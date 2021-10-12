// NPM
import React from 'react';

// styles
import '../styles/home.css'

//images
import logo from '../images/logo-clear.png';
import phgrey from '../images/placeholder-gray.png';


const Home = () => {
    return (
        <div>
            <div className="header-container">
                    <div className="nav-bar">
                        <ul>
                            <div className="links">
                                <li><a href="/login">Login</a></li>
                                <li><a href="https://rpmsand.com/contact/">Contact</a></li>
                                <li><a href="https://rpmsand.com/about/">About</a></li>
                                <li><a href="/home" >Home</a></li>
                            </div>
                            <li className="left-li" style={{float:'left'}} >
                                <a href="/" style={{paddingTop:'0px', paddingLeft:'5%', paddingBottom: '0px'}}>
                                    <img className="logo" alt="logo" src={logo} />
                                </a>
                            </li>
                        </ul>
                </div>
            </div>
            <div className="body-container" id="home">
                <div className="announcement" style={{textAlign: 'center'}}>
                    <h1><br></br>
                        Join the #3 Beach Club in the Nation! <br></br> 
                        All skill levels are welcome. <br></br>
                        Your first practice is free! <br></br><br></br>
                    </h1>
                </div>
                <div class="row">
                    <div class="column3"><img className="phbody" alt="placeholder img" src = {phgrey}/></div>
                    <div class="column3"><img className="phbody" alt="placeholder img" src = {phgrey}/></div>
                    <div class="column3"><img className="phbody" alt="placeholder img" src = {phgrey}/></div>
                </div>
                <div class="row">
                    <div class="column2" style={{paddingLeft: '20%'}}>
                        <p>Learn More About RPM</p>
                        <br></br>
                        <div><a class="button" href="/home">PLACEHOLDER BUTTON</a></div>
                    </div>
                    <div class="column2" style={{paddingRight: '20%'}}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Home;