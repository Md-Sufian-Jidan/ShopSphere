# 🛒 ShopSphere – Modern E-Commerce Platform

[![Frontend Live](https://img.shields.io/badge/Frontend-Live-green?style=flat&logo=vercel)](https://shop-sphere-sooty.vercel.app/)
[![Backend Live](https://img.shields.io/badge/Backend-Live-blue?style=flat&logo=vercel)](https://shopsphere-backend-one.vercel.app/)
[![License](https://img.shields.io/badge/License-ISC-purple.svg)](./LICENSE)

A **modern, scalable, and responsive** E-Commerce web application built with **React (frontend)** and **Node.js/Express + MongoDB (backend)**.  
The platform includes **customer and admin dashboards**, **cart & product pages**, and **full order management functionality**.

---

## 📑 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Demo Links](#-demo-links)
- [Installation](#-installation)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [Environment Variables](#-environment-variables)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Troubleshooting](#-troubleshooting)
- [Contributors](#-contributors)
- [License](#-license)

---

## 🚀 Features

### 🌐 Customer Features
- 🏠 **Home, About, Contact pages** with smooth animations (Framer Motion + Tailwind).
- 🛍️ **Product Listing** with filters, sorting, and search.
- 🛒 **Cart page** with quantity updates and checkout flow.
- 👤 **Customer Dashboard**:
  - Manage profile & orders.
  - Track order history.
  - Save wishlist items.

### 🔑 Admin Features
- 📊 **Admin Dashboard** with sidebar, header, and dynamic routing.
- 📦 **Products Management** – add, edit, delete, hide products.
- 🧾 **Orders Management** – view, update, process orders.
- 👥 **Customers Management** – search, block, delete customers.
- ⚙️ **Settings Page** – manage store, payment, shipping, notifications, appearance, and integrations.

---

## 🛠️ Tech Stack

### Frontend
- ⚛️ **React 19**  
- 🎨 **Tailwind CSS** (custom theme)  
- 🎬 **Framer Motion** (animations)  
- 🧩 **Headless UI** + custom components  
- 📦 **Swiper.js** (sliders)  
- 🔗 **React Router DOM** for routing  

### Backend
- 🌐 **Node.js + Express**  
- 🍃 **MongoDB + Mongoose (ODM)**  
- 🔑 **JWT Authentication**  
- 🛡️ **Bcrypt** for password hashing  

### Others
- ☁️ **Cloudinary** – image uploads  
- 📩 **Nodemailer** – emails & newsletters  
- 🔌 **CORS & dotenv** for environment & API handling  

---

## 🌍 Demo Links

- **Frontend**: [ShopSphere Live](https://shop-sphere-sooty.vercel.app/)  
- **Backend API**: [ShopSphere API](https://shopsphere-backend-one.vercel.app/)  

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/Md-Sufian-Jidan/ShopSphere.git
cd ShopSphere

cd frontend
npm install
npm run dev

cd backend
npm install
npm run dev

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
EMAIL_SERVICE=your_email_service
EMAIL_USER=your_email_address
EMAIL_PASS=your_email_password

VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
