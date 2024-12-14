import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import WorkoutBlock from './WorkoutBlocks';

// Block SVG component for reusable SVGs
const BlockSVG = ({ width, height }) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width={width} height={height} fill="#E9E8FC" />
  </svg>
);

const WorkoutBuilder = () => {
  const [blocks, setBlocks] = useState([
    { id: 'block-1', content: 'Block 1', svgWidth: 567, svgHeight: 55 },
    { id: 'block-2', content: 'Block 2', svgWidth: 171, svgHeight: 30 },
    // Add more blocks as needed
  ]);

  const [canvasBlocks, setCanvasBlocks] = useState([]);

  useEffect(() => {
    const savedCanvasBlocks = JSON.parse(localStorage.getItem('canvasBlocks'));
    if (savedCanvasBlocks) setCanvasBlocks(savedCanvasBlocks);
  }, []);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    if (source.droppableId === 'blocks' && destination.droppableId === 'canvas') {
      const movedBlock = blocks[source.index];
      const updatedCanvasBlocks = [
        ...canvasBlocks,
        { ...movedBlock, id: `${movedBlock.id}-${Date.now()}` },
      ];
      setCanvasBlocks(updatedCanvasBlocks);
    } else if (source.droppableId === 'canvas' && destination.droppableId === 'canvas') {
      const updatedCanvasBlocks = Array.from(canvasBlocks);
      const [movedBlock] = updatedCanvasBlocks.splice(source.index, 1);
      updatedCanvasBlocks.splice(destination.index, 0, movedBlock);
      setCanvasBlocks(updatedCanvasBlocks);
    }
    localStorage.setItem('canvasBlocks', JSON.stringify(canvasBlocks));
  };

  const clearLayout = () => {
    setCanvasBlocks([]);
    localStorage.removeItem('canvasBlocks');
  };

  const saveWork = () => {
    localStorage.setItem('canvasBlocks', JSON.stringify(canvasBlocks));
    alert('Workout saved successfully!');
  };

  return (
    <div className="workout-builder">
      <div className="header flex justify-between items-center p-4 bg-gray-100">
        <h2>Workout Builder</h2>
        <button onClick={saveWork} className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Save Work
        </button>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="blocks-section">
          <h3>Available Blocks</h3>
          <Droppable droppableId="blocks">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps} className="blocks-container">
                {blocks.map((block, index) => (
                  <Draggable key={block.id} draggableId={block.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="block"
                      >
                        <WorkoutBlock
                          dropBlockSvg={<BlockSVG width={block.svgWidth} height={block.svgHeight} />}
                          content={block.content}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>

        <div className="canvas-section">
          <h3>Canvas</h3>
          <Droppable droppableId="canvas">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps} className="canvas-container">
                {canvasBlocks.map((block, index) => (
                  <Draggable key={block.id} draggableId={block.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="canvas-block"
                      >
                        <WorkoutBlock
                          dropBlockSvg={<BlockSVG width={block.svgWidth} height={block.svgHeight} />}
                          content={block.content}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>

      <button onClick={clearLayout} className="clear-layout-btn">
        Clear Layout
      </button>
    </div>
  );
};

export default WorkoutBuilder;
