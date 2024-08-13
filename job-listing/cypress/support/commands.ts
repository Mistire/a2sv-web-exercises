// cypress/support/commands.js

Cypress.Commands.add('login', () => {
  cy.request({
    method: 'POST',
    url: 'https://akil-backend.onrender.com/login', // Adjust this URL
    body: {
      email: 'mdwithgod@gmail.com',
      password: '1234', // Use valid credentials
    },
  }).then((response) => {
    // Save the session or token if needed
    window.localStorage.setItem('accessToken', response.body.accessToken);
  });
});
