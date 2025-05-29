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

- Toggle between Daily / Weekly / Monthly trends
- Animated horizontal bar chart
- Loading indicator on data change
- Display of last updated time
- Responsive layout and modern UI

## 📡 API Integration

The frontend fetches data from a Flask-based API hosted on Render, which retrieves trending language data from a PostgreSQL database hosted on Supabase.

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/tech-trends-frontend.git
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
