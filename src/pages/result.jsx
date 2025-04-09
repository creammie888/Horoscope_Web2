import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/result.css';
import axios from 'axios';
function Result() {

    const navigate = useNavigate();
    const [clicked, setClicked] = useState(false);
    const [showPrediction, setShowPrediction] = useState(false);
    const [card, setCard] = useState(null);
    // const BASE_URL = "http://localhost:3001/api/tarot";
    const BASE_URL = process.env.REACT_APP_API_URL + "/api/tarot";

    const handleClick = async () => {
      if (!clicked) {
        setClicked(!clicked);
        setShowPrediction(true);
        try {
            console.log("API URL:", BASE_URL);

            const response = await axios.get(`${BASE_URL}`);
            setCard(response.data);
            console.log("Tarot Card Data:", response.data);
        } catch (error) {
            console.error("Error fetching tarot card:", error);
        }
      }
    };


    return (
        <div className='result'>
            <div className='background-box'>
                    <div className={`curve-box ${clicked ? 'expanded' : ''}`}>
                        <div className={`info ${clicked ? 'expanded' : ''}`}>
                            <h1>ความสดใสในวันนี้ของคุณ!</h1>
                            <div className={`hint ${clicked ? 'expanded' : ''}`}><p>[แตะที่ไพ่เพื่อดูคำทำนาย]</p></div>
                            <div className="container" onClick={handleClick}>
                                <div className={`card ${clicked ? 'clicked' : ''}`}>
                                    <div className='front'>
                                    <img src={`/image/${card?.image_path || "back.jpg"}`} alt="card-front" />
                                    </div>
                                    <div className='back'>
                                        <img src="/image/back.jpg" alt="card-back" />
                                    </div>
                                </div>
                            </div>
                            <div className={`prediction ${showPrediction ? 'show' : ''}`}>
                            <h2>{card?.name || "กำลังโหลด..."}</h2>
                                <div className='definition'>
                                    <div className='box'>{card?.keyword1 || "..."}</div>
                                    <div className='box'>{card?.keyword2 || "..."}</div>
                                    <div className='box'>{card?.keyword3 || "..."}</div>
                                    <div className='box'>{card?.keyword4 || "..."}</div>
                                </div>
                                <div className='description'>
                                <p>{card?.meaning || "กำลังโหลด..."}</p>
                                </div>
                                <button id='pick-again' onClick={() => navigate('/wish')}>
                                    <p>ดูอีกครั้ง</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
        
    );
}

export default Result;