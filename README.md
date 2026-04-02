# Zorvyn-finance-dashboard
Finance dashboard UI with transaction management, charts, and role-based features built using React.

# 📊 Finance Dashboard UI

> A modern, responsive finance dashboard built with React to track, analyze, and visualize personal financial data.

---

## ✨ Overview

The Finance Dashboard UI is a frontend application designed to provide users with a clear and interactive view of their financial activity. It enables users to monitor balance, analyze spending patterns, and explore transaction data through an intuitive interface.

This project focuses on building scalable frontend architecture using reusable components and efficient state management, without relying on backend services.

---

## 🚀 Key Features

### 📈 Dashboard Overview

* Summary cards for Total Balance, Income, and Expenses
* Interactive charts for:

  * Financial trends over time
  * Category-wise spending distribution

### 📋 Transactions Management

* Detailed transaction list including date, amount, category, and type
* Functional features:

  * 🔍 Search transactions
  * 🎯 Filter by category or type
  * ⬆️ Sort by date or amount

### 🔐 Role-Based UI

* **Viewer** → Read-only access
* **Admin** → Add and manage transactions
* Seamless role switching for demonstration

### 📊 Insights & Analytics

* Highest spending category detection
* Monthly financial comparison
* Contextual insights for better understanding of spending behavior

---

## 🧠 Tech Stack

* React
* CSS (Flexbox & Grid)
* Recharts

---

## ⚙️ State Management

The application uses React Hooks to manage:

* Transaction data
* Filter and search states
* User role and permissions

---

## 🎯 Design & UX Highlights

* Clean, minimal, and modern UI
* Responsive layout across devices
* Clear visual hierarchy for better readability
* Color-coded financial indicators:

  * 🟢 Income
  * 🔴 Expenses
* Smooth user interactions and feedback

---

## 📱 Responsiveness

Designed to adapt seamlessly across:

* Desktop 💻
* Tablet 📱
* Mobile 📲

---

## 🛠️ Installation & Setup

1. Clone the repository

```bash id="h6y2b3"
git clone https://github.com/your-username/finance-dashboard.git
cd finance-dashboard
```

2. Install dependencies

```bash id="t8h3jd"
npm install
```

3. Start the development server

```bash id="1xq3wz"
npm start
```

---

## 📂 Project Structure

```id="yj6g7h"
src/
 ├── components/     # Reusable UI components
 ├── pages/          # Dashboard, Transactions, Insights
 ├── data/           # Mock data
 ├── App.js          # Root component
 ├── App.css         # Global styles
```

---

## 💡 Approach

The project is built with a focus on simplicity, scalability, and usability. A component-driven approach ensures modularity, while state is managed efficiently to keep the UI synchronized with user interactions.

Mock data is used to simulate real-world financial scenarios, enabling dynamic updates without backend complexity.

---

## 📌 Future Enhancements

* Dark mode support 🌙
* Local storage for data persistence 💾
* Export transactions (CSV/JSON) 📤
* Advanced filtering and grouping

---

## 📌 Note

This is a frontend-only project developed for evaluation purposes. All data used is mock data and no backend integration is included.

---

## 🙌 Acknowledgment

This project was created as part of a frontend development assignment to demonstrate UI development, state management, and interactive data handling skills.

---
