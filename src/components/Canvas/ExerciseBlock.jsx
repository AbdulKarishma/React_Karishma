import React from 'react';

const ExerciseBlock = ({ exercise, onRemove }) => {
  return (
    <div className="bg-[#F7F7FF] rounded-lg p-4 flex items-center mb-2">
      <span className="mr-4 cursor-move">⋮⋮</span>
      <span className="mr-4">🏃</span>
      <span>{exercise.type}</span>
      <span className="ml-auto mr-4">{exercise.duration}</span>
      <button 
        onClick={onRemove}
        className="text-gray-400 hover:text-gray-600"
      >
        ⋮
      </button>
    </div>
  );
};

export default ExerciseBlock; 