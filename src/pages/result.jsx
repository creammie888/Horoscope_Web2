import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/result.css';
import axios from 'axios';
function Result() {

    const navigate = useNavigate();
    const [clicked, setClicked] = useState(false);
    const [showPrediction, setShowPrediction] = useState(false);
    const [card, setCard] = useState(null);
    const BASE_URL = "http://localhost:3001/api/tarot";
    // const BASE_URL = process.env.REACT_APP_API_URL + "/api/tarot";


    useEffect(() => {
        const fetchCard = async () => {
          try {
            const delay = new Promise(resolve => setTimeout(resolve, 3000)); // หน่วงเวลา 3 วินาที
            const response = axios.get(BASE_URL); // โหลดข้อมูลไพ่
      
            const [cardData] = await Promise.all([response, delay]); // รอทั้งคู่พร้อมกัน
            setCard(cardData.data); // ค่อย set ข้อมูล
          } catch (error) {
            console.error("Error fetching tarot card:", error);
          }
        };
      
        fetchCard();
      }, []);
      

      const handleClick = () => {
        if (!clicked) {
          setClicked(true);
          setShowPrediction(true);
        }
      };


    return (
        <div className='result'>
            {!card ? (
            <div className="loader">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="white">
                    <path d="M6 2v2h1v2c0 1.85.63 3.59 1.69 5-1.06 1.41-1.69 3.15-1.69 5v2H6v2h12v-2h-1v-2c0-1.85-.63-3.59-1.69-5 1.06-1.41 1.69-3.15 1.69-5V4h1V2H6zm3 2h6v2c0 1.57-.53 3.02-1.41 4.17l-.39.51.39.51C14.47 11.98 15 13.43 15 15v2H9v-2c0-1.57.53-3.02 1.41-4.17l.39-.51-.39-.51C9.53 7.02 9 5.57 9 4V4z"/>
                </svg>
            </div>
            ) : (
            <div className='background-box'>
                    <div className={`curve-box ${clicked ? 'expanded' : ''}`}>
                        <div className={`info ${clicked ? 'expanded' : ''}`}>
                            <h1>ความสดใสในวันนี้ของคุณ!</h1>
                            <div className={`hint ${clicked ? 'expanded' : ''}`}><p>[แตะที่ไพ่เพื่อดูคำทำนาย]</p></div>
                            <div className="container" onClick={handleClick}>
                                <div className={`card ${clicked ? 'clicked' : ''}`}>
                                    <div className='front'>
                                    <img src={`/image/${card.image_path}`} alt="card-front" />
                                    </div>
                                    <div className='back'>
                                        <img src="/image/back.jpg" alt="card-back" />
                                    </div>
                                </div>
                            </div>
                            <div className={`prediction ${showPrediction ? 'show' : ''}`}>
                            <h2>{card.name}</h2>
                                <div className='definition'>
                                    <div className='box'>{card.keyword1}</div>
                                    <div className='box'>{card.keyword2}</div>
                                    <div className='box'>{card.keyword3}</div>
                                    <div className='box'>{card.keyword4}</div>
                                </div>
                                <div className='description'>
                                <p>{card.meaning}</p>
                                </div>
                                <button id='pick-again' onClick={() => navigate('/selectType')}>
                                    <p>ดูอีกครั้ง</p>
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
            )}

        </div>
        
    );
}

export default Result;