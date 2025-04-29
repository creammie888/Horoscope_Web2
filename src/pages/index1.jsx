import React, { useEffect } from "react";
import '../css/indexHomepage.css'
import { useNavigate } from 'react-router-dom';

function Index1() {
  const navigate = useNavigate();

  const buttonClickSound = () => {
    const button = new Audio('/sound/click.wav');
    button.play();
  };

  return (
    <div className="container1">
        <p>
            เริ่มต้นวันใหม่ด้วย <span>รอยยิ้ม</span> และค้นพบความสงบในใจ <span>มีโชคดีรอคุณอยู่</span>
        </p>
        <button className="btn" onClick={() => {
            buttonClickSound();
            navigate('/selectType');
        }}>
        เริ่มต้น
        </button>
    </div>
  );
}

export default Index1;
