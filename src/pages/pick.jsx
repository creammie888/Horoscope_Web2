import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "../css/pick.css"; // Import CSS

const totalCards = 78;
const radius = 900; // ขนาดความโค้งของไพ่
const maxRotation = 90; // องศาสูงสุดที่หมุนไปได้
const minRotation = -90; // องศาต่ำสุดที่หมุนไปได้
const friction = 0.9; // ลดแรงหน่วงของ inertia เพื่อให้สมูทขึ้น
const smoothFactor =0.2; // ลดความไวของการลากเมาส์

const Pick = () => {
  const navigate = useNavigate();
  const [rotation, setRotation] = useState(0);
  const smoothRotation = useRef(0);
  const velocity = useRef(0);
  const dragStart = useRef(null);
  const isDragging = useRef(false);
  const animationFrame = useRef(null);

  // ฟังก์ชันจับการเริ่มลาก
  const handleMouseDown = (e) => {
    dragStart.current = e.clientX;
    isDragging.current = true;
    velocity.current = 0;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  // ฟังก์ชันลากเมาส์เพื่อหมุนไพ่
  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const delta = (e.clientX - dragStart.current) * smoothFactor; // ลดความไวของเมาส์
    velocity.current = delta;
    dragStart.current = e.clientX;
  };

  // ฟังก์ชันหยุดลาก
  const handleMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
    animateInertia(); // เรียกใช้ Inertia Effect
  };

  // ฟังก์ชันทำให้หมุนสมูทขึ้น
  const animateInertia = () => {
    if (!isDragging.current) {
      velocity.current *= friction; // ลดความเร็วลงเรื่อยๆ
    }

    smoothRotation.current += velocity.current;
    smoothRotation.current = Math.max(minRotation, Math.min(maxRotation, smoothRotation.current));

    setRotation(smoothRotation.current);

    if (Math.abs(velocity.current) > 0.01) {
      animationFrame.current = requestAnimationFrame(animateInertia);
    } else {
      velocity.current = 0;
      cancelAnimationFrame(animationFrame.current);
    }
  };

  useEffect(() => {
    animationFrame.current = requestAnimationFrame(animateInertia);
    return () => cancelAnimationFrame(animationFrame.current);
  }, []);

  return (
    <div className="pick-container">
      <div className="drag-area" onMouseDown={handleMouseDown}></div>
      <div className="drag-text">
        <h1>เลือกไพ่เลย 1 ใบ</h1>
        <p>[เลื่อนเพื่อเลือกไพ่]</p>
      </div>
      {/* พื้นที่ลากไพ่ (อยู่นอกไพ่) */}
      <div className="curved-card-container">
        {Array.from({ length: totalCards }).map((_, index) => {
          const angle = ((index / (totalCards - 1)) - 0.5) * Math.PI;
          const rotatedAngle = angle + (rotation * Math.PI) / 180;
          const x = radius * Math.sin(rotatedAngle);
          const y = radius * (1 - Math.cos(rotatedAngle));

          return (
            <div
              key={index}
              className="card-picked"
              style={{
                transform: `translate(${x}px, ${y}px) rotate(${rotatedAngle}rad)`,
              }}
            >
              <button className="btn-card" onClick={() => navigate('/result')}><img src="/image/back.jpg" alt="card-back" /></button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pick;




