// src/components/Canvas/DraggableBlock.jsx
import React from "react";
import { Draggable } from "react-beautiful-dnd";

const DraggableBlock = ({ id, index, children }) => (
  <Draggable draggableId={id} index={index}>
    {(provided) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className="p-2 bg-purple-300 rounded-md shadow-md cursor-pointer"
      >
        {children}
      </div>
    )}
  </Draggable>
);

export default DraggableBlock;
