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
  const { id, title, description, orgName, opType, logoUrl, location } = job;

  const halfDescription =
    description.length > 250 ? description.slice(0, 250) + "..." : description;

  
  
  // const categoryColors: CatergoryColors = {
  //   'In person': 'text-green-500 bg-green-100',
  //   Education: 'text-orange-400 border border-orange-400',
  //   IT: 'text-purple-500 border border-purple-500 px-6'

  // }
  return (
      <div className="job-card flex m-5 space-x-6 p-6 border rounded-2xl shadow-sm">
        <div className="logo mb-4">
          <Image
            src={logoUrl}
            alt={`${orgName} logo`}
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>

        <div>
          <h2 className="text-xl font-bold  mb-2">{title}</h2>
          <div className="flex space-x-6 px-6 items-center">
            <span className="text-gray-400 text-sm">{orgName}</span>
            <span className="text-gray-400 text-sm text-center items-center">.</span>
            <span className="text-gray-400 text-sm">{location[0]}</span>
          </div>
          <p className="text-gray-700 mb-2">{halfDescription}</p>
          <div className="tags mt-2">
              <span 
                className={`tag rounded-full px-3 py-1 text-sm mr-2 mb-2 text-green-500 bg-green-100 border`}
              >
                {opType}
              </span>
              {/* Add separator between tags, except after the last tag */}
          </div>

        </div>
      </div>
    
  );
};

export default JobCard;
