import React, { useEffect, useState } from "react";
import '../css/fortuneSticks.css'
import { useNavigate } from 'react-router-dom';

function Sticks() {
  const navigate = useNavigate();
  const [shaking, setShaking] = useState(false);
  const [showStick4, setShowStick4] = useState(false);
  const [result, setResult] = useState(null);

  const handleShake = async () => {
    setShaking(true);         // เริ่มเขย่า
    setShowStick4(false);     // ซ่อนไม้ก่อน
  
    
    setTimeout(async () => {
      try {
        const res = await fetch('http://localhost:5001/api/fortune');  // ← เปลี่ยนให้ชี้ API จริง
        const data = await res.json();
    
        setResult(data);       // เก็บข้อมูลที่ดึงมา
        setShaking(false);     // หยุดเขย่า
        setShowStick4(true);   // แสดงไม้ที่ 4
    
        setTimeout(() => {
          navigate("/fortuneSticks_result", { state: { result: data } });  // ส่ง data ไปหน้าผล
        }, 2000);
    
      } catch (err) {
        console.error("Error fetching:", err);
        setShaking(false);
      }
    }, 2500);
    

    setTimeout(() => {
      // หน่วงเวลา 2.5 วินาทีเพื่อจำลองการสุ่ม
      setShaking(false);    // หยุดเขย่า
      setShowStick4(true);  // เด้งไม้ที่ 4 ขึ้นมา

      setTimeout(() => {
        navigate("/fortuneSticks_result");
      }, 2000);
    }, 2500);
  };
  

  const buttonClickSound = () => {
    const button = new Audio('/sound/click.wav');
    button.play();
  };

  return (
    <div className="container2">
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
      <button className="btn-shake" onClick={handleShake}>เริ่มเขย่าเลย</button>
    </div>
  );
}

export default Sticks;