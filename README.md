# SnacItUp
# SnacItUp 🍽️

A premium campus mess ordering web app — built with React, Firebase, and Razorpay. Students browse the menu, build a cart, pay online, and track their order in real time. Admins manage the menu, monitor live orders, and mark pickups from a unified dashboard.

---

## Features

### Student Side
- Browse today's menu with search and category filters
- Add multiple items to cart with quantity controls
- Checkout with name and room number
- Pay securely via Razorpay
- Receive a formatted order ID (e.g. `20260418-003`)
- Track live order status on the My Orders page

### Admin Side
- Dashboard with today's stats — total orders, revenue, pending, completed
- Live order feed with real-time Firestore updates
- Mark orders as picked up; urgent flag for orders waiting over 10 minutes
- Full menu management — add, edit, delete items
- Emoji picker (100+ presets or type any emoji) stored per item in Firestore
- Toggle item availability (available / out of stock)
- App-wide settings — mess name, open/closed toggle, payment on/off, announcements
- Create additional admin accounts from within the app

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 18 + Vite |
| Routing | React Router v6 |
| Database | Firebase Firestore (real-time) |
| Auth | Firebase Authentication |
| Payments | Razorpay |
| Notifications | react-hot-toast |
| Fonts | Cormorant Garamond + Jost |
| Deployment | Firebase Hosting or Vercel |

---

## Project Structure

```
snacitup/
├── src/
│   ├── context/
│   │   ├── AuthContext.jsx        # Firebase Auth + role detection (student / admin)
│   │   └── CartContext.jsx        # Cart state — add, remove, qty, totals
│   ├── lib/
│   │   └── firebase.js            # Firebase app, Firestore, Auth init
│   ├── components/
│   │   ├── StudentLayout.jsx      # Top navbar + mobile bottom nav + outlet
│   │   └── AdminLayout.jsx        # Collapsible sidebar + top bar + outlet
│   ├── pages/
│   │   ├── LoginPage.jsx          # Role toggle (student / admin), register flow
│   │   ├── student/
│   │   │   ├── MenuPage.jsx       # Menu grid, search, category filter, cart CTA
│   │   │   ├── CartPage.jsx       # Cart review, customer details, Razorpay checkout
│   │   │   ├── MyOrdersPage.jsx   # Live order history with status badges
│   │   │   └── OrderSuccessPage.jsx  # Post-payment confirmation screen
│   │   └── admin/
│   │       ├── AdminDashboard.jsx # Stats cards + recent orders overview
│   │       ├── AdminOrders.jsx    # Live order cards, filter, mark picked, delete
│   │       ├── AdminMenu.jsx      # Menu CRUD + emoji picker + availability toggle
│   │       └── AdminSettings.jsx  # Global settings + create admin accounts
│   ├── App.jsx                    # All routes, protected route guards
│   ├── main.jsx                   # React root, providers, Toaster
│   └── index.css                  # Global styles, CSS variables, animations
├── index.html
├── vite.config.js
├── firebase.json                  # Firebase Hosting config (SPA rewrite)
├── firestore.rules                # Security rules for all collections
└── package.json
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- A Firebase project with Firestore and Authentication enabled
- A Razorpay account (test key works for development)

### Install and run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## First Admin Account Setup

Firebase does not let you self-designate as admin — the first admin must be created manually.

**Step 1 — Create the user in Firebase Console**
1. Go to [Firebase Console](https://console.firebase.google.com) → your project
2. Authentication → Users → Add User
3. Enter an email and password, then save

**Step 2 — Grant admin role in Firestore**
1. Firestore Database → Start Collection → ID: `admins`
2. Document ID: paste the UID from the user you just created
3. Add field: `role` → string → `"admin"`
4. Add field: `email` → string → `"your@email.com"`

**Step 3 — Log in**
Go to `/login` → click Admin tab → sign in with those credentials.

Once you're in, additional admins can be created from **Admin → Settings → Create Admin Account**.

---

## Routing Overview

| Path | Access | Page |
|------|--------|------|
| `/login` | Public | Login / Register |
| `/` | Student | Menu (browse + add to cart) |
| `/cart` | Student | Cart + Razorpay checkout |
| `/orders` | Student | My Orders (live tracking) |
| `/order-success` | Student | Payment confirmation |
| `/admin` | Admin only | Dashboard (stats + recent orders) |
| `/admin/orders` | Admin only | Live order management |
| `/admin/menu` | Admin only | Menu CRUD + emoji picker |
| `/admin/settings` | Admin only | App settings + admin creation |

Unauthenticated users are redirected to `/login`. Non-admins attempting `/admin` are redirected to `/`.

---

## Firestore Collections

| Collection | Fields |
|------------|--------|
| `menu` | `name`, `price`, `category`, `emoji`, `available` |
| `orders` | `orderId`, `customerName`, `room`, `userId`, `userEmail`, `items[]`, `total`, `paid`, `picked`, `status`, `paymentId`, `timestamp` |
| `admins` | `email`, `role`, `createdAt` |
| `users` | `name`, `email`, `role`, `createdAt` |
| `settings` | `messName`, `isOpen`, `paymentsEnabled`, `showAnnouncement`, `announcementText` |

---

## Order ID Format

Orders are assigned human-readable IDs like `20260418-001`, `20260418-002`, etc. — date-prefixed and zero-padded, counted from total orders in the collection.

---

## Razorpay Setup

The project ships with a test key: `rzp_test_SeScbdgFHIIvAf`

To go live:
1. Create an account at [razorpay.com](https://razorpay.com)
2. Copy your **Live Key ID** from the dashboard
3. Replace the key in `src/pages/student/CartPage.jsx`:
   ```js
   key: "rzp_live_yourKeyHere",
   ```

> For production, consider adding a backend endpoint to verify Razorpay payment signatures before saving to Firestore.

---

## Seeding the Menu

Log in as admin → **Menu** tab → click **"Load 20 Sample Items"**

This adds 20 pre-built Indian mess items (dosas, sandwiches, rice dishes, beverages, etc.) with emojis and categories to Firestore instantly.

---

## Build and Deploy

### Build for production
```bash
npm run build
# Output goes to /dist
```

### Deploy to Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase deploy
```

Live at: `https://messorderingsystem.web.app`

### Deploy to Vercel (alternative)
```bash
npm install -g vercel
vercel
```
When prompted, set the output directory to `dist`.

---

## Firestore Security Rules

Apply the included `firestore.rules` file in your Firebase Console (Firestore → Rules tab). Summary:

- **menu** — anyone can read; only admins can write
- **orders** — authenticated users can create; users can read their own; admins can read all and update/delete
- **admins** — users can read their own doc only; admins can write
- **users** — users can read/write their own profile
- **settings** — public read; admin write only

---

## Environment Notes

All Firebase config is currently inline in `src/lib/firebase.js`. For production, move sensitive values to a `.env` file:

```env
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_PROJECT_ID=your_project
VITE_RAZORPAY_KEY=rzp_live_xxx
```

Then reference them as `import.meta.env.VITE_FIREBASE_API_KEY` in the source files.

---

## License

MIT — free to use, modify, and deploy for educational or commercial use.
