# 🚀 SnacItUp — Premium Campus Mess Ordering System  

![SnacItUp Banner](https://via.placeholder.com/1200x600/0ea5e9/ffffff?text=SnacItUp+-+Smart+Mess+Ordering)

SnacItUp is a modern, production-ready campus food ordering web application designed to streamline mess operations and improve student experience. Inspired by real-world food delivery apps, it provides a seamless way for students to browse menus, place orders, pay online, and track them in real time.

---

## ✨ Features  

### 👨‍🎓 Student Side  
- Browse daily menu with search and filters  
- Add items to cart with quantity control  
- Smooth checkout with user details  
- Secure online payments via Razorpay  
- Unique order ID generation  
- Real-time order tracking  

### 🛠️ Admin Side  
- Live dashboard with orders, revenue, and status  
- Real-time order management  
- Full menu CRUD (add, edit, delete items)  
- Toggle item availability  
- Manage app settings and admin roles  

---

## 🛠️ Tech Stack  

**Frontend:** React + Vite  
**Routing:** React Router  
**Backend/Database:** Firebase Firestore  
**Authentication:** Firebase Auth  
**Payments:** Razorpay  
**Notifications:** React Hot Toast  
**Deployment:** Firebase Hosting / Vercel  

---

## 🏗️ Getting Started  

### 1. Clone & Install  
```bash
git clone https://github.com/YOUR_USERNAME/snacitup.git
cd snacitup
npm install
npm run dev
```

---

### 2. Firebase Setup  
1. Create a project on Firebase Console  
2. Enable Authentication (Email/Password)  
3. Enable Firestore Database  
4. Add your Firebase config in the project  

---

### 3. Admin Setup  
1. Create a user in Firebase Authentication  
2. Add the user UID in `admins` collection (Firestore)  
3. Set role as `"admin"`  
4. Login via admin panel  

---

## 🚀 Deployment  

### Vercel  
```bash
vercel
```

### Firebase  
```bash
firebase deploy
```

---

