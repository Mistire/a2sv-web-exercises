describe('BookmarkedJob Component', () => {
  beforeEach(() => {
    // Intercept the API request to get bookmarked jobs
    cy.intercept('GET', 'https://akil-backend.onrender.com/bookmarks', {
      statusCode: 200,
      body: {
        success: true, // Ensure success is set to true
        data: [
          {
            eventID: '1',
            title: 'Software Engineer',
            orgName: 'Tech Corp',
            opType: 'Full-time',
            // logoUrl: 'https://example.com/logo.png',
            location: 'Addis Ababa, Ethiopia',
            description: 'Join our team as a Software Engineer.',
          },
        ],
      },
    }).as('fetchBookmarkedJobs');

    cy.intercept('GET', '/api/auth/session', {
      statusCode: 200,
      body: {
        user: {
          name: 'John Doe',
          email: 'john.doe@example.com',
          accessToken: 'mockedAccessToken',
        },
        expires: '9999-12-31T23:59:59Z',
      },
    });

    // Log in before visiting the page
    cy.visit('/bookmarked');// Implement this helper function to log in the user
  });

  it('should display loading state initially', () => {
    // cy.visit('/bookmarked'); // Replace with your actual bookmarked jobs URL

    // Assert that the loading spinner is visible
    cy.get('.loading').should('be.visible');
  });

  it('should display bookmarked jobs', () => {
    cy.visit('/bookmarked');

    // Wait for the fetchBookmarkedJobs API call to finish
    cy.wait('@fetchBookmarkedJobs', { timeout: 15000 }); // Increase timeout to ensure response is captured

    // Assert that the bookmarked job is displayed
    cy.get('.job-card').should('have.length', 1); // Ensure that one job card is rendered

    cy.get('.job-card').first().within(() => {
      cy.get('h2').contains('Software Engineer').should('be.visible');
      cy.get('[data-testid="job-org"]').contains('Tech Corp').should('be.visible');
      cy.get('[data-testid="job-location"]').contains('Addis Ababa, Ethiopia').should('be.visible');
      cy.get('[data-testid="job-opType"]').contains('Full-time').should('be.visible');
    });
  });
});
