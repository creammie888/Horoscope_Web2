import React from "react";
import { useNavigate } from 'react-router-dom';

function Index2(){
    
    const navigate = useNavigate();

    const buttonClickSound = () => {
        const button = new Audio('/sound/click.wav');
        button.play();
      };

    return (
        <div className="container1">
            <p>ตั้งใจอธิษฐานนะ แล้วไปกันต่อเลย</p>
            <button className="btn" onClick={() => {
                buttonClickSound();
                navigate('/pick')}}>
                    ไปกันต่อ
            </button>
        </div>

    )
}

export default Index2;