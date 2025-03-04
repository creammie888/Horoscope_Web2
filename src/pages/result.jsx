import React, { useState } from 'react';
import '../css/result.css';
function Result() {

    const [clicked, setClicked] = useState(false);  // สร้าง state สำหรับการคลิก
    const [showPrediction, setShowPrediction] = useState(false); // สร้าง state สำหรับการแสดง prediction


    const handleClick = () => {
      setClicked(!clicked);  // เปลี่ยนสถานะเมื่อคลิก
      setShowPrediction(true);
    };


    return (
        <div className='result'>
            <h1>
                ความสดใสในวันนี้ของคุณ!
            </h1>

            <div className='curve-box'></div>

            <div className="container" onClick={handleClick}>
                <div className={`card ${clicked ? 'clicked' : ''}`}>
                    <div className='front'>
                        <img src="/image/ace_of_cups.png" alt="card-front" />
                    </div>
                    <div className='back'>
                        <img src="/image/back.jpg" alt="card-back" />
                    </div>
                </div>
            </div>
            <div className={`prediction ${showPrediction ? 'show' : ''}`}>
                <h2>
                    Ace of Cups
                </h2>
                <div className='definition'>
                    <div className='box'>รักแท้</div>
                    <div className='box'>โอกาส</div>
                    <div className='box'>ความสุข</div>
                    <div className='box'>การเยียวยา</div>

                </div>
                <div className='description'>
                    <p>วันนี้เป็นวันที่เต็มไปด้วยพลังงานแห่งความรัก ความเมตตา และโอกาสใหม่ ๆ ที่จะเข้ามาในชีวิต คุณอาจได้รับข่าวดีเกี่ยวกับความสัมพันธ์ หรือมีโอกาสเริ่มต้นสิ่งใหม่ที่ทำให้หัวใจพองโต จงเปิดใจรับพลังบวก และปล่อยให้ความรู้สึกนำทางคุณไปสู่สิ่งที่ดี</p>
                </div>
            </div>
        </div>
        
    );
}

export default Result;