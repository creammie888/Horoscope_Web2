import React from "react";
import '../css/indexHomepage.css'
import { useNavigate } from 'react-router-dom';

function Index1(){

    const navigate = useNavigate();

    return (
        <div className="container1">
            <div className="text"></div>
            <p>เริ่มต้นวันใหม่ด้วย<span>รอยยิ้ม</span> และค้นพบความสงบในใจ <span>มีโชคดีรอคุณอยู่</span></p>
            <button className="btn" onClick={() => navigate('/selectType')}>เริ่มต้น</button>
        </div>
    )
}

export default Index1;