import JobCard from "@/components/JobCard";
import { JobsData, Job } from "@/types/job";
import React from "react";
import jobsData from "../data/jobs.json";
import Link from "next/link";

interface HomePageProps {
  jobs: Job[];
}

const HomePage: React.FC = () => {
  const { job_postings } = jobsData as JobsData;

  return (
    <div className="font-poppins p-8">
      <h1 className="font-extrabold text-2xl mb-2">Opportunities</h1>
      <p className="text-gray-400 text-sm pl-6 mb-4">{`Showing results of ${job_postings.length}`}</p>

      {/* Wrapper for sorting and job cards */}
      <div className="relative mt-10">
        {/* Sorting Indicator */}
        <div className="absolute top-0 right-0 mt-4 mr-4 flex items-center">
          <span className="text-gray-700 font-bold mr-2">Sort by: <span className="font-normal">Most relevance</span></span>
          <svg className="w-4 h-4 text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M6.293 7.293a1 1 0 011.414 0L10 8.586l2.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>

        {/* Job Cards */}
        <div className="pt-10 mx-48"> {/* Added padding-top here */}
          {job_postings.map((job, id) => (
            <Link href={`/jobs/${id}`} key={id}>
              <JobCard job={job} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
