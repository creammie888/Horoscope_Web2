import React from "react";
import '../css/selectType.css'
import { useNavigate } from 'react-router-dom';

function TarotType() {
    const navigate = useNavigate();

    return (
        <div className="container1">
            <p><span>เริ่มต้นวันด้วยพลังดีๆ</span> <br />เลือกหัวข้อที่คุณอยากรู้ แล้วมาลุ้นคำทำนายไปด้วยกัน!</p>
            <div className="select-container">
                <div className="select-card-box">
                    <button className="btn-select-tarot" onClick={() => navigate('/wish')}>
                        <img src="/temp/sun.png" alt="tarot" />
                    </button>
                </div>
                <div className="select-card-box">
                    <button className="btn-select-tarot" onClick={() => navigate('/tarotofLove')}>
                        <img src="/temp/love.png" alt="tarot" />
                    </button>
                </div>
                <div className="select-card-box">
                    <button className="btn-select-tarot" onClick={() => navigate('/picktarotofWorkandStudy')}>
                        <img src="/temp/work.png" alt="fortune-sticks" />
                    </button>
                </div>
            </div>
            <button className="btn-back" onClick={() => navigate(-1)}>ย้อนกลับ</button>
        </div>
    )
    

}

export default TarotType;