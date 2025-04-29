import React from "react";
import { useNavigate } from 'react-router-dom';

function LovePage(){
    
    const navigate = useNavigate();

    return (
        <div className="container1">
            <p>ความรักไม่ใช่แค่เรื่องของหัวใจ... <br />
            แต่คือพลังงานระหว่างคนสองคน <br />
            ใช้ไพ่เหล่านี้ช่วยสะท้อนพลังงาน ความคิด ความรู้สึก <br />
            และแนวโน้มในอนาคตของคุณกับเขา</p>
            <button className="btn" onClick={() => navigate('/picktarot')}>ไปกันต่อ</button>
        </div>

    )
}

export default LovePage;