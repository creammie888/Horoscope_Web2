import React from "react";
import '../css/selectType.css'
import { useNavigate } from 'react-router-dom';

function TarotType() {
  const navigate = useNavigate();

  const buttonClickSound = () => {
    const button = new Audio('/sound/click.wav');
    button.play();
  };

  // ✅ ฟังก์ชันส่ง type ไปหน้า wish
  const handleSelect = (type) => {
    buttonClickSound();
    navigate('/wish', { state: { type } });  // ← ส่ง type ไป wish
  };

  return (
    <div className="container1">
      <p><span>เริ่มต้นวันด้วยพลังดีๆ</span> <br />เลือกหัวข้อที่คุณอยากรู้ แล้วมาลุ้นคำทำนายไปด้วยกัน!</p>
      <div className="select-container">
        <div className="select-card-box">
          <button className="btn-select-tarot" onClick={() => handleSelect('daily')}>
            <img src="/temp/sun.png" alt="tarot" />
          </button>
        </div>
        <div className="select-card-box">
          <button className="btn-select-tarot" onClick={() => handleSelect('love')}>
            <img src="/temp/love.png" alt="tarot" />
          </button>
        </div>
        <div className="select-card-box">
          <button className="btn-select-tarot" onClick={() => handleSelect('work')}>
            <img src="/temp/work.png" alt="tarot" />
          </button>
        </div>
      </div>

      <button className="btn-back" onClick={() => {
        buttonClickSound();
        navigate(-1);
      }}>
        ย้อนกลับ
      </button>
    </div>
  );
}

export default TarotType;
