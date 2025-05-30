# Tech Trends Explorer (Frontend)

**Tech Trends Explorer** is a web application that visualizes trending programming languages on GitHub using interactive bar charts. Users can explore trends based on daily, weekly, and monthly data.

## 🌐 Live Demo

👉 [Visit the App](https://www.techtrends.uno)

## ⚙️ Tech Stack

- **Frontend Framework**: [React](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Charting**: [Recharts](https://recharts.org/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📦 Features

- Language Trends: Animated horizontal bar chart showing top programming languages on GitHub Trending
- Keyword Cloud: Colorful word cloud generated from trending repo descriptions, highlighting popular tools and technologies
- Top Repositories: List of most starred repositories with language, description, and star count
- Toggle Time Periods: Switch between Daily / Weekly / Monthly views
- Loading Indicators: Smooth spinner animations during data fetching
- Responsive Design: Optimized layout for mobile and desktop
- Interactive UI: Hover animations and polished transitions
- Real-Time Data: All data is fetched from a live backend connected to GitHub Trending

## 📡 API Integration

The frontend fetches data from a Flask-based API hosted on Render, which retrieves trending language data from a PostgreSQL database hosted on Supabase.

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/kkklausxyz/tech-trends-frontend.git
cd tech-trends-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a .env file based on .env.example:

```bash
VITE_API_BASE_URL=http://localhost:5000/api/trends
```

Replace with your deployed API URL if testing production.

### 4. Run the app locally

```bash
npm run dev
```

App will be available at http://localhost:5173

## 📊 Powered by:
- React & Tailwind CSS (Vercel)
- Flask & Python (Render)
- PostgreSQL (Supabase)
- GitHub Trending Data (ETL compliant with GitHub policy)
