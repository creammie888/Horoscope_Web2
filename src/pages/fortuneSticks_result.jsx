import React from "react";
import { useNavigate } from 'react-router-dom';
import '../css/fortuneSticksResult.css';

function StickResult(){
    
    const navigate = useNavigate();

    return (
        <div className="container2">
            <div className="stick-result-move">
                <img src="/temp/sticks2.png" alt="stick" />
                <p>15</p>
            </div>
        </div>

    )
}

export default StickResult;