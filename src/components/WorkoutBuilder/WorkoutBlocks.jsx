import React from 'react';

// Pencil Icon Component
const PencilIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 text-gray-500 ml-2 cursor-pointer"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.862 2.487a2.25 2.25 0 013.182 3.183l-10.5 10.5a4.5 4.5 0 01-1.691 1.1l-3.51 1.169 1.168-3.511a4.5 4.5 0 011.1-1.691l10.5-10.5z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 5.25L18 6.75m-2.25 1.5L4.875 19.125a2.25 2.25 0 01-.879.572l-3.51 1.169 1.168-3.511a2.25 2.25 0 01.572-.878L15.75 6.75z"
    />
  </svg>
);

const WorkoutBlock = ({ dropBlockSvg, content }) => {
  return (
    <div className="workout-block flex items-center justify-between p-2 bg-gray-100 rounded-lg">
      {/* Render the SVG */}
      <div className="block-svg">{dropBlockSvg}</div>
      {/* Block Content with Pencil Icon */}
      <div className="block-content flex items-center">
        {content}
        <PencilIcon />
      </div>
    </div>
  );
};

export default WorkoutBlock;
