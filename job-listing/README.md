# Job Listing Web App

  **Job listings**
![image](https://github.com/user-attachments/assets/0c55f2a2-0c2d-4e4b-b34d-0bc490e329ae)

  **Job description**
![image](https://github.com/user-attachments/assets/04e16225-a87a-40e8-86cc-9e52ce233064)

  **Sign Up**
  

  **Email Verification with OTP**
  

  **Login** 


## Overview

Welcome to the Job Listing Web App! This application is designed to help users find and explore job opportunities easily. It features a clean and user-friendly interface where you can view job postings, get detailed information about each job, and see essential details like company, location, and job requirements.


## Features

- **Job Listings**: Browse a list of job postings with summaries including job titles, company names, and brief descriptions.
- **Detailed Job Information**: Click on any job listing to view detailed information about the job, including a comprehensive description, responsibilities, ideal candidate traits, and more.
- **Interactive Sorting**: View job listings with a sorting indicator at the top right, allowing you to understand the sorting criteria used.
- **Responsive Design**: Enjoy a seamless experience whether you are on a desktop, tablet, or mobile device.

- **User Authentication**: Sign up, log in, and log out securely with options for email/password authentication, Google OAuth, and OTP verification.


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

