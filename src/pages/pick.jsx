import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import "../css/pick.css";

const radius = 900;
const maxRotation = 90;
const minRotation = -90;
const friction = 0.9;
const smoothFactor = 0.2;

const Pick = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const type = location.state?.type || 'daily'; // รับ type จากหน้า wish

  // จำนวนไพ่ตามประเภท
  const cardCounts = {
    daily: 78,
    love: 26,
    work: 26,
  };
  const totalCards = cardCounts[type] || 78; // fallback เป็น 78 ถ้าไม่รู้จัก type

  const [rotation, setRotation] = useState(0);
  const smoothRotation = useRef(0);
  const velocity = useRef(0);
  const dragStart = useRef(null);
  const isDragging = useRef(false);
  const animationFrame = useRef(null);
  const [animate, setAnimate] = useState(false);

  const handleMouseDown = (e) => {
    dragStart.current = e.clientX;
    isDragging.current = true;
    velocity.current = 0;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const delta = (e.clientX - dragStart.current) * smoothFactor;
    velocity.current = delta;
    dragStart.current = e.clientX;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
    animateInertia();
  };

  const handleTouchStart = (e) => {
    dragStart.current = e.touches[0].clientX;
    isDragging.current = true;
    velocity.current = 0;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const delta = (e.touches[0].clientX - dragStart.current) * smoothFactor;
    velocity.current = delta;
    dragStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    animateInertia();
  };

  const animateInertia = () => {
    if (!isDragging.current) {
      velocity.current *= friction;
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
    setAnimate(true);
    animationFrame.current = requestAnimationFrame(animateInertia);
    return () => cancelAnimationFrame(animationFrame.current);
  }, []);

  return (
    <div className="pick-container">
      <div className="drag-area"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      />
      <div className="drag-text">
        <h1>เลือกไพ่เลย 1 ใบ</h1>
        <p>[เลื่อนเพื่อเลือกไพ่]</p>
      </div>
      <div className={`curved-card-container ${animate ? 'card-slide-in' : ''}`}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
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
              <button className="btn-card" onClick={() => navigate('/result', { state: { type } })}>
                <img src="/image/back.jpg" alt="card-back" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pick;
