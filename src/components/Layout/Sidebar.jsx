import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

// Block SVG Component
const BlockSVG = ({ height = "48" }) => (
  <svg width="88" height={height} viewBox={`0 0 88 ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="88" height={height} rx="8" fill="#F2F2F2"/>
    <rect y={height - 18} width="88" height="18" fill="#4339F2" fillOpacity="0.5"/>
  </svg>
);

// Workout blocks data
const workoutBlocks = [
  { id: 'run', type: 'Run', height: '48' },
  { id: 'warmup', type: 'Warm Up', height: '48' },
  { id: 'sprint', type: 'Sprint', height: '48' },
  { id: 'rest', type: 'Rest', height: '48' },
  { id: 'cooldown', type: 'Cool Down', height: '48' },
  { id: 'stretch', type: 'Stretch', height: '48' }
];

const SidebarBlocks = () => {
  return (
    <div className="w-[300px] bg-white rounded-lg p-6">
      <h3 className="text-gray-700 font-medium mb-6">
        Click or drag the blocks to build workout
      </h3>

      <Droppable droppableId="sidebar" isDropDisabled={true}>
        {(provided) => (
          <div 
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="grid grid-cols-3 gap-4"
          >
            {workoutBlocks.map((block, index) => (
              <Draggable
                key={block.id}
                draggableId={block.id}
                index={index}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`
                      relative transition-all duration-200
                      ${snapshot.isDragging ? 'z-50 scale-105' : ''}
                      hover:-translate-y-1 cursor-move
                    `}
                  >
                    <div className="relative">
                      <BlockSVG height={block.height} />
                      <div className="absolute inset-0 flex items-center px-3">
                        <span className="text-sm font-medium text-gray-700">
                          {block.type}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      {/* Bottom Timeline Guide */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="flex justify-between text-sm text-gray-500">
          <span>Warm Up</span>
          <span>Main Set</span>
          <span>Cool Down</span>
        </div>
      </div>
    </div>
  );
};

export default SidebarBlocks;