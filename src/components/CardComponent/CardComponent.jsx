// src/components/CardComponent/DragInstructionCard.jsx
import React from 'react';
import './CardComponent.css';

const DragInstructionCard = () => {
  return (
    <div className="instruction-card bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-800 font-medium">Click or drag the blocks to build workout</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <span className="sr-only">Info</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-indigo-100 h-8 rounded"></div>
        <div className="bg-indigo-100 h-8 rounded"></div>
        <div className="bg-indigo-100 h-8 rounded"></div>
      </div>
      <div className="grid grid-cols-9 gap-1 mt-2">
        <div className="bg-indigo-100 h-4 rounded"></div>
        <div className="bg-indigo-100 h-6 rounded"></div>
        <div className="bg-indigo-100 h-8 rounded"></div>
        <div className="bg-indigo-100 h-10 rounded"></div>
        <div className="bg-indigo-100 h-8 rounded"></div>
        <div className="bg-indigo-100 h-6 rounded"></div>
        <div className="bg-indigo-100 h-8 rounded"></div>
        <div className="bg-indigo-100 h-6 rounded"></div>
        <div className="bg-indigo-100 h-4 rounded"></div>
      </div>
    </div>
  );
};

export default DragInstructionCard;