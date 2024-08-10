'use client'

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { Job } from "@/types/job"
import JobCard from "@/components/JobCard"

const BookmarkedJob: React.FC = () => {

  const [bookmarkedJobs, setBookmarkedJobs] = useState<Job[]>([])
  const { data: session } = useSession();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookmarkedJobs = async () => {
      if (!session?.user.accessToken) return;
      try {
        const res = await fetch("https://akil-backend.onrender.com/bookmarks", {
          headers: {
            Authorization: `Bearer ${session.user.accessToken}`,
          },
        })
        const data = await res.json();
        if (data.success) {
          const jobs = data.data.map((bookmark: any) => ({
            id: bookmark.eventID,
            title: bookmark.title,
            orgName: bookmark.orgName,
            opType: bookmark.opType,
            logoUrl: bookmark.logoUrl,
            location: [bookmark.location],
            description: bookmark.description || "", // Use the stored description or an empty string
          }))
          setBookmarkedJobs(jobs);
        }
      } catch (error) {
        console.error("Error fetching bookmarked jobs: ", error)
      } finally {
        setLoading(false);
      }
    }
    fetchBookmarkedJobs();
  }, [session?.user.accessToken])

  if (loading) {
    return <div>Loading...</div>;
  }

  if (bookmarkedJobs.length === 0) {
    return <div>No bookmarked jobs found.</div>;
  }

  return (
    <div className="p-20">
      <h1 className="text-2xl font-bold mb-4">Bookmarked Jobs</h1>
      <div className="pt-10">
        {bookmarkedJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  )
}

export default BookmarkedJob
