# Odds App

A full-stack application built with React 19.0 (Vite), Express.js, and MongoDB.

## Project Structure

```
odds/
├── frontend/         # React Vite frontend
└── backend/          # Express.js backend
```

## Prerequisites

- Node.js (v18 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository
2. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```
3. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```
4. Create a .env file in the backend directory with:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_uri
   ```

## Running the Application

1. Start the backend server:
   ```bash
   cd backend
   npm start
   ```
2. Start the frontend development server:
   ```bash
   cd frontend
   npm run dev
   ```

The application will be available at http://localhost:5173 (frontend) and http://localhost:5000 (backend)
