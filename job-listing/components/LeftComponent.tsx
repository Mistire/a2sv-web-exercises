import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { MapPinIcon } from '@heroicons/react/24/outline';
import { FiCheckCircle } from 'react-icons/fi';

interface LeftComponentProps {
  description: string;
  responsibilities: string[];
  idealCandidate: string;
  whenWhere: string;
}

const LeftComponent: React.FC<LeftComponentProps> = ({ description, responsibilities, idealCandidate, whenWhere }) => {
  // const displayAge = idealCandidate.age.toLowerCase() === 'any' ? 'Not specified' : idealCandidate.age;
  // const displayGender = idealCandidate.gender.toLowerCase() === 'any' ? 'Not specified' : idealCandidate.gender;

  return (
    <div className='text-[16px] w-[95%] pt-24 pl-24 space-y-12'>
      <div className='pg'>
        <h1 className='text-xl font-black mb-4'>Description</h1>
        <p className='text-gray-700 mb-6 pb-6'>{description}</p>
      </div>

      <div className='pg'>
        <h1 className='text-xl font-black mb-4'>Responsibilities</h1>
        <ul className='mb-6'>
          {responsibilities.map((responsibility, index) => (
            <li className='text-gray-700 flex items-center mb-2' key={index}>
              <FiCheckCircle className='h-5 w-5 text-green-500 mr-2' />
              {responsibility}
            </li>
          ))}
        </ul>
      </div>

      <div className='pg'>
        <h1 className='text-xl font-black mb-4'>Ideal Candidate</h1>
        <p>{idealCandidate}</p>
      </div>
      
      <div className='pg'>
        <h1 className='text-xl font-black mt-10'>When and Where</h1>
        <div className='flex items-center pb-12'>
          <MapPinIcon data-testid="map-pin-icon" className="rounded-full border-gray-100 h-12 w-12 text-sky-400 border-4 p-1 mr-2" />
          <p className='text-gray-700'>{whenWhere}</p>
        </div>
      </div>
    </div>
  );
};

export default LeftComponent;
