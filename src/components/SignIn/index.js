import React from 'react';
import './style.css';

import people from '../../assets/images/people.png';
import googlelogo from '../../assets/images/googlelogo.png';
import mortarboard from '../../assets/images/mortarboard.png';

function access() {
    window.alert('Access granted');
};

function googleAccess() {
    window.alert('Access with google');
};

const SignIn = () => {

    return(
        <div className="signin-container">
            
            <img src={people} alt="people" className="image-people" />

            <div className="signin-title-div">
                <img src={mortarboard} alt="mortarboard" className="mortarboard-icon" />
                <p className="signin-title">Access your account</p>
            </div>

            <div className="signin-form">

                <button 
                    type="submit" 
                    className="signin-google"
                    onClick={() => googleAccess()}
                >
                    <img src={googlelogo} alt="Google" className="google-logo" />
                    <p className="signin-google-text">Sign in with Google</p>
                </button>

                <div className="div-or">
                    <hr className="hr-or" />
                    <p className="or-text">OR</p>
                    <hr className="hr-or"/>
                </div>    
            
                <p className="signin-form-text">Your email</p> 
                <input type="text" className="signin-input" />

                <p className="signin-form-text">Set password</p>
                <input type="password" className="signin-input" />

                <button 
                    type="submit" 
                    className="signin-button"
                    onClick={() => access()}
                >
                    <p className="signin-button-text">Access</p>
                </button>
            </div>

            <div className="signup-div">
                <p className="signup-text">Don't have an account? <a href="#" className="signup-link">Sign up</a></p>
            </div>
            

        </div>
    )
};

export default SignIn;
