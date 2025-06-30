
// import React, { useEffect, useState } from 'react';

// const TypedText = () => {
//   const words = ['DREAMS', 'GUIDANCE', 'MENTORSHIP', 'OPPORTUNITIES', 'SUCCESS', 'FUTURE'];
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);
//   const [displayText, setDisplayText] = useState('');
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [isPaused, setIsPaused] = useState(false);

//   useEffect(() => {
//     const currentWord = words[currentWordIndex];
//     const timeout = setTimeout(() => {
//       if (isPaused) {
//         setIsPaused(false);
//         setTimeout(() => setIsDeleting(true), 1500);
//         return;
//       }

//       if (!isDeleting) {
//         if (displayText.length < currentWord.length) {
//           setDisplayText(currentWord.slice(0, displayText.length + 1));
//         } else {
//           setIsPaused(true);
//         }
//       } else {
//         if (displayText.length > 0) {
//           setDisplayText(displayText.slice(0, -1));
//         } else {
//           setIsDeleting(false);
//           setCurrentWordIndex((prev) => (prev + 1) % words.length);
//         }
//       }
//     }, isDeleting ? 75 : isPaused ? 2000 : 150);

//     return () => clearTimeout(timeout);
//   }, [displayText, isDeleting, currentWordIndex, words, isPaused]);

//   return (
//     <span className="relative inline-block">
//       <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-bold animate-pulse">
//         {displayText}
//       </span>
//       <span className="animate-pulse text-blue-400 dark:text-blue-300 ml-2 text-6xl">|</span>
      
//       {/* Glow effect */}
//       <span 
//         className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent opacity-50 blur-sm animate-pulse"
//         aria-hidden="true"
//       >
//         {displayText}
//       </span>
//     </span>
//   );
// };

// export default TypedText;

// src/components/TypedText.tsx
import React, { useEffect, useState, useRef, useMemo } from 'react';

const TypedText: React.FC = () => {
  const words = useMemo(
    () => ['DREAMS', 'GUIDANCE', 'MENTORSHIP', 'OPPORTUNITIES', 'SUCCESS', 'FUTURE'],
    []
  );
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');
  const [mode, setMode] = useState<'typing' | 'pausing' | 'deleting'>('typing');
  const pauseRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const word = words[idx];
      if (mode === 'typing') {
        setText((t) => {
          if (t.length < word.length) return word.slice(0, t.length + 1);
          pauseRef.current = 0;
          setMode('pausing');
          return t;
        });
      } else if (mode === 'pausing') {
        pauseRef.current += 1;
        if (pauseRef.current > 10) {
          setMode('deleting');
        }
      } else {
        setText((t) => {
          if (t.length > 0) return t.slice(0, -1);
          setIdx((i) => (i + 1) % words.length);
          setMode('typing');
          return '';
        });
      }
    }, mode === 'deleting' ? 75 : 150);

    return () => clearInterval(interval);
  }, [idx, mode, words]);

  return (
    <span className="relative inline-block">
      <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-bold animate-pulse">
        {text}
      </span>
      <span className="animate-pulse text-blue-400 dark:text-blue-300 ml-2 text-2xl">|</span>
      <span
        className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent opacity-50 blur-sm animate-pulse"
        aria-hidden="true"
      >
        {text}
      </span>
    </span>
  );
};

export default TypedText;
