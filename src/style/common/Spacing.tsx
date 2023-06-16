import React from 'react';

interface SpacingProps {
  size: number;
}

const Spacing = ({ size }: SpacingProps) => {
  return (
    <div
      style={{
        flex: 'none',
        height: `${size}px`,
      }}
    />
  );
};

export default Spacing;
