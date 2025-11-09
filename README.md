# Job Board Frontend

This is the frontend for a full-stack job board application built with Angular and Bootstrap. It connects to a Spring Boot backend and supports secure, role-based access for jobseekers and recruiters.

##  Live Demo

Frontend: [https://jobboard-rust.vercel.app](https://jobboard-rust.vercel.app)  
Backend: [https://jobboard-springboot.onrender.com](https://jobboard-springboot.onrender.com)

##  Tech Stack

- **Angular 15+**
- **Bootstrap 5**
- **TypeScript**
- **JWT Cookie Authentication**
- **Responsive UI with role-based navigation**

##  Roles Supported

- **Jobseeker**: Register, log in, view jobs, manage profile
- **Recruiter**: Register, log in, post jobs, manage listings
- **Admin**: (optional) Reserved for future moderation features

##  Authentication Flow

- Secure JWT stored in `httpOnly` cookies
- Cross-origin auth enabled via `withCredentials: true`
- Logout clears cookie via backend `Set-Cookie` header

##  Features

- Role-based routing and navigation
- Form validation with Bootstrap styling
- Context-aware error messages and loading states
- Responsive layout for desktop and mobile
- Seamless integration with backend APIs

##  Demo Accounts

Use these to explore without registering:

```text
Recruiter
Email: Ayanda35@gmail.com
Password: secure@124
Administrator
Email: Admin12@JobBoard.com
Password : secure@123
Jobseeker
Email: jobseeker@demo.com
Password: secure@125

