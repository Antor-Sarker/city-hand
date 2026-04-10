


# 🌐 City-Hand Frontend (Next.js)

City-Hand is a modern **local service provider platform frontend** built with Next.js.  
It provides a seamless user experience for browsing services, booking, and managing user/admin dashboards with role-based access.

---

## 🚀 Live Demo

- 🔗 Live Site: https://city-hand-chi.vercel.app/  
- 🔗 Backend API: https://city-hand-backend.onrender.com/  
- 📘 API Docs: https://documenter.getpostman.com/view/41187911/2sBXirjoqX  

---

## 📂 Repository

- 🖥️ Frontend Repo: https://github.com/Antor-Sarker/city-hand  
- ⚙️ Backend Repo: https://github.com/Antor-Sarker/city-hand-backend  

---

## 🛠️ Tech Stack

**Frontend Core**
- Next.js (App Router)
- React.js

**State & Data Handling**
- Server-side & client-side data fetching
- Axios (custom API service wrapper)

**Authentication**
- JWT-based authentication
- HTTP-only cookie session (via backend)
- Middleware-based route protection

**UI & UX**
- Responsive design
- Role-based dashboard layout
- Reusable components & modal system

---

## 🧠 Application Overview

City-Hand frontend is designed with a **role-based architecture**:

- 👤 **User (Client)** → Browse services, Search Services, Book Services, Manage bookings  
- 🛠️ **Admin** → Create Service, Manage services, Manage Bookings, Dashboard Analytics  

---

## ✨ Core Features

### 🔐 Authentication System
- User registration with validation
- Login with session persistence
- Logout functionality
- Protected routes using middleware
- Role-based access control (RBAC)

---

### 🏠 Home Page
- Hero section
- Service categories
- Featured services
- Search functionality
- Optimized API fetching with caching & revalidation

---

### 🔎 Service System
- View all services
- Service details page
- Category-based filtering
- Debounced search (reduces API calls)
- Server-side filtering via API

---

### 📅 Booking System
- Book services with validation
- Authentication check before booking
- Error handling and feedback UI
- Edit / cancel booking (User)
- Admin can manage all bookings

---

### 📊 Dashboard System

#### 👤 User Dashboard
- Booking summary cards
- Recent bookings list
- My bookings page with filters
- Booking details modal

#### 🛠️ Admin Dashboard
- Booking summary (total, pending, completed, etc.)
- Manage bookings (table view + filters)
- Manage services:
  - View all services
  - Add new service (image upload)
  - Search & filter services
- Role-based UI rendering

---

### ⚙️ Advanced Features
- Status-based booking filtering
- Dashboard card navigation with filters
- Reusable modal components
- Mobile responsive sidebar navigation
- Navbar with user info dropdown
- API error handling & loading states

---

## 🔐 Security & Auth Flow

- JWT stored in **HTTP-only cookies**
- Next.js middleware protects private routes
- API requests proxied via rewrites (to preserve cookies)
- Role-based route access

---

## 📡 API Integration

- Centralized Axios instance
- Base URL configured for backend
- Error handling & interceptors
- Refresh token support for session persistence

---

## ⚙️ Installation & Setup

### 📌 Prerequisites
- Node.js installed

---

### 🔧 Run Locally

```bash id="z8rm2w"
git clone https://github.com/Antor-Sarker/city-hand.git
cd city-hand
npm install

#run
npm run dev

Open http://localhost:3000
with your browser to see the result
