
## You can access the live website here: https://talent-track-one.vercel.app/
Use these temp ids to check the project: 

For User account: Email: user1@gmail.com Password: 123456

For Company account: Email: donar@gmail.com Password: 12345678

Talent Track is a comprehensive Job Application System where job seekers can easily browse and apply for job postings.Enabled companies to post job and internship opportunities with detailed requirements and
descriptions. I've implemented a filter search feature allowing job seekers to filter jobs based on role and years of experience required.

Technologies Used:

## Frontend:

React.js: For building the user interface.

Tailwind CSS: For Styling the components.


## Backend:

Node.js: For the server-side runtime environment.

Express.js: For building the RESTful API.

MongoDB: As the database to store user and post data.

Cloudniary: For image uploads.

## Authentication:

JWT: For secure authentication and authorization.

## Prerequisites

[![React](https://img.shields.io/badge/React-%5E17.0.0-blue)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-%5E14.0.0-green)](https://nodejs.org/)

- [Node.js](https://nodejs.org/) installed on your machine.

## Getting Started

Follow these steps to set up and run the project locally.

## Frontend

###  Clone the Repository

```bash
git clone https://github.com/kshitiz11101/Talent-Track
cd frontend
npm install
npm run dev
```

## BACKEND
## Setting Environment Variables
* Place the .env file in the root folder in Server.
* change the environment variable values according to the above database settings.

## Environment Variables
set these environment variables in the .env file
```bash
MONGO=
JWT_SECRET_KEY=
PORT=

```

## Setting Project
```bash
cd backend
npm install
npm run dev

```
## Some Major Routes

## 1.Auth Routes: 
## Register user
```bash
    route: http://localhost:8800/api-v1/auth/register
```
## Login user
```bash
    route: http://localhost:8800/api-v1/auth/login
```


## 2.User Routes:
## Get-User
```bash
    route: http://localhost:8800/api-v1/users/get-user
```
## Get-All-Users
```bash
 route: http://localhost:8800/api-v1/users/
``` 
## Update-user
```bash
  route: http://localhost:8800/api-v1/users/update-user
```


## 3.Companies Routes:
## Register-Company
```bash
  route: http://localhost:8800/api-v1/companies/register
```
## Login-Company
```bash
  route: http://localhost:8800/api-v1/companies/login
```
## Update-Company
```bash
  route: http://localhost:8800/api-v1/companies/update-company
```
## Get-Company-Profile
```bash
  route: http://localhost:8800/api-v1/companies/get-company-profile
```
## Get-Company By Id
```bash
  route: http://localhost:8800/api-v1/companies/get-company/:id
```
## Get-Company Joblisting
```bash
  route: http://localhost:8800/api-v1/companies/get-company-joblisting
```


## 4.Job-Routes:

## Upload-job
```bash
  route: http://localhost:8800/api-v1/jobs/upload-job
```
## Update-Job
```bash
route: http://localhost:8800/api-v1/jobs/update-job/:id
```
## Get-All-Jobs
```bash
  route: http://localhost:8800/api-v1/jobs/find-jobs
```
## Get-Job-Details
```bash
  route: http://localhost:8800/api-v1/jobs/get-job-detail/:id
```
## Delete-Job
```bash
  route: http://localhost:8800/api-v1/jobs/delete-job/:id
```


