import React from "react";

const PreviewSection = ({ canvasBlocks }) => {
  return (
    <div className="p-4 border rounded-md">
      <h3 className="text-lg font-bold">Workout Preview</h3>
      <ul>
        {canvasBlocks.map((block, index) => (
          <li key={block.id} className="mb-2">
            {block.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PreviewSection;
