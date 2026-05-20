# 🏆 Sport Nest Server

A backend API for the Sport Nest platform — a sports facility booking system built with Node.js, Express, and MongoDB.

## 🚀 Live URL
https://sport-nest-server-pied.vercel.app/

## 📖 Project Purpose
Sport Nest Server handles authentication, sports facility management, and booking system APIs. It supports secure JWT-based authorization and provides RESTful endpoints for frontend integration.

## ✨ Features
- JWT Authentication (secured routes)
- Sports facilities CRUD API
- Booking system (create, update, delete)
- Search & filter facilities
- User-specific booking system
- CORS enabled for frontend integration
- MongoDB database integration

## 🛠️ Tech Stack
- Node.js
- Express.js
- MongoDB
- JWT (jose-cjs)
- dotenv
- cors

## 📦 Installation
git clone https://github.com/tfshorifulislam/sport-nest-server.git  
cd sport-nest-server  
npm install  

## ▶️ Run Project

Development:
npm run dev  

Production:
npm start   

## 📡 API Endpoints

### Sports
GET /sports - Get all facilities (search supported)  
GET /sports/:id - Get single facility  
POST /sports - Add new facility (auth required)  

### Bookings
GET /bookings/:userId - Get user bookings  
POST /bookings - Create booking  
PATCH /bookings/:id - Update booking  
DELETE /bookings/:id - Delete booking  

## 🔒 Authentication
Authorization: Bearer <token>

## 📁 Project Structure
index.js  
.env  
package.json  

## ⚡ Future Improvements
- Payment integration
- Admin dashboard
- Advanced filtering system
- Image upload (Cloudinary)

## 👨‍💻 Author
Made with ❤️ for Sport Nest Project
