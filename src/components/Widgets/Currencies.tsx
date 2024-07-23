"use client";

import { useEffect, useRef } from "react";

const Currencies = () => {
  const circleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updatePositions = () => {
      const icons = document.querySelectorAll('.currency-icon');
      const circle = circleRef.current;
      if (!circle) return;

      const radius = circle.clientWidth / 2;
      const angleStep = (2 * Math.PI) / icons.length;

      icons.forEach((icon, index) => {
        const angle = angleStep * index;
        const x = radius + radius * Math.cos(angle) - icon.clientWidth / 2;
        const y = radius + radius * Math.sin(angle) - icon.clientHeight / 2;

        (icon as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    updatePositions();
    window.addEventListener('resize', updatePositions);

    return () => {
      window.removeEventListener('resize', updatePositions);
    };
  }, []);

  return (
    <div className="grid grid-cols-2 justify-center items-center h-96">
      <div></div>
      <div ref={circleRef} className="relative circle w-64 h-64 rounded-full">
        <span className="absolute currency-icon">$</span>
        <span className="absolute currency-icon">€</span>
        <span className="absolute currency-icon">£</span>
        <span className="absolute currency-icon">₹</span>
        <span className="absolute currency-icon">¥</span>
        <span className="absolute currency-icon">₽</span>
        <span className="absolute currency-icon">₺</span>
      </div>
    </div>
  );
};

export default Currencies;
