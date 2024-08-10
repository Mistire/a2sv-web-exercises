"use client";

import React, { useEffect, useState } from "react";
import LeftComponent from "../../../components/LeftComponent";
import RightComponent from "../../../components/RightComponent";
import { Job } from "@/types/job";

interface DetailedPageProps {
  params: { id: string };
}

const DetailsPage = ({ params: { id } }: DetailedPageProps) => {
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobDetail = async () => {
      try {
        const res = await fetch(`https://akil-backend.onrender.com/opportunities/${id}`);
        if (!res.ok) {
          const errorText = await res.text();
          console.error('Error response:', errorText);
          setError('An error occurred while fetching the job details.');
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        console.log("Fetched data: ", data.data);
        if (data && data.data) {
          data.data.responsibilities = data.data.responsibilities.split('\n');
          setJob(data.data);
        } else {
          setError('Invalid data structure');
          throw new Error("Invalid data structure");
        }
      } catch (error) {
        console.error("Failed to fetch job: ", error);
        setError('Failed to fetch job details');
      } finally {
        setLoading(false);
      }
    };
    fetchJobDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <span className="loading loading-bars loading-lg custom-loading"></span>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  if (!job) {
    return <p>No job data available</p>;
  }

  return (
    <div className="flex bg-gray-50 font-poppins text-sm">
      <LeftComponent
        description={job.description}
        responsibilities={job.responsibilities}
        idealCandidate={job.idealCandidate}
        whenWhere={job.whenAndWhere}
      />
      <RightComponent
        startDate={job.startDate}
        endDate={job.endDate}
        deadline={job.deadline}
        location={job.location}
        datePosted={job.postedOn}
        requiredSkills={job.requiredSkills}
        categories={job.categories}
      />
    </div>
  );
};

export default DetailsPage;
