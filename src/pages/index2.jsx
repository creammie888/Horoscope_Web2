import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';

function Index2() {
  const navigate = useNavigate();
  const location = useLocation();

  const type = location.state?.type || 'daily'; // fallback กรณีไม่มีค่า

  const buttonClickSound = () => {
    const button = new Audio('/sound/click.wav');
    button.play();
  };

  return (
    <div className="container1">
      <p>ตั้งใจอธิษฐานนะ แล้วไปกันต่อเลย</p>
      <button
        className="btn"
        onClick={() => {
          buttonClickSound();
          navigate('/pick', { state: { type } }); // ✅ ส่ง type ไปหน้า pick
        }}
      >
        ไปกันต่อ
      </button>
    </div>
  );
}

export default Index2;
