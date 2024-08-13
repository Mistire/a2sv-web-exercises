import React, { useState, useEffect } from "react";
import { Job } from "../types/job";
import Image from "next/image";
import Link from "next/link";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import { useSession } from "next-auth/react";

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const { id, title, description = '', orgName, opType, logoUrl, location } = job;
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
          } else {
            console.error("Error fetching bookmarks:", data);
          }
        } catch (error) {
          console.error("Error fetching bookmarks:", error);
        }
      }
    };

    fetchBookmarks();
  }, [id, session?.user.accessToken]);

  if (!title) {
    return <div className="job-not-found">Job not found</div>;
  }

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
    <div className="relative mx-auto my-6 px-4 max-w-full sm:max-w-3xl md:max-w-4xl">
      <Link href={`/jobs/${id}`} data-testid="job-link">
        <div className="job-card flex flex-col md:flex-row items-start md:items-center py-6 px-4 border rounded-2xl shadow-sm space-y-4 md:space-y-0 md:space-x-6">
          <div className="logo mb-4 md:mb-0 w-full max-w-[120px] hidden md:block">
            <Image
              src={logoUrl}
              alt={`${orgName} logo`}
              width={100}
              height={100}
              className="object-cover rounded-full"
              data-testid="job-logo"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-lg sm:text-xl font-bold mb-2" data-testid="job-title">{title}</h2>
            <div className="flex flex-col md:flex-row items-start md:items-center space-x-0 md:space-x-6">
              <span className="text-gray-400 text-sm" data-testid="job-org">{orgName}</span>
              <span className="text-gray-400 text-sm">.</span>
              <span className="text-gray-400 text-sm" data-testid="job-location">{location[0]}</span>
            </div>
            <p className="text-gray-700 text-sm sm:text-base mt-2" data-testid="job-description">{halfDescription}</p>
            <div className="tags mt-2">
              <span className="tag rounded-full px-3 py-1 text-xs sm:text-sm mr-2 mb-2 text-green-500 bg-green-100 border" data-testid="job-opType">
                {opType}
              </span>
            </div>
          </div>
        </div>
      </Link>
      <div
        role="button"
        aria-label={bookmarked ? "Remove Bookmark" : "Add Bookmark"}
        className="absolute top-4 right-7 md:top-4 md:right-6 lg:top-5 lg:right-8 cursor-pointer"
        onClick={toggleBookmark}
        data-testid={bookmarked ? "bookmarked-icon" : "bookmark-icon"}
      >
        {bookmarked ? <IoBookmark size={30} className="fill-indigo-500" /> : <IoBookmarkOutline size={30} />}
      </div>
    </div>
  );
};

export default JobCard;
