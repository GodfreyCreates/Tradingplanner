import React from 'react';

interface GradientCircleProps {
  position: string;
  gradientFrom: string;
  gradientTo: string;
  size: string;
  opacity: string;
}

const GradientCircle: React.FC<GradientCircleProps> = ({
  position,
  gradientFrom,
  gradientTo,
  size,
  opacity,
}) => {
  return (
    <div
      className={`absolute ${position} ${size} bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-full blur-3xl ${opacity}`}
    ></div>
  );
};

export default GradientCircle;
