'use client'
import { X } from 'lucide-react'; // This is the close (X) icon
import { Button } from './button';
import { useState } from 'react';

interface BannerProps {
  title?: string;
  description?: string;
}

const Banner: React.FC<BannerProps> = ({ title, description }) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null; // Don't render the banner if it's not visible

  return (
    <div className="flex items-start justify-between bg-teal-50 border border-teal-300 rounded-lg p-4">
      {/* Icon Section */}
      <div className="flex items-start">
        <div className="mr-3">
          <div className="flex items-center justify-center w-10 h-10 bg-teal-100 rounded-full">
            {/* Place your icon here */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-teal-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75v-1.5a3 3 0 00-3-3h-4.5a3 3 0 00-3 3v1.5M21 10.5v7.125a2.625 2.625 0 01-2.625 2.625H5.625A2.625 2.625 0 013 17.625V10.5a2.625 2.625 0 012.625-2.625h12.75A2.625 2.625 0 0121 10.5z"
              />
            </svg>
          </div>
        </div>
        {/* Text Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {title || "Welcome to your student list!"}
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            {description || "This is where you will add and manage all students in your school. Explore the platform's functionality with demo students."}
          </p>
          <a href="#" className="text-sm text-indigo-600 hover:underline mt-2">
            Learn more
          </a>
        </div>
      </div>

      {/* Close Button */}
      <div>
        <Button variant="ghost" className="text-gray-500 hover:text-gray-700" onClick={handleClose}>
          <X className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default Banner;
