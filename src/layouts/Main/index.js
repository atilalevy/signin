import React from 'react';
import './style.css';

import SignIn from '../../components/SignIn';
import Info from '../../components/Info';

const Main = () => {
    return(
        <div className="main">
            <div className="info">
                <Info />
            </div>
            <div className="form">
                <SignIn />
            </div>
            
        </div>
    )
}

export default Main;