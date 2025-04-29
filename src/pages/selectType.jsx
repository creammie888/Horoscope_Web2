import React from "react";
import '../css/selectType.css'
import { useNavigate } from 'react-router-dom';

function Type() {
    const navigate = useNavigate();

    const buttonClickSound = () => {
        const button = new Audio('/sound/click.wav');
        button.play();
      };

    return (
        <div className="container1">
            <p>ค้นหาคำตอบของใจคุณ <br /><span>ด้วยวิธีที่ใช่..</span></p>
            <div className="select-container-tarot">
            <div className="select-card">
                <button className="btn-select" onClick={() => {
                    buttonClickSound();
                    navigate('/selectTypeofTarot')
                }}>
                    <img src="/temp/card.png" alt="tarot" />
                    <h3>ไพ่ทาโร่ต์</h3>
                    <p>- เปิดไพ่ดูดวงวันนี้ แล้วมาดูกันว่าอะไรดีๆ กำลังรออยู่ -</p>
                </button>
            </div>
            <div className="select-card">
                <button className="btn-select" onClick={() => {
                    buttonClickSound();
                    navigate('/fortuneSticks')
                }}>
                    <img src="/temp/symsi.png" alt="fortune-sticks" />
                    <h3>เสี่ยงเซียมซี</h3>
                    <p>- เขย่าเซียมซีเสี่ยงโชค ลองดูว่าคำทำนายข้างในจะบอกอะไร -</p>
                </button>
            </div>
        </div>
        </div>
    )
    

}

export default Type;