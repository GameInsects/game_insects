import { faBug } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useEffect, useRef, useState } from 'react';

 const Bug = ({ onStop, onIncrementScore, x, y }) => {
  const [position, setPosition] = useState({ x, y });

  const animationFrameRef = useRef();

  useEffect(() => {
    const moveBug = () => {
      const newX = position.x + 1;
      const newY = position.y + 1;

      const screenWidth = window.innerWidth;

      const screenHeight = window.innerHeight;
 
      const reductionPercentage = screenWidth <= 500 ? 350 : 150;
      const maxX = screenWidth - 50;

      const maxY = screenHeight - 50;

      const updatedX = newX >= 0 ? (newX <= maxX ? newX : 0) : maxX;

      const updatedY = newY >= 0 ? (newY <= maxY ? newY : 0) : maxY;

      setPosition({ x: updatedX, y: updatedY });

      animationFrameRef.current = requestAnimationFrame(moveBug);
    };

    animationFrameRef.current = requestAnimationFrame(moveBug);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [position]);

  const handleBugClick = useCallback(() => {
    onIncrementScore();
    onStop();
  }, [onIncrementScore, onStop]);

  return (
    <div
      style={{
        height: '50px',
        left: position.x,
        position: 'absolute',
        top: position.y,
        width: '50px',
      }}
      onClick={handleBugClick}
    >
      <FontAwesomeIcon icon={faBug} color="red" size="4x" />
    </div>
  );
};
export { Bug };