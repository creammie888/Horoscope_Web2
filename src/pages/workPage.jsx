import React from "react";
import { useNavigate } from 'react-router-dom';

function WorkPage(){
    
    const navigate = useNavigate();

    return (
        <div className="container1">
            <p>เรียนก็หนัก...ใจยิ่งหนักกว่า! <br />
            วิชาไหนจะผ่าน? โปรเจกต์ไหนจะปัง?<br />
            หรือจะมี “ดวงซวยตอนสอบ” อีก?<br />
            มาสุ่มไพ่กันแบบไม่ต้องท่องสูตร แล้วปล่อยให้ไพ่เป็นติวเตอร์จิตวิญญาณของคุณ!</p>
            <button className="btn" onClick={() => navigate('/picktarot')}>ไปกันต่อ</button>
        </div>

    )
}

export default WorkPage;