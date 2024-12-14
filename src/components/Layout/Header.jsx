import React from 'react';
import { Button } from '../common/Button';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="flex justify-between items-center px-6 py-4">
        <Button variant="text" className="flex items-center gap-2">
          <span>←</span>
          Run Workout
        </Button>
        <Button variant="primary">Save Workout</Button>
      </div>
    </header>
  );
};

export default Header;