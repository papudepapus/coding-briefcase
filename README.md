# Coding Briefcase

Purpose and Scope

The coding-briefcase repository serves as a professional portfolio website designed to showcase a developer's skills, projects, and provide contact information. It features:

-Interactive sections for skills, projects, and contact information
-Animated text elements and responsive carousel displays
-Contact form with backend email functionality
-Modern UI with responsive design for all devices

System Architecture Overview

Application Architecture Diagram

<img src='./src/img/programming-toolkit/Application Architecture Diagram.png' alt='Application Architecture Diagram'>

The application follows a client-server architecture with:

-A React frontend deployed on GitHub Pages (configured in package.json)
-An Express backend server handling API requests, primarily for the contact form
-Nodemailer service for processing email functionality

The frontend and backend are separate deployments, with the frontend making API calls to the backend when needed.

Component Structure

React Component Hierarchy Diagram

<img src='./src/img/programming-toolkit/React Component Hierarchy Diagram.png' alt='React Component Hierarchy Diagram'>

The application is structured as a single-page React application with modular components. The file serves as the root component, importing and rendering six main section components in a specific order.App.js

Each component is implemented as a separate JSX file in the components directory:

-NavBar.jsx: Navigation and social media links
-Banner.jsx: Hero section with animated text
-Skills.jsx: Skills showcase with responsive carousel
-Projects.jsx: Project portfolio with filtering tabs
-Contact.jsx: Contact form with email functionality
-Footer.jsx: Site footer with additional links

User Interaction Flow

User Experience Sequence Diagram

<img src='./src/img/programming-toolkit/User Experience Sequence Diagram.png' alt='User Experience Sequence Diagram'>

This diagram illustrates the typical user flow through the application:

1 - Users initially view the banner section with animated text cycling through different roles
2 - As users scroll, they encounter the skills section with a responsive carousel
3 - The projects section allows filtering by category tabs
4 - The contact form captures user input and submits it to the Express backend
5 - The backend processes the request using Nodemailer to send an email

Technology Stack

The application is built using a modern JavaScript stack with React for the frontend and Express for the backend.

Category	            Technologies
Frontend Framework	    React (v19.1.0)
UI Components	        React Bootstrap (v2.10.9)
CSS Frameworks	        Bootstrap (v5.3.5), Tailwind CSS (v4.1.4)
Animations	            animate.css (v4.1.1)
Carousel	            react-multi-carousel (v2.8.6)
Form Handling           react-hook-form (v7.55.0)
Backend	                Express (v5.1.0)
Email Service	        Nodemailer (v6.10.1)
Deployment	            GitHub Pages (gh-pages v6.3.0)

The dependencies listed in package.json reveal key functionality:

-react-on-screen for tracking component visibility
-react-bootstrap-icons for UI icons
-react-router-hash-link for smooth navigation
-cors for handling cross-origin requests
-dotenv for environment variable management

Deployment Model

Deployment Configuration Diagram

<img src='./src/img/programming-toolkit/Deployment Configuration Diagram.png' alt='Deployment Configuration Diagram'>

The application uses a split deployment model:

-Frontend: Deployed to GitHub Pages using the gh-pages package
-Backend: Deployed separately (hosting service not specified in the provided files)

The deployment process is managed through npm scripts defined in package.json:

-predeploy: Automatically runs before deployment to build the production version
-deploy: Publishes the built application to GitHub Pages
-start: Runs the development server locally
-build: Creates a production build
-test: Runs the test suite

The homepage configuration in package.json () ensures proper asset path resolution when deployed to GitHub Pages."homepage": "http:/papudepapus.github.io/coding-briefcase"

Summary

The coding-briefcase repository implements a modern, responsive personal portfolio website with:

-A component-based React frontend with six main sections
-Interactive elements including animations and carousels
-A contact form backed by an Express server with email functionality
-Deployment configuration for GitHub Pages

The architecture follows best practices for modern web development with clear separation of concerns, modular components, and a responsive design that works across devices.
