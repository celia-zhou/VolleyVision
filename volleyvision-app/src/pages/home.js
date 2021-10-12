// NPM
import React from 'react';

// styles
import '../styles/home.css'


const Home = () => {
    return (
        <div className="header-container">
            <div className="nav-bar">
                <ul>
                    <div className="links">
                        <li><a href="/login">Login</a></li>
                        <li><a href="/login">Contact     </a></li>
                        <li><a href="/login">About    </a></li>
                        <li><a href="/home">Home    </a></li>
                    </div>
                    <li className="left-li" style={{float:'left'}} >
                        <a href="/">
                            <img
                                alt="logo"
                                src={require('../images/logo-clear.png')}
                                style={{ height: '150px', width: '50px'}} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Home;