
import { useEffect, useState } from 'react';

const initialTime = 60 * 1000;
 const useCountdown = ({
  isCountdownStart,
  duration = initialTime,
  setIsCountdownStart,
}) => {
  const [timeRemaining, setTimeRemaining] = useState(duration);

  useEffect(() => {
    let interval;
    if (isCountdownStart) {
      interval = setInterval(() => {
        setTimeRemaining(prevTime => (prevTime <= 1000 ? 0 : prevTime - 1000));
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isCountdownStart]);

  useEffect(() => {
    if (!timeRemaining) {
      setTimeRemaining(duration);
      setIsCountdownStart(false);
    }
  }, [timeRemaining]);

  return [timeRemaining, setTimeRemaining];
};
export default useCountdown;