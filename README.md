# 🚀 AppPulse - Productive Apps Marketplace

**AppPulse** is a responsive, feature-rich single-page web application designed for exploring, installing, and reviewing top-tier productivity applications. Built with React 18, Tailwind CSS, Recharts, and LocalStorage integration.

---

## 📌 Features

### 🧱 1. Layout & Design
- **Header**:
  - Interactive Logo navigating to Home (`/`).
  - Navigation bar with active route highlighting (`Home`, `Apps`, `Installation`).
  - **Contribution Button** linking directly to GitHub profile.
- **Footer**: Custom dark-themed footer featuring brand elements, copyright, and social links.

### 🏠 2. Home Page
- **Hero Banner**: Center-aligned headline, text, App Store & Google Play redirect buttons, floating mobile app mockup.
- **Stats Banner**: 3 state cards (`29.6M` Total Downloads, `906K` Active Users, `132+` Products Built).
- **Trending Apps Section**: 8 app cards in a responsive 4-column layout with "Show All Apps" navigation button.

### 📱 3. All Apps Page
- Dynamic header displaying **total apps count**.
- **Live Search**: Case-insensitive filtering by title as the user types.
- **No App Found** fallback with reset button when zero matches occur.

### 📊 4. App Details Page (`/apps/:id`)
- **App Information**: Image, title, company name, size, download count, rating average, and review count.
- **LocalStorage Install Toggle**: "Install" button turns into disabled "Installed" state upon installation, persisted in `localStorage`.
- **Toast Alerts**: Success notifications triggered on app installation and uninstallation.
- **Review Chart**: Responsive **Recharts horizontal bar chart** visualizing 1-star to 5-star rating breakdowns.
- **App Description**: Multi-paragraph detailed text layout.
- **OPPS!! APP NOT FOUND**: Custom fallback UI when searching for non-existent app IDs.

### 💾 5. My Installation Page (`/installation`)
- Displays all installed apps stored in `localStorage`.
- **Sort by Downloads**: Dropdown supporting `High-Low` (descending) and `Low-High` (ascending) order.
- **Uninstall Button**: Instantly removes app from UI and `localStorage` with toast notification.
- **Empty State**: Friendly prompt with "Explore All Apps" redirect.

### ⚠️ 6. Error Handling & Performance
- **Custom 404 Page**: "Oops, page not found!" with Home navigation button.
- **Loading Animations**: Animated loading indicators during route transitions and search queries.
- **Production SPA Routing**: Pre-configured `_redirects` and `vercel.json` to prevent 404 errors on page reload when deployed to Vercel, Netlify, or Cloudflare Pages.

---

## 🛠️ Technologies Used

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router v6](https://reactrouter.com/)
- **Data Visualization**: [Recharts](https://recharts.org/)
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/)
- **Storage**: Browser `localStorage` API

---

## ⚙️ Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone or navigate to the project directory:
```bash
cd app-pulse
```

2. Install dependencies:
```bash
npm install
```

3. Start the local development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

---

## 📦 Production Build & Deployment

### Build Command
```bash
npm run build
```
This generates the optimized production bundle in the `dist` folder.

### Deployment Instructions
- **Vercel**: Included `vercel.json` handles SPA route rewrites.
- **Netlify / Cloudflare Pages**: Included `public/_redirects` guarantees clean reload without 404 errors on deep routes like `/apps/1` or `/installation`.
