// components/ViewSelector.tsx

'use client';

import React, { useState } from 'react';
import { Button } from '../ui/button';
import { List, Columns2, Grid3x3, LayoutGrid } from 'lucide-react'; // Importing Lucide Icons

// Define the possible views
type View = 'list' | 'week';

const ViewSelector = () => {
  const [activeView, setActiveView] = useState<View>('week');

  // Handler to change the active view
  const handleViewChange = (view: View) => {
    setActiveView(view);
    // You can add additional logic here, e.g., updating the calendar view
    console.log(`View changed to: ${view}`);
  };

  return (
    <div className="inline-flex items-center rounded-md border border-input bg-transparent">
      {/* List View Button */}
      <div className="relative flex-grow" style={{ flex: '1 1 0%' }}>
        <Button
          variant={activeView === 'list' ? 'outline' : 'ghost'}
          className=" inline-flex items-center justify-center w-full h-8 px-3 text-sm transition-colors  "
          onClick={() => handleViewChange('list')}
        >
          <List className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
          {activeView === 'list' && (
            <span className="text-xs font-medium whitespace-nowrap">Day</span>
          )}
        </Button>
      </div>

      {/* Week View Button */}
      <div className="relative flex-grow" style={{ flex: '2 1 0%' }}>
        <Button
          variant={activeView === 'week' ? 'outline' : 'ghost'}
          className="inline-flex items-center justify-center w-full h-8 px-3 text-sm transition-colors  "
          onClick={() => handleViewChange('week')}
        >
          <Columns2 className="h-4 w-4 flex-shrink-0 text-primary mr-1" />
          {activeView === 'week' && (
            <span className="text-xs font-medium whitespace-nowrap">Week</span>
          )}
        </Button>
      </div>
    </div>
  );
};

export default ViewSelector;
