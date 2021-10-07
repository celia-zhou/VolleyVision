// NPM
import React from 'react';

// styles
import '../styles/404.css'

const fourohfour = () => {
    return (
        <div className="error-page">
            <div className="error-container">
                <a href='/'>
                    <img
                        className="error-logo"
                        src={require('../images/logo-clear.png')}
                        alt="logo"
                    />
                </a>

                <hr
                    className='error-bar'
                />

                <p id="error-message">
                    Error: 404 <br />
                    This page does not exist.
                </p>

            </div>
        </div>
    )
}

export default fourohfour;