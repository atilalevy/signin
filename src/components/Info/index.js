import React from 'react';
import './style.css';

import logo from '../../assets/images/logo.png';
import art from '../../assets/images/art.png';

const Info = () => {
    return(
        <div className="container">
            <div className="content">
                <div className="logo">
                    <img src={logo} alt="logo" className="logoimg" />
                    <p className="logotext"><strong>super</strong>path</p>
                </div>
                

                <p className="title">Create brilliant learning pathways</p>

                <p className="description">SuperPath is used by large and small teams to create and share amazing learning pathways.</p>
            </div>
            

            <img src={art} alt="art" className="artimg" />
        </div>
    )
}

export default Info;