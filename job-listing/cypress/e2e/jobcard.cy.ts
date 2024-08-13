describe('Bookmark Functionality with Dummy Data', () => {
  beforeEach(() => {
    // Mock the API response for job listing with a single dummy job
    cy.intercept('GET', 'https://akil-backend.onrender.com/opportunities/search',{
      statusCode: 200,
      body: {
        data: [
          {
              id: '1',
              title: 'Software Engineer',
              orgName: 'Tech Company',
              location: ['New York'],
              description: 'A great job opportunity.',
              opType: 'Full-Time',
              categories: ['Engineering', 'Software'],
              isBookmarked: false,
          },
        ],
      },
    }).as('getJob');

    // Mock the API response for fetching bookmarks
    cy.intercept('GET', '/bookmarked', {
      statusCode: 200,
      body: {
        success: true,
        data: [],
      },
    });

    // Visit the login page and log in before each test
    cy.visit('/auth/login');
    cy.get('input[name="email"]').type('mdwithgod@gmail.com');
    cy.get('input[name="password"]').type('1234');
    cy.get('button[type="submit"]').click();

    // Ensure successful login
    cy.url().should('not.include', '/login');
  });

  it('should bookmark a dummy job and verify it appears in the bookmarks list', () => {
    // Navigate to the job listing
    cy.visit('/');
    
    cy.get('[data-testid="bookmark-icon"]').should('exist');

    cy.intercept('POST', 'https://akil-backend.onrender.com/bookmarks/1', {
      statusCode: 200,
    }).as('bookmarkJob');
    // Click on the dummy job card to toggle bookmark
    cy.get('[data-testid="bookmark-icon"]').click();

    // Mock the API response for bookmarking

    cy.wait('@bookmarkJob', {timeout: 10000});

    // Verify that the job is now bookmarked
    cy.get('[data-testid="bookmarked-icon"]').should('exist');
    
    cy.intercept('DELETE', 'https://akil-backend.onrender.com/bookmarks/1', {
      statusCode: 200,
    }).as('deletebookmarkJob');
    // Click on the dummy job card to toggle bookmark
    cy.get('[data-testid="bookmarked-icon"]').click();
    
    cy.wait('@deletebookmarkJob', {timeout: 10000});

    // Verify that the job is now bookmarked
    cy.get('[data-testid="bookmark-icon"]').should('exist');

    // Navigate to the bookmarked jobs page
    // cy.visit('/bookmarked');

    // Verify that the dummy job appears in the bookmarked jobs list

    cy.get('[data-testid="job-title"]').should('contain', 'Software Engineer');
  });
});
