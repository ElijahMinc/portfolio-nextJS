import { useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export const useSmoothMovementCoords = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [inputWidthRange, setInputWidthRange] = useState(0);
  const [inputHeightRange, setInputHeightRange] = useState(0);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useTransform(x, [0, inputWidthRange], [-10, 10]);
  const smoothY = useTransform(y, [0, inputHeightRange], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    x.set(mousePosition.x);
    y.set(mousePosition.y);
  }, [mousePosition, x, y]);

  useEffect(() => {
    setInputWidthRange(window.innerWidth);
    setInputHeightRange(window.innerHeight);
  }, []);

  return {
    mousePosition,
    smoothX,
    smoothY,
  };
};
