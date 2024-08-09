import React, { useState, useEffect } from "react";
import { Job } from "@/types/job";
import Image from "next/image";
import Link from "next/link";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import { useSession } from "next-auth/react";

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const { id, title, description, orgName, opType, logoUrl, location } = job;
  const [bookmarked, setBookmarked] = useState(false);
  const { data: session } = useSession();

  const halfDescription = description.length > 250 ? description.slice(0, 250) + "..." : description;

  useEffect(() => {
    const fetchBookmarks = async () => {
      if (session?.user.accessToken) {
        try {
          const res = await fetch("https://akil-backend.onrender.com/bookmarks", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${session.user.accessToken}`,
            },
          });
          const data = await res.json();

          if (res.ok && data?.success) {
            const isBookmarked = data.data.some(
              (bookmark: { eventID: string }) => bookmark.eventID === id
            );
            setBookmarked(isBookmarked);
          }
        } catch (error) {
          console.error("Error fetching bookmarks:", error);
        }
      }
    };

    fetchBookmarks();
  }, [id, session?.user.accessToken]);

  const toggleBookmark = async () => {
    if (!session?.user.accessToken) return;

    try {
      const url = `https://akil-backend.onrender.com/bookmarks/${id}`;
      const method = bookmarked ? "DELETE" : "POST";
      const res = await fetch(url, {
        method,
        headers: {
          Authorization: `Bearer ${session.user.accessToken}`,
        },
      });

      if (res.ok) {
        setBookmarked(!bookmarked);
      } else {
        const responseText = await res.text();
        console.error("Error toggling bookmark:", res.status, responseText);
      }
    } catch (error) {
      console.error("Error toggling bookmark:", error);
    }
  };

  return (
    <div className="relative mx-20 my-10 ml-24">
      <Link href={`/jobs/${job.id}`}>
        <div className="job-card flex my-5 md:-mx-8 space-x-6 py-6 sm:px-3 border rounded-2xl shadow-sm">
          <div className="logo mb-4">
            <Image
              src={logoUrl}
              alt={`${orgName} logo`}
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">{title}</h2>
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
            </div>
          </div>
        </div>
      </Link>
      <div className="absolute top-2 right-1 md:top-4 md:-right-3" onClick={toggleBookmark}>
        {bookmarked ? <IoBookmark size={26} /> : <IoBookmarkOutline size={26} />}
      </div>
    </div>
  );
};

export default JobCard;
