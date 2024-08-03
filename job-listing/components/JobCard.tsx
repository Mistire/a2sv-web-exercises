import React from "react";
import { Job } from "@/types/job";
import Image from "next/image";
import Link from "next/link";

interface JobCardProps {
  job: Job;
}

type CatergoryColors = {
  [key: string]: string;

}
const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const { id, title, description, company, image, about } = job;

  const halfDescription =
    description.length > 250 ? description.slice(0, 250) + "..." : description;

  const placeholderImage = 'https://via.placeholder.com/50'
  
  const categoryColors: CatergoryColors = {
    'In person': 'text-green-500 bg-green-100',
    Education: 'text-orange-400 border border-orange-400',
    IT: 'text-purple-500 border border-purple-500 px-6'

  }
  return (
      <div className="job-card flex m-5 space-x-6 p-6 border rounded-2xl shadow-sm">
        <div className="logo mb-4">
          <Image
            src={image}
            alt={`${company} logo`}
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>

        <div>
          <h2 className="text-xl font-bold  mb-2">{title}</h2>
          <div className="flex space-x-6 px-6 items-center">
            <span className="text-gray-400 text-sm">{company}</span>
            <span className="text-gray-400 text-sm text-center items-center">.</span>
            <span className="text-gray-400 text-sm">{about.location}</span>
          </div>
          <p className="text-gray-700 mb-2">{halfDescription}</p>
          <div className="tags mt-2">
            {['In person', 'Education', 'IT'].map((workType, index) => (
              <React.Fragment key={index}>
              <span 
                className={`tag rounded-full px-3 py-1 text-sm mr-2 mb-2 ${categoryColors[workType] || 'text-gray-500 bg-gray-100 border-gray-300'} border`}
              >
                {workType}
              </span>
              {/* Add separator between tags, except after the last tag */}
              {index === 0 && <span className="text-gray-200 mr-3  text-2xl">|</span>}
            </React.Fragment>
            ))}
          </div>

        </div>
      </div>
    
  );
};

export default JobCard;
