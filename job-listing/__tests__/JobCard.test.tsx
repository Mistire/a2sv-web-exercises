import { render, screen, fireEvent } from "@testing-library/react";
import JobCard from "../components/JobCard"; // Adjust the path based on your project structure
import { Job } from "../types/job"; // Import the Job type
import { SessionProvider } from "next-auth/react";

// Mock job data
const mockJob: Job = {
  id: "1",
  title: "Software Engineer",
  description: "This is a job description for Software Engineer.",
  orgName: "Tech Corp",
  logoUrl: "/logo.png",
  location: ["Remote"],
  opType: "Full-Time",
  responsibilities: ["Write clean code", "Collaborate with the team", "Attend meetings"],
  requirements: ["Experience with React", "Knowledge of TypeScript", "Familiarity with CI/CD pipelines"],
  idealCandidate: "Ideal candidate for the job.",
  categories: ["IT", "Engineering"],
  startDate: new Date().toISOString(),
  endDate: new Date().toISOString(),
  deadline: new Date().toISOString(),
  requiredSkills: ["JavaScript", "React", "TypeScript"],
  whenAndWhere: "Remote, starting ASAP",
  orgID: "12345",
  postedOn: new Date().toISOString(),
  status: "Open",
  applicantsCount: 100,
  viewsCount: 500,
  isBookmarked: false,
  isRolling: true,
  questions: null,
  perksAndBenefits: null,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  orgPrimaryPhone: "123-456-7890",
  orgEmail: "contact@techcorp.com",
  averageRating: 4.5,
  totalReviews: 200,
};

describe("JobCard", () => {
  it("renders job card correctly", () => {
    render(
      <SessionProvider session={null}>
        <JobCard job={mockJob} />
      </SessionProvider>
    );

    // Add your assertions here
  });

  test("handles bookmark toggle", async () => {
    // Render the JobCard component
    const { getByLabelText } = render(<JobCard {...mockJobData} />);
  
    // Find the bookmark button
    const bookmarkButton = getByLabelText("Add Bookmark");
  
    // Click the bookmark button
    fireEvent.click(bookmarkButton);
  
    // Check if the bookmark button has the expected class
    const svgElement = bookmarkButton.querySelector("svg");
    expect(svgElement).toHaveClass("fill-indigo-500");
  });
});
