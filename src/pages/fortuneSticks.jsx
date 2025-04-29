import React, { useEffect } from "react";
import '../css/fortuneSticks.css'
import { useNavigate } from 'react-router-dom';

function Sticks() {
  const navigate = useNavigate();

  const buttonClickSound = () => {
    const button = new Audio('/sound/click.wav');
    button.play();
  };

  return (
    <div className="container1">
    </div>
  );
}

export default Sticks;