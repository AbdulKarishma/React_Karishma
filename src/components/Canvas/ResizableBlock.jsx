// ResizableBlock.jsx
import React from 'react';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

const ResizableBlock = ({ children, ...props }) => {
  return (
    <ResizableBox
      width={200} // Initial width
      height={100} // Initial height
      axis="both" // Allow resizing in both directions
      minConstraints={[100, 50]} // Min width and height
      maxConstraints={[400, 200]} // Max width and height
      resizeHandles={['se']} // Resize handle position (south-east)
      {...props} // Spread other props for drag-and-drop
    >
      <div className="resizable-block bg-purple-300 rounded-md shadow-md p-4">
        {children}
      </div>
    </ResizableBox>
  );
};

export default ResizableBlock;
