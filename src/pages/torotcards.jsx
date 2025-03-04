import React, { useEffect, useState } from "react";
import "../css/card.css";

const TarotCard = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  // จำนวนไพ่ & ค่ามุม
  const numCards = 78;
  const arcRadius = 800; // รัศมีของครึ่งวงกลม
  const startAngle = -130; // เริ่มจากซ้ายสุด
  const endAngle = -50; // ไปจนถึงขวาสุด
  const angleStep = (endAngle - startAngle) / (numCards - 1);

  const meanings = [
    "การเริ่มต้นใหม่", "พลังสร้างสรรค์", "สัญชาตญาณ", "ความอุดมสมบูรณ์",
    "อำนาจ", "ความกล้าหาญ", "การเปลี่ยนแปลง", "ความสมดุล",
    "การตัดสินใจ", "โชคชะตา", "การเรียนรู้", "อารมณ์",
    "ความขยัน", "ความมั่นคง", "มิตรภาพ"
  ];

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  return (
    <div className="tarot-container">
      <h1>เลือกไพ่เลย 1 ใบ</h1>
      
      <div className="card-container">
        {Array.from({ length: numCards }, (_, i) => {
          const angle = startAngle + i * angleStep; // คำนวณมุมแต่ละใบ
          const radians = angle * (Math.PI / 180); // แปลงเป็นเรเดียน
          const x = arcRadius * Math.cos(radians);
          const y = arcRadius * Math.sin(radians);

          return (
            <div
              key={i}
              className="card"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(300% + ${y}px)`,
                transform: `rotate(${angle + 90}deg)`,
              }}
              onClick={() => handleCardClick(i)}
            ></div>
          );
        })}
      </div>

      {/* {selectedCard !== null && (
        <div className="selected-card">
          <h2>ไพ่หมายเลข {selectedCard + 1}</h2>
          <p>{meanings[selectedCard]}</p>
        </div>
      )} */}
    </div>
  );
};

export default TarotCard;
