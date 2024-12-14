import React, { useState } from 'react';

const Timeline = () => {
  const [workoutSections, setWorkoutSections] = useState([
    { id: 1, title: 'Warm Up', exercises: [] },
    { id: 2, title: 'Main Set', exercises: [] },
    { id: 3, title: 'Cool Down', exercises: [] }
  ]);

  const [draggedBlock, setDraggedBlock] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, sectionId) => {
    e.preventDefault();
    if (draggedBlock) {
      setWorkoutSections(sections => 
        sections.map(section => {
          if (section.id === sectionId) {
            return {
              ...section,
              exercises: [...section.exercises, {
                id: Date.now(),
                type: draggedBlock.type,
                duration: draggedBlock.duration
              }]
            };
          }
          return section;
        })
      );
    }
  };

  return (
    <div className="bg-white rounded-xl p-6">
      <div className="relative">
        {/* Percentage Scale */}
        <div className="absolute left-0 top-8 grid grid-cols-1 gap-[10px] text-xs text-gray-500">
          <span>100%</span>
          <span>75%</span>
          <span>50%</span>
          <span>25%</span>
          <span>0%</span>
        </div>

        <div className="ml-12">
          {/* Section Labels */}
          <div className="flex mb-2">
            {workoutSections.map(section => (
              <div 
                key={section.id}
                className="w-1/3 text-sm text-gray-700"
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, section.id)}
              >
                {section.title}
              </div>
            ))}
          </div>

          {/* Timeline Block */}
          <div className="h-20 bg-[#F7F7FF] rounded-lg flex">
            {workoutSections.map(section => (
              <div 
                key={section.id}
                className="w-1/3 bg-[#4339F2] bg-opacity-10"
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, section.id)}
              >
                {section.exercises.map(exercise => (
                  <div key={exercise.id} className="p-2">
                    {/* Exercise visualization here */}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Time Markers */}
          <div className="flex justify-between text-xs text-gray-400 mt-2">
            {Array.from({ length: 16 }, (_, i) => {
              const minutes = Math.floor(i / 4);
              const quarterMinutes = (i % 4) * 25;
              return `${minutes}:${quarterMinutes.toString().padStart(2, '0')}`;
            }).map((time) => (
              <span key={time}>{time}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;