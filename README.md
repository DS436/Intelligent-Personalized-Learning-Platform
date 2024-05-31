# Intelligent-Personalized-Learning-Platform

This project is a full-stack web application designed to help users understand the careful use of social media through personalized learning. It utilizes React.js for the frontend, Express.js for the backend, and MongoDB for the database. The platform includes secure user authentication and AI integration for tailored content delivery.

How It Works
Backend
The backend is built using Express.js and connects to a MongoDB database. It provides an API endpoint to handle form submissions from the contact form on the frontend.

server.js: Sets up the Express server, connects to MongoDB, and defines middleware for CORS and body parsing.
models/User.js: Defines a Mongoose schema and model for storing user contact information.
routes/api.js: Contains the route for handling POST requests to save contact form submissions to the database.

Frontend
The frontend is built using React.js and includes several components that make up the different sections of the homepage.

Running the Application
npm install
Backend
node server.js
Frontend
npm start
