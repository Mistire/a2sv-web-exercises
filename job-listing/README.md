# Job Listing Web App
<div style="margin: auto>
 
  **Job listings page**
![image](https://github.com/user-attachments/assets/8695ce75-7041-42c2-9c59-2a30813d31b4)

  **Job description page**
![image](https://github.com/user-attachments/assets/04e16225-a87a-40e8-86cc-9e52ce233064)

  **Bookmarked Job page**
![image](https://github.com/user-attachments/assets/95ac538c-1c1b-42e7-bfc6-fe442b4cb45a)

  **Sign Up**
 ![image](https://github.com/user-attachments/assets/a3102aa3-0a72-4dfb-b6a5-737eaa2746e8)
 ![image](https://github.com/user-attachments/assets/b8eb9670-4e80-4eac-b5ca-9f4c44937c5a)

  **Email Verification with OTP page**
  ![image](https://github.com/user-attachments/assets/19ca3c17-9343-4a40-879c-522458a50fca)

  **Login page** 
  ![image](https://github.com/user-attachments/assets/3ad732d3-b3c0-421a-bf7a-198edb229490)

  **Loading UI**
  ![image](https://github.com/user-attachments/assets/4ee6a291-d2da-4bd6-be6b-4735eb99393d)

  **Mobile Responsive**
  <div  style="display:flex; flex-direction:row">
   ![image](https://github.com/user-attachments/assets/5b7b12d5-1015-48a4-94cf-fdb38b07d5e0)
   ![image](https://github.com/user-attachments/assets/7d29af1e-6483-4c63-b92f-b9601c90e0b1)
  </div>
  

  **Testing with Jest**
  ![image](https://github.com/user-attachments/assets/edf0670f-4fd3-4ca2-a499-6786e32650a5)

  **Testing with Cypress**
  ![image](https://github.com/user-attachments/assets/402cf97d-c1a7-4893-9490-3f91a5ad05b0)
  ![image](https://github.com/user-attachments/assets/7f58415b-8c9f-447b-a3bf-3037325d951a)

</div>

  




## Overview

Welcome to the Job Listing Web App! This application is designed to help users find and explore job opportunities easily. It features a clean and user-friendly interface where you can view job postings, get detailed information about each job, and see essential details like company, location, and job requirements.


## Features

- **Job Listings**: Browse a list of job postings with summaries including job titles, company names, and brief descriptions.
- **Detailed Job Information**: Click on any job listing to view detailed information about the job, including a comprehensive description, responsibilities, ideal candidate traits, and more.
- **Interactive Sorting**: View job listings with a sorting indicator at the top right, allowing you to understand the sorting criteria used.
- **Responsive Design**: Enjoy a seamless experience whether you are on a desktop, tablet, or mobile device.

- **User Authentication**: Sign up, log in, and log out securely with options for email/password authentication, Google OAuth, and OTP verification.

**Testing with Jest and Cypress**: Comprehensive testing using Jest and Cypress to ensure the app's reliability and performance across different scenarios.

## User Authentication Features

- **Email/Password Sign Up and Log In**: Users can create an account using their email and password. They can log in to access additional features and personalized job listings.
- **Google OAuth**: Users can sign up and log in using their Google accounts for a quicker and more secure authentication process.
- **OTP Verification**: After signing up, users receive a One-Time Password (OTP) sent to their email for verification. They need to enter the OTP to complete the registration process.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Next.js**: A React framework for server-side rendering and static site generation.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for building custom designs.
- **Heroicons**: A set of free, MIT-licensed high-quality SVG icons for you to use in your web projects.
- **Google Authentication**: For implementing secure user authentication with email/password and Google OAuth.
- **Backend API**: For handling user registration, login, and OTP verification.
- **Jest**: A delightful JavaScript testing framework with a focus on simplicity.
- **Cypress**: A next-generation front-end testing tool built for the modern web.

## Testing

### Jest
- Jest is used for unit and integration testing in the project. It helps ensure that individual components and functions work as expected in isolation and when combined.

  - **Run Jest Tests**: To run the Jest tests, use the following command
      ```bash
      npm run test
      ```


### Cypress
- Cypress is employed for end-to-end (E2E) testing, which simulates user interactions with the app to verify that all parts of the application work together as expected.

  - **Run Cypress Tests**: To open Cypress and run the tests, use:
      ```bash
      npm run cypress:open
      ```


## How to Set Up Locally

To get this project running on your local machine, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/job-listing-web-app.git
  ```

2. **Navigate to the Project Directory**
  ```bash
  cd job-listing
  ```

3. **Install Dependencies**
  ```bash
  npm install
  ```

4. **Run the Development Server**
  ```bash
  npm run dev
  ```

## API Endpoint

This project interacts with a backend API to fetch job opportunities. Below are the details of the API endpoints used:

- **Base URL**: [https://akil-backend.onrender.com/](https://akil-backend.onrender.com/)
- **Documentation**: [API Documentation](https://documenter.getpostman.com/view/27955515/2sA3rwMEUX)

### Endpoints

- **Get All Opportunities**
  - **Endpoint**: `/opportunities/search`
  - **Method**: GET

- **Get Opportunity by ID**
  - **Endpoint**: `/opportunities/:id`
  - **Method**: GET
  - **Example**: `/opportunities/6526382983jsdu8d7`

