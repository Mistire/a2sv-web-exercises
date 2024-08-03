import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { MapPinIcon } from '@heroicons/react/24/outline';

interface LeftComponentProps {
  description: string;
  responsibilities: string[];
  idealCandidate: IdealCandidate;
  whenWhere: string;
}

interface IdealCandidate {
  age: string;
  gender: string;
  traits: string[];
}

const LeftComponent: React.FC<LeftComponentProps> = ({ description, responsibilities, idealCandidate, whenWhere }) => {
  const displayAge = idealCandidate.age.toLowerCase() === 'any' ? 'Not specified' : idealCandidate.age;
  const displayGender = idealCandidate.gender.toLowerCase() === 'any' ? 'Not specified' : idealCandidate.gender;

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
              <CheckCircleIcon className='h-6 w-6 text-green-500 mr-2' />
              {responsibility}
            </li>
          ))}
        </ul>
      </div>

      <div className='pg'>
        <h1 className='text-xl font-black mb-4'>Ideal Candidate</h1>
        <p className='mb-2'><strong>Age:</strong> {displayAge}</p>
        <p className='mb-4'><strong>Gender:</strong> {displayGender}</p>
        <h2 className='font-bold mb-2'>Traits:</h2>
        <ul className='list-disc list-inside'>
          {idealCandidate.traits.map((trait, index) => (
            <li className='text-gray-700' key={index}>{trait}</li>
          ))}
        </ul>
      </div>
      
      <div className='pg'>
        <h1 className='text-xl font-black mt-10'>When and Where</h1>
        <div className='flex items-center pb-12'>
          <MapPinIcon className="rounded-full border-gray-100 h-12 w-12 text-sky-400 border-4 p-1 mr-2" />
          <p className='text-gray-700'>{whenWhere}</p>
        </div>
      </div>
    </div>
  );
};

export default LeftComponent;
