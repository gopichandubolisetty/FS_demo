import React, { useState, useEffect } from 'react';

const Cursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function moveMouse(e) {
    setPos({ x: e.clientX, y: e.clientY });
  }

  useEffect(() => {
    window.addEventListener('mousemove', moveMouse);
    return () => window.removeEventListener('mousemove', moveMouse);
  }, []);

  return (
    <div
      className="bg-white size-3.5 rounded-full fixed pointer-events-none z-[-1] transition-all duration-75 ease"
      style={{ top: pos.y, left: pos.x }}
    ></div>
  );
};

export default Cursor;
