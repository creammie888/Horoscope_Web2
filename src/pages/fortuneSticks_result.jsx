import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import '../css/fortuneSticksResult.css';

function StickResult() {
  const navigate = useNavigate();
  const location = useLocation();
  const result = location.state?.result;
  const [animate, setAnimate] = useState(false);
  const [soundPlayed, setSoundPlayed] = useState(false);

  useEffect(() => {
    if (result && !soundPlayed) {
      const timeout = setTimeout(() => {
        const audio = new Audio('/sound/magic1.wav');
        audio.volume = 0.5;
        audio.play();
        setSoundPlayed(true); // กันเสียงเล่นซ้ำ
      }, 1000); // รอ 2 วินาที
  
      return () => clearTimeout(timeout); // เคลียร์ timeout ถ้าคอมโพเนนต์ unmount
    }
  }, [result, soundPlayed]);
  

  useEffect(() => {
    setAnimate(true);

    setTimeout(() => setAnimate(true), 4000)
  }, []);

  const buttonClickSound = () => {
    const button = new Audio('/sound/click.wav');
    button.play();
  };

  if (!result) {
    return (
      <div className="container2">
        <button className="btn" onClick={() => navigate('/selectType')}>ลองใหม่อีกครั้ง</button>
      </div>
    );
  }

  return (
    <div className="container3">
        <h1 className="top-title">ความสดใสในวันนี้ของคุณ!</h1>
        <div className="stick-result-move">
            <img src="/temp/sticks2.png" alt="stick" />
            <p>{result.number}</p>
        </div>
        <div className="background-box-stick">
            <div className="info-stick">
                <div className="prediction-stick">
                    <div className="number">
                        <h3>หมายเลข</h3>
                        <h1>{result.number}</h1>
                    </div>
                    <h2>{result.result_level}</h2>
                    <p>{result.content}</p>
                    <button id='pick-again' onClick={() => {
                        buttonClickSound()
                        navigate('/selectType')}}>ดูอีกครั้ง</button>
                </div>
            
            </div>
      </div>
    </div>
  );
}

export default StickResult;
