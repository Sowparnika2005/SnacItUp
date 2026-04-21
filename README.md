🚀 SnacItUp — Premium Campus Mess Ordering System

SnacItUp is a modern, production-ready campus food ordering web application designed to streamline mess operations and improve student experience. Inspired by real-world food delivery and fintech apps, it features a mobile-first UI, real-time updates, and seamless payment integration.

From browsing menus to placing orders and tracking them live, SnacItUp brings the entire mess ecosystem into one efficient digital platform.

✨ Features
👨‍🎓 Student Side
Browse daily menu with search and category filters
Add items to cart with quantity controls
Smooth checkout with name and room details
Secure online payments via Razorpay
Unique, formatted order IDs
Real-time order tracking
🛠️ Admin Side
Live dashboard with total orders, revenue, and status
Real-time order feed using Firestore
Mark orders as picked and track pending ones
Full menu management (add, edit, delete items)
Toggle item availability
Manage app-wide settings and admin roles
🛠️ Tech Stack

Frontend Framework: React + Vite
Routing: React Router
Backend & Database: Firebase Firestore
Authentication: Firebase Auth
Payments: Razorpay
Notifications: React Hot Toast
Deployment: Firebase Hosting / Vercel

🏗️ Getting Started
1. Clone & Install
git clone https://github.com/YOUR_USERNAME/snacitup.git
cd snacitup
npm install
npm run dev
2. Firebase Setup
Create a project in Firebase Console
Enable Authentication (Email/Password)
Enable Firestore Database
Add your config to firebase.js
3. Firestore Security Rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
🚀 Deployment

This project can be deployed on platforms like Vercel or Firebase Hosting.

Steps:

Connect your GitHub repository
Select Vite framework preset
Add environment variables for Firebase and Razorpay
Deploy
