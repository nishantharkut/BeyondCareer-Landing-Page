
import React, { useEffect, useState, useRef } from 'react';

const ParallaxBackground: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const mouse = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);

  // useEffect(() => {
  //   const handleMouseMove = (e: MouseEvent) => {
  //     setMousePosition({
  //       x: (e.clientX / window.innerWidth - 0.5) * 50,
  //       y: (e.clientY / window.innerHeight - 0.5) * 50,
  //     });
  //   };

  //   const handleScroll = () => {
  //     setScrollY(window.scrollY);
  //   };

  //   window.addEventListener('mousemove', handleMouseMove);
  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('mousemove', handleMouseMove);
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 50;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 50;
    };
    const onScroll = () => {
      scrollRef.current = window.scrollY;
    };

    let rafId: number;
    const loop = () => {
      setMousePosition({ ...mouse.current });
      setScrollY(scrollRef.current);
      rafId = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('scroll', onScroll);
    loop();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Primary Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/80 to-purple-900/90 dark:from-slate-950/95 dark:via-blue-950/85 dark:to-purple-950/95" />

      {/* Animated Gradient Orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse"
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5 - scrollY * 0.1}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      />
      <div
        className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/25 to-cyan-500/25 rounded-full blur-3xl animate-pulse"
        style={{
          animationDelay: '1s',
          transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3 - scrollY * 0.15}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"
        style={{
          animationDelay: '2s',
          transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4 - scrollY * 0.2}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      />

      {/* Floating Particles */}
      {/* <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 dark:bg-blue-300/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
              transform: `translateY(${scrollY * 0.1 * (Math.random() * 2 - 1)}px)`
            }}
          />
        ))}
      </div> */}

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px',
          transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`
        }}
      />
    </div>
  );
};

export default ParallaxBackground;
