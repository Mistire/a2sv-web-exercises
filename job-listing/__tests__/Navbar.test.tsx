import { render, screen, fireEvent } from '@testing-library/react';
import { SessionProvider } from 'next-auth/react';
import Navbar from '../components/Navbar'; // Adjust the import based on your actual file path

describe('Navbar', () => {
  it('renders the Navbar correctly for authenticated users', () => {
    render(
      <SessionProvider session={{ user: { id: '1', name: 'Test User', email: 'test@example.com' }, expires: '1d' }}>
        <Navbar />
      </SessionProvider>
    );

    // Check if the "Opportunities" and "Bookmarked Jobs" links are present
    expect(screen.getByText('Opportunities')).toBeInTheDocument();
    expect(screen.getByText('Bookmarked Jobs')).toBeInTheDocument();
  });

  it('triggers sign out when clicking the logout button', () => {
    const signOutMock = jest.fn();

    render(
      <SessionProvider session={{ user: { id: '1', name: 'Test User', email: 'test@example.com' }, expires: '1d' }}>
        <Navbar />
      </SessionProvider>
    );

    // Mock the signOut function
    jest.mock('next-auth/react', () => ({
      ...jest.requireActual('next-auth/react'),
      signOut: signOutMock,
    }));

    // Find all "Logout" buttons on the page
    const logoutButtons = screen.getAllByText('Logout');

    // Click the first "Logout" button (e.g., the desktop version)
    fireEvent.click(logoutButtons[0]);

    // Check if signOut was called
    expect(signOutMock).toHaveBeenCalled();
  });
});
