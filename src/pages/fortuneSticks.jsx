import React, { useEffect, useState } from "react";
import '../css/fortuneSticks.css';
import { useNavigate } from 'react-router-dom';

function Sticks() {
  const navigate = useNavigate();
  const [shaking, setShaking] = useState(false);
  const [showStick4, setShowStick4] = useState(false);
  const [result, setResult] = useState(null);

  const handleShake = async () => {
    setShaking(true);
    setShowStick4(false);

    setTimeout(async () => {
      try {
        const res = await fetch('https://horoscope-backend-190g.onrender.com/api/fortune');
        const data = await res.json();

        setResult(data);
        setShaking(false);
        setShowStick4(true);

        // ให้ไม้เด้งขึ้นมาก่อน แล้วค่อย navigate ไปหน้าผล
        setTimeout(() => {
          navigate("/fortuneSticks_result", { state: { result: data } });
        }, 2000);

      } catch (err) {
        console.error("Error fetching:", err);
        setShaking(false);
      }
    }, 2500);
  };

  const buttonClickSound = () => {
    const button = new Audio('/sound/click.wav');
    button.play();
  };

  return (
    <div className="container2">
      <p className="topic2">อย่าลืมอธิฐานนะ</p>
      <div className={`fortune-sticks-container ${shaking ? 'shake' : ''}`}>
        <div className="sticks-box">
          <img src="/temp/cylinder_shadow.png" alt="fortune" />
        </div>
        <div className="sticks-container">
          <div className={`stick1 ${shaking ? "shake" : ""}`}>
            <img className="stick" src="/temp/sticks2.png" alt="stick" />
          </div>
          <div className={`stick2 ${shaking ? "shake" : ""}`}>
            <img className="stick" src="/temp/sticks3.png" alt="stick" />
          </div>
          <div className={`stick3 ${shaking ? "shake" : ""}`}>
            <img className="stick" src="/temp/sticks4.png" alt="stick" />
          </div>
          <div className={`stick4 ${showStick4 ? 'rise' : ''}`}>
            <img className="stick" src="/temp/sticks2.png" alt="stick" />
          </div>
          <div className={`stick5 ${shaking ? "shake" : ""}`}>
            <img className="stick" src="/temp/sticks4.png" alt="stick" />
          </div>
          <div className={`stick6 ${shaking ? "shake" : ""}`}>
            <img className="stick" src="/temp/sticks1.png" alt="stick" />
          </div>
        </div>
        <div className="sticks-box">
          <img src="/temp/cylinder.png" alt="fortune" />
        </div>
      </div>
      <button className="btn-shake" onClick={() => {
                        buttonClickSound()
                        handleShake()
                      }}>เริ่มเขย่าเลย</button>
    </div>
  );
}

export default Sticks;
