\"use client\";

import { useEffect, useState } from "react";

export function ChromeCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      className="chrome-cursor"
      style={{
        transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
      }}
    >
      <svg
        className="chrome-cursor__shape"
        viewBox="0 0 40 34"
        aria-hidden="true"
      >
        <polygon
          points="20 1 37 17 20 33 3 17"
          fill="url(#chromeTop)"
        />
        <polygon
          points="20 1 37 17 20 20 3 17"
          fill="url(#chromeHighlight)"
        />
        <polygon
          points="3 17 20 33 20 20"
          fill="url(#chromeLeft)"
        />
        <polygon
          points="20 20 37 17 20 33"
          fill="url(#chromeRight)"
        />
        <defs>
          <linearGradient id="chromeTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f3f3f3" />
            <stop offset="45%" stopColor="#d9d9d9" />
            <stop offset="100%" stopColor="#b8b8b8" />
          </linearGradient>
          <linearGradient id="chromeHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#f0f0f0" />
            <stop offset="70%" stopColor="#cfcfcf" />
            <stop offset="100%" stopColor="#f5f5f5" />
          </linearGradient>
          <linearGradient id="chromeLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d0d0d0" />
            <stop offset="100%" stopColor="#a8a8a8" />
          </linearGradient>
          <linearGradient id="chromeRight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f0f0f0" />
            <stop offset="100%" stopColor="#b0b0b0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

