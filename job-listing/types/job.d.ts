export interface Job {
  id: string;
  title: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  idealCandidate: string;
  categories: string[];
  opType: string;
  startDate: string;
  endDate: string;
  deadline: string;
  location: string[];
  requiredSkills: string[];
  whenAndWhere: string;
  orgID: string;
  postedOn: string;
  status: string;
  applicantsCount: number;
  viewsCount: number;
  orgName: string;
  logoUrl: string;
  isBookmarked: boolean;
  isRolling: boolean;
  questions: string | null;
  perksAndBenefits: string | null;
  createdAt: string;
  updatedAt: string;
  orgPrimaryPhone: string;
  orgEmail: string;
  averageRating: number;
  totalReviews: number;
}

export interface JobsData {
  success: boolean;
  message: string;
  data: Job[];
  errors: any | null;
  count: number;
}

export interface PartialJob {
  id: string;
  title: string;
  description?: string;
  orgName: string;
  opType: string;
  logoUrl?: string;
  location: string[];
}

