'use client';

import  { useState } from 'react';
import { Button } from '../ui/button';
import { Calendar } from 'lucide-react'; // Importing Lucide Icons

// Define the possible views
type View = 'Today' | 'This Week' | 'This Month' | 'This Year';

const CurrentDaySelector = () => {
  const [activeView, setActiveView] = useState<View>('Today');

  const handleViewChange = (view: View) => {
    setActiveView(view);
  };

  return (
    <div >
      <Button
        variant={activeView === 'Today' ? 'outline' : 'ghost'}
       
        onClick={() => handleViewChange('Today')}
      >
        <Calendar className="h-4 w-4 flex-shrink-0 text-muted-foreground mr-1" />
        {activeView === 'Today' && (
          <span className="text-xs font-medium whitespace-nowrap">{activeView}</span>
        )}
      </Button>
    </div>
  );
};

export default CurrentDaySelector;
