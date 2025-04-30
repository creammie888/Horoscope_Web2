import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import '../css/fortuneSticksResult.css';

function StickResult() {
  const navigate = useNavigate();
  const location = useLocation();
  const result = location.state?.result;
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  if (!result) {
    return (
      <div className="container2">
        <h1>ไม่พบข้อมูลจากหน้าก่อน</h1>
        <button onClick={() => navigate('/selectType')}>กลับไปเลือกใหม่</button>
      </div>
    );
  }

  return (
    <div className="container2">
      <h1>ความสดใสในวันนี้ของคุณ!</h1>
      <div className="stick-result-move">
        <img src="/temp/sticks2.png" alt="stick" />
        <p>{result.number}</p>
      </div>
      <div className={`background-box-stick ${animate ? 'slide-in' : ''}`}>
        <div className="curve-box">
          <div className="info-stick">
            <div className="prediction-stick">
              <h3>หมายเลข</h3>
              <h1 className="Number">{result.number}</h1>
              <h2>{result.result_level}</h2>
              <div className='description-stick'>
                <p>{result.content}</p>
              </div>
              <button id='pick-again' onClick={() => navigate('/selectType')}>
                <p>ดูอีกครั้ง</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StickResult;
