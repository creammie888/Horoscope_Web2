import Reactx from "react";
import { useNavigate } from 'react-router-dom';

function Index2(){
    
    const navigate = useNavigate();

    return (
        <div className="container1">
            <p>ตั้งใจอธิษฐานนะ แล้วไปกันต่อเลย</p>
            <button className="btn" onClick={() => navigate('/pick')}>ไปกันต่อ</button>
        </div>

    )
}

export default Index2;