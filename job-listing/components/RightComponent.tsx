import React from 'react';
import { CalendarDaysIcon, CalendarIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { FireIcon } from '@heroicons/react/24/solid';

interface RightComponentProps {
  datePosted: string;
  deadline: string;
  location: string[];
  startDate: string;
  endDate: string;
  categories: string[];
  requiredSkills: string[];
}

const categoryColors: { [key: string]: string } = {
  'Marketing': 'bg-orange-100 text-orange-500',
  'Design': 'bg-teal-100 text-teal-500',
  'IT': 'bg-purple-100 text-purple-500',
  'Development': 'bg-blue-100 text-blue-500',
  'Art': 'bg-red-100 text-red-800',
  'Data Science': 'bg-yellow-100 text-yellow-500',
  'Analytics': 'bg-green-100 text-green-500',
  'Customer Service': 'bg-gray-100 text-gray-500',
  'Support': 'bg-pink-100 text-pink-500',
  // Add more categories and colors if needed
};

const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const RightComponent: React.FC<RightComponentProps> = ({
  datePosted,
  deadline,
  location,
  startDate,
  endDate,
  categories,
  requiredSkills,
}) => {
  return (
    <div className='flex flex-col justify-center px-24 bg-gray-50 -mt-30 ml-24'>
      <h1 className="text-2xl font-extrabold mb-4">About</h1>
      <div className="flex items-center mb-2">
        <CalendarDaysIcon className="rounded-full border-gray-100 h-12 w-12 text-sky-400 border-4 p-1 mr-2" />
        <div>
          <p className="text-gray-700 font-bold">Posted On:</p>
          <p className="text-gray-700">{formatDate(datePosted)}</p>
        </div>
      </div>
      <div className="flex items-center mb-2">
        <FireIcon className="rounded-full border-gray-100 h-12 w-12 text-sky-400 border-4 p-1 mr-2" />
        <div>
          <p className="text-gray-700 font-bold">Deadline:</p>
          <p className="text-gray-700">{formatDate(deadline)}</p>
        </div>
      </div>
      <div className="flex items-center mb-2">
        <MapPinIcon className="rounded-full border-gray-100 h-12 w-12 text-sky-400 border-4 p-1 mr-2" />
        <div>
          <p className="text-gray-700 font-bold">Location:</p>
          <p className="text-gray-700">{location.join(', ')}</p>
        </div>
      </div>
      <div className="flex items-center mb-2">
        <CalendarIcon className="rounded-full border-gray-100 h-12 w-12 text-sky-400 border-4 p-1 mr-2" />
        <div>
          <p className="text-gray-700 font-bold">Start Date:</p>
          <p className="text-gray-700">{formatDate(startDate)}</p>
        </div>
      </div>
      <div className="flex items-center mb-6">
        <ClockIcon className="rounded-full border-gray-100 h-12 w-12 text-sky-400 border-4 p-1 mr-2" />
        <div>
          <p className="text-gray-700 font-bold">End Date:</p>
          <p className="text-gray-700">{formatDate(endDate)}</p>
        </div>
      </div>
      
      <h1 className='text-xl font-extrabold mb-4'>Categories</h1>
      <div className="flex flex-wrap gap-2 mb-6 ">
        {categories.map((category, index) => (
          <span 
            key={index} 
            className='text-sm font-medium py-1 px-3 rounded-full bg-green-100 text-green-600'
          >
            {category}
          </span>
        ))}
      </div>
      
      <h1 className='text-xl font-extrabold mb-4'>Required Skills</h1>
      <div className="flex flex-wrap gap-2">
        {requiredSkills.map((skill, index) => (
          <span 
            key={index} 
            className="bg-gray-200 text-gray-600 text-sm font-medium py-1 px-3 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default RightComponent;
