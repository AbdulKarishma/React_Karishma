// src/components/WorkoutBuilder/WorkoutBlocks.jsx
import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";



const ItemTypes = {
  BLOCK: "block",
};

const WorkoutBlocks = () => {
  const [timelineBlocks, setTimelineBlocks] = useState([]);

  // Function to handle drop event
  const handleDrop = (blockType) => {
    setTimelineBlocks((prevBlocks) => [...prevBlocks, blockType]);
  };

  const DraggableBlock = ({ type, tooltipText, children }) => {
    const [, drag] = useDrag(() => ({
      type: ItemTypes.BLOCK,
      item: { type },
    }));

    return (
      <div
        ref={drag}
        className="h-12 bg-[#F2F2F2] rounded-lg relative"
        data-tooltip={tooltipText} // Tooltip text
        style={{ position: "relative" }}
        onMouseOver={(e) => {
          const tooltip = document.createElement("div");
          tooltip.innerText = tooltipText;
          tooltip.style.position = "absolute";
          tooltip.style.top = "-25px";
          tooltip.style.left = "50%";
          tooltip.style.transform = "translateX(-50%)";
          tooltip.style.padding = "5px 10px";
          tooltip.style.background = "#333";
          tooltip.style.color = "white";
          tooltip.style.borderRadius = "4px";
          tooltip.style.fontSize = "12px";
          tooltip.style.zIndex = "1000";
          tooltip.className = "block-tooltip";
          e.currentTarget.appendChild(tooltip);
        }}
        onMouseOut={(e) => {
          const tooltip = e.currentTarget.querySelector(".block-tooltip");
          if (tooltip) e.currentTarget.removeChild(tooltip);
        }}
      >
        {children}
      </div>
    );
  };

  const DropZone = ({ onDrop, children }) => {
    const [, drop] = useDrop(() => ({
      accept: ItemTypes.BLOCK,
      drop: (item) => onDrop(item.type),
    }));
    return (
      <div
        ref={drop}
        className="h-16 bg-[#F7F7FF] rounded-lg flex mb-2 items-center justify-center"
      >
        {children}
      </div>
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex gap-8">
        {/* Left Section - Blocks */}
        <div className="w-[280px] bg-white rounded-xl shadow-sm">
          <div className="p-4 border-b">
            <div className="flex items-center gap-2">
              <p className="text-sm text-gray-700">
                Click or drag the blocks to build workout
              </p>
              <div className="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="text-xs text-gray-500">?</span>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="grid grid-cols-3 gap-2">
              {/* Replace Blocks with Draggable Blocks and Tooltips */}
              <DraggableBlock type="block1" tooltipText="Warm Up">
                <div className="absolute bottom-0 left-0 w-full h-[18px] bg-[#4339F2] bg-opacity-50 rounded-b-lg"></div>
              </DraggableBlock>

              <DraggableBlock type="block2" tooltipText="Active">
                <div className="absolute bottom-0 left-0 w-full h-[37px] bg-[#4339F2] bg-opacity-50 rounded-b-lg"></div>
              </DraggableBlock>

              <DraggableBlock type="block3" tooltipText="Cool Down">
                <div className="absolute bottom-0 left-0 w-full h-[24px] bg-[#4339F2] bg-opacity-50 rounded-b-lg"></div>
              </DraggableBlock>

              <DraggableBlock type="block4" tooltipText="Two Steps Repeat">
                <div className="absolute bottom-0 left-0 w-[45%] h-[26px] bg-[#4339F2] bg-opacity-50"></div>
                <div className="absolute bottom-0 right-0 w-[45%] h-[18px] bg-[#4339F2] bg-opacity-50"></div>
              </DraggableBlock>

              <DraggableBlock type="block5" tooltipText="Ramp Up">
                <div className="absolute bottom-0 left-0 w-[20%] h-[24px] bg-[#4339F2] bg-opacity-50"></div>
                <div className="absolute bottom-0 left-[26%] w-[20%] h-[29px] bg-[#4339F2] bg-opacity-50"></div>
                <div className="absolute bottom-0 left-[52%] w-[20%] h-[34px] bg-[#4339F2] bg-opacity-50"></div>
                <div className="absolute bottom-0 left-[78%] w-[20%] h-[39px] bg-[#4339F2] bg-opacity-50"></div>
              </DraggableBlock>

              <DraggableBlock type="block6" tooltipText="Ramp Down">
                <div className="flex justify-between h-full items-end">
                  <div className="w-[23%] h-[39px] bg-[#4339F2] bg-opacity-50"></div>
                  <div className="w-[23%] h-[34px] bg-[#4339F2] bg-opacity-50"></div>
                  <div className="w-[23%] h-[29px] bg-[#4339F2] bg-opacity-50"></div>
                  <div className="w-[23%] h-[24px] bg-[#4339F2] bg-opacity-50"></div>
                </div>
              </DraggableBlock>
            </div>
          </div>
        </div>

        {/* Right Section - Timeline */}
        <div className="flex-1">
          <div className="bg-white rounded-xl p-6">
            {/* DropZone for Timeline */}
            <DropZone onDrop={handleDrop}>
              {timelineBlocks.map((block, index) => (
                <div
                  key={index}
                  className="h-12 bg-[#4339F2] bg-opacity-50 rounded-lg w-12 mx-2 flex items-center justify-center text-white text-sm"
                >
                  {block}
                </div>
              ))}
            </DropZone>
          </div>

        </div>
      </div>
    </DndProvider>
  );
};

export default WorkoutBlocks;
