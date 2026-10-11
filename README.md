<div align="center">

# বাজার দর · BazarDor

### আজকের বাজারের দাম এক নজরে। Today's Market Prices at a Glance.

A Bangla daily price tracker where you can check today's prices of rice, lentils, oil, vegetables, fish, meat, eggs and spices, compare prices across markets, and see what went up or down since yesterday.

<br>

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)
![Better Auth](https://img.shields.io/badge/Better_Auth-1-000000?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-7-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

</div>

---

## Technologies I Used

- Next.js (App Router)
- React
- JavaScript
- Tailwind CSS + DaisyUI
- Better Auth + MongoDB
- React Hot Toast
- React Fast Marquee

# Features

1. **Daily price overview:** The home page shows today's date, a live scrolling price ticker, the top 6 products whose price went up today, the top 6 whose price went down, and every product as a responsive card with its price and percentage change.

2. **Category browsing with sorting:** Browse products by category (চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম-দুধ, মসলা) with the active category highlighted. Sort them by price, low to high or high to low, with numeric sorting that handles Bangla numerals correctly.

3. **Market-wise product details:** Open any product to see its lowest, highest and average price, how much it changed since yesterday, and a table of today's prices across markets and divisions. This page is protected and requires login.

4. **Authentication and profile:** Sign up and sign in with email and password, Google or GitHub using Better Auth. Logged-in users can view their profile, update their name, and sign out. Every login, sign-up, logout, validation error and protected-page redirect shows a toast notification.

5. **Responsive UI with loading states:** The layout works on mobile, tablet and desktop. Skeleton loaders show while product data and the session are loading, buttons show a spinner while a request runs, and unknown routes show a friendly Bangla 404 page.

## How to Run

```bash
npm install
npm run dev
```

Create a `.env` file in the project root before running:

```env
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000
MONGODB_URI=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.
