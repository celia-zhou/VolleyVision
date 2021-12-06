import React from "react"
import logo from '../../images/logo-clear.png'

export default function NavBar({}
    ){
        return(
            <div className="header-container">
            <div className="nav-bar">
                <ul>
                    <div className="links">
                        <li><a href="/login">Login</a></li>
                        <li><a href="/contact">Contact</a></li>
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
        )
    }
