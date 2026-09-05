# Real Estate Agency - Backend API

Express + MongoDB backend for the Real Estate Agency Portfolio.

## Tech Stack
- Node.js / Express
- MongoDB Atlas + Mongoose
- bcryptjs, jsonwebtoken, dotenv, cors

## Environment Variables

Copy .env.example to .env:
  MONGODB_URI    - MongoDB Atlas connection string
  JWT_SECRET     - secret key for JWT tokens
  JWT_EXPIRES_IN - token expiry e.g. 7d
  PORT           - server port (default 5000)
  CLIENT_ORIGIN  - frontend origin for CORS

## Installation
  cd backend
  npm install

## Running
  node server.js         (production)
  npx nodemon server.js  (dev auto-reload)

## Seed Database
  node seed/seedProperties.js

Clears and inserts 6 sample properties.

## API Endpoints

  GET  /api/health

  POST /api/auth/signup
  POST /api/auth/login

  GET    /api/properties
  GET    /api/properties/:id
  POST   /api/properties      (admin JWT required)
  PUT    /api/properties/:id  (admin JWT required)
  DELETE /api/properties/:id  (admin JWT required)

  POST /api/inquiries
  GET  /api/inquiries         (admin JWT required)

## Status Codes
200 OK | 201 Created | 400 Bad Request | 401 Unauthorized | 403 Forbidden | 404 Not Found | 500 Server Error