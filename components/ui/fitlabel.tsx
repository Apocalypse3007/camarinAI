import React from 'react';

interface FitLabelProps {
  text: React.ReactNode;
  position: string;
  borderOpacity?: number; // Optional prop for border opacity (0 to 1)
  boxOpacity?: number;    // Optional prop for box background opacity (0 to 1)
}

const FitLabel: React.FC<FitLabelProps> = ({
  text,
  position,
  borderOpacity = 1, // Default to fully opaque if not provided
  boxOpacity = 1,    // Default to fully opaque if not provided
}) => {
  // Ensure opacity values are within the valid range
  const clampedBorderOpacity = Math.min(Math.max(borderOpacity, 0), 0.7);
  const clampedBoxOpacity = Math.min(Math.max(boxOpacity, 0), 0.5);

  // Convert hex colors to RGBA with the specified opacity
  const borderGradient = `linear-gradient(to bottom, rgba(220, 220, 220, ${clampedBorderOpacity}), rgba(71, 71, 71, ${clampedBorderOpacity}))`;
  const boxGradient = `linear-gradient(to right, rgba(17, 17, 17, ${clampedBoxOpacity}), rgba(34, 34, 34, ${clampedBoxOpacity}))`;

  return (
    <div
      className={`absolute ${position} rounded-full shadow-lg`}
      style={{
        background: borderGradient, // Gradient border with adjustable opacity
        padding: '2px', // Border thickness
      }}
    >
      <div
        className="text-white text-sm px-4 py-2 rounded-full"
        style={{
          background: boxGradient, // Box background with adjustable opacity
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default FitLabel;
