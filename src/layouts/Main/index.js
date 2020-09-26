import React from 'react';
import './style.css';

import FormSign from '../../components/FormSign';
import Info from '../../components/Info';

const Main = () => {
    return(
        <div className="main">
            <div className="info">
                <Info />
            </div>
            <div className="form">
                <text>Form</text>
            </div>
            
        </div>
    )
}

export default Main;