import React from "react";
import LeftComponent from "../../../components/LeftComponent";
import RightComponent from "../../../components/RightComponent";
import { Job } from "@/types/job";
import jobData from "../../../data/jobs.json";

interface DetailedPageProps {
  params: { id: string };
}

const DetailsPage = ({ params: { id } }: DetailedPageProps) => {
  const job = jobData.job_postings[+id];

  return (
    <div className=" flex bg-gray-50 font-poppins text-sm">
      <LeftComponent
        description={job.description}
        responsibilities={job.responsibilities}
        idealCandidate={job.ideal_candidate}
        whenWhere={job.when_where}
      />
      <RightComponent about={job.about} />
    </div>
  );
};

export default DetailsPage;
