# Job Listing Web App

![image](https://github.com/user-attachments/assets/b70fe21e-60b1-43eb-8527-f166e6b6d694)

![image](https://github.com/user-attachments/assets/19ecb369-2161-4ab5-b96b-4328feadcfa2)

![image](https://github.com/user-attachments/assets/45fddb78-0a35-4425-871f-5b870a153e41)


## Overview

Welcome to the Job Listing Web App! This application is designed to help users find and explore job opportunities easily. It features a clean and user-friendly interface where you can view job postings, get detailed information about each job, and see essential details like company, location, and job requirements.


## Features

- **Job Listings**: Browse a list of job postings with summaries including job titles, company names, and brief descriptions.
- **Detailed Job Information**: Click on any job listing to view detailed information about the job, including a comprehensive description, responsibilities, ideal candidate traits, and more.
- **Interactive Sorting**: View job listings with a sorting indicator at the top right, allowing you to understand the sorting criteria used.
- **Responsive Design**: Enjoy a seamless experience whether you are on a desktop, tablet, or mobile device.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Next.js**: A React framework for server-side rendering and static site generation.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for building custom designs.
- **Heroicons**: A set of free, MIT-licensed high-quality SVG icons for you to use in your web projects.

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

