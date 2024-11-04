// FitLabel.tsx

import React, { memo } from 'react';

/**
 * **PositionClasses**
 *
 * A union type that restricts the `position` prop to specific Tailwind CSS class combinations.
 * Extend this type with additional positioning combinations as needed.
 */
type PositionClasses =
  | 'top-0 left-0'
  | 'top-0 right-0'
  | 'bottom-0 left-0'
  | 'bottom-0 right-0'
  | 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
  | 'top-1 left-1'
  | 'top-1 right-1'
  | 'bottom-1 left-1'
  | 'bottom-1 right-1';

/**
 * **FitLabelProps Interface**
 *
 * Defines the props accepted by the `FitLabel` component.
 */
interface FitLabelProps {
  /**
   * The content to display inside the label.
   */
  text: React.ReactNode;

  /**
   * Tailwind CSS classes to position the label absolutely within its parent.
   * Must be one of the predefined `PositionClasses`.
   */
  position?: PositionClasses;

  /**
   * Optional prop for border gradient opacity (range: 0 to 1).
   * Clamped to a maximum of 0.7 for design consistency.
   */
  borderOpacity?: number;

  /**
   * Optional prop for box background gradient opacity (range: 0 to 1).
   * Clamped to a maximum of 0.5 for design consistency.
   */
  boxOpacity?: number;
}

/**
 * **FitLabel Component**
 *
 * Displays a styled label with a gradient border and background.
 *
 * @param {FitLabelProps} props - The props for the component.
 * @returns {JSX.Element} The rendered FitLabel component.
 */
const FitLabel: React.FC<FitLabelProps> = ({
  text,
  position = 'top-0 left-0', // Default position
  borderOpacity = 1,          // Default to fully opaque
  boxOpacity = 1,             // Default to fully opaque
}) => {
  // Clamp opacity values to ensure they stay within the desired range
  const clampedBorderOpacity = Math.min(Math.max(borderOpacity, 0), 0.7);
  const clampedBoxOpacity = Math.min(Math.max(boxOpacity, 0), 0.5);

  // Define gradient backgrounds with the specified opacities
  const borderGradient = `linear-gradient(to bottom, rgba(220, 220, 220, ${clampedBorderOpacity}), rgba(71, 71, 71, ${clampedBorderOpacity}))`;
  const boxGradient = `linear-gradient(to right, rgba(17, 17, 17, ${clampedBoxOpacity}), rgba(34, 34, 34, ${clampedBoxOpacity}))`;

  return (
    <div
      className={`absolute ${position} rounded-full shadow-lg transition-opacity duration-300`}
      style={{
        background: borderGradient, 
        padding: '2px',              
      }}
      role="status"                  
      aria-label="Fit Label"          
    >
      <div
        className="text-white text-sm px-4 py-2 rounded-full"
        style={{
          background: boxGradient,    // Box background with adjustable opacity
        }}
      >
        {text}
      </div>
    </div>
  );
};

// Export the memoized component to prevent unnecessary re-renders
export default memo(FitLabel);
