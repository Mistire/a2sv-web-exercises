import { render, screen, fireEvent } from '@testing-library/react';
import { SessionProvider } from 'next-auth/react';
import JobCard from '../components/JobCard';
import { Job } from '../types/job';

const renderWithSession = (ui: React.ReactElement, session: any = null) => {
  return render(
    <SessionProvider session={session}>
      {ui}
    </SessionProvider>
  );
};

describe('JobCard Component - Bookmark Functionality', () => {
  it('renders the bookmark button correctly when not bookmarked', async () => {
    const job: Job = {
      id: '1',
      title: 'Software Engineer',
      description: 'Develop and maintain software applications.',
      orgName: 'Tech Corp',
      opType: 'Full-Time',
      logoUrl: '/logo.png',
      location: ['New York'],
    };

    const mockSession = {
      user: {
        name: 'John Doe',
        email: 'johndoe@example.com',
        accessToken: 'fake-token',
      },
      expires: 'fake-expiration',
    };

    renderWithSession(<JobCard job={job} />, mockSession);

    // Perform your assertions here
  });

  it('toggles the bookmark status on click', async () => {
    // Similar setup and testing code as the previous test
  });
});
