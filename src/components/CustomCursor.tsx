
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = 0;
    const throttleTime = 1000 / 30; // 30 fps limit for performance

    const updateCursorPosition = (e: MouseEvent) => {
      const currentTime = Date.now();
      
      if (currentTime - lastTime >= throttleTime) {
        setCursorPosition({ x: e.clientX, y: e.clientY });
        
        // Delayed dot follow effect with throttling
        setTimeout(() => {
          setDotPosition({ x: e.clientX, y: e.clientY });
        }, 50);
        
        lastTime = currentTime;
      }
    };

    const throttledUpdate = (e: MouseEvent) => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      
      animationFrameId = requestAnimationFrame(() => {
        updateCursorPosition(e);
      });
    };

    // Only add cursor effects on desktop devices
    if (window.innerWidth >= 1024) {
      window.addEventListener('mousemove', throttledUpdate, { passive: true });
    }

    return () => {
      window.removeEventListener('mousemove', throttledUpdate);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  // Only render on large screens to improve performance
  if (typeof window !== 'undefined' && window.innerWidth < 1024) {
    return null;
  }

  return (
    <>
      <div
        className="cursor hidden lg:block"
        style={{
          left: cursorPosition.x - 10,
          top: cursorPosition.y - 10,
        }}
      />
      <div
        className="cursor-dot hidden lg:block"
        style={{
          left: dotPosition.x - 4,
          top: dotPosition.y - 4,
        }}
      />
    </>
  );
};

export default CustomCursor;
