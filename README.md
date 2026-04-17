# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# 🌟 KeenKeeper — Keep Your Friendships Alive

KeenKeeper is a modern and interactive relationship management web application designed to help you stay connected with your friends. It allows users to track interactions, monitor relationship health, and maintain meaningful connections effortlessly.

---
## Live visual 
Live link : https://keenkeeper-friendship-keep-alive.netlify.app/


## 🚀 Live Features

✨ **Track Your Friendships**

* Monitor how long it has been since your last interaction
* Stay updated with contact goals and due dates

📞 **Quick Check-In**

* Instantly log interactions like Call, Text, and Video
* Automatically updates your timeline

📜 **Timeline History**

* View all past interactions in a clean, structured timeline
* Filter by Call, Text, or Video

📊 **Friendship Analytics**

* Visualize your interaction patterns with a Pie Chart
* Understand how you communicate with your friends

🔔 **Smart Notifications**

* Toast notifications for every interaction
* Instant feedback for user actions

---

## 🧠 Technologies Used

| Technology       | Purpose                  |
| ---------------- | ------------------------ |
| React.js         | Frontend UI              |
| React Router DOM | Navigation               |
| Tailwind CSS     | Styling & Responsiveness |
| Recharts         | Data Visualization       |
| React Hot Toast  | Notifications            |
| Context API      | State Management         |

---

## 📂 Project Structure

```
src/
│
├── components/
├── pages/
│   ├── Home
│   ├── Timeline
│   ├── Stats
│   └── FriendDetails
│
├── context/
├── routes/
├── data/
│   └── friends.json
```

---

## 🎯 Key Features

### 1️⃣ Dynamic Friend Management

* Displays multiple friend profiles from JSON data
* Status indicators: Overdue, Almost Due, On-Track

### 2️⃣ Interaction Logging System

* Add Call, Text, Video interactions
* Stored globally using Context API
* Real-time updates across pages

### 3️⃣ Interactive Dashboard

* Timeline with filter functionality
* Analytics page with visual insights

---

## 📸 UI Highlights

✔ Responsive Design (Mobile, Tablet, Desktop)
✔ Clean and modern UI inspired by Figma
✔ Interactive cards and smooth user experience

---

## ⚙️ Setup Instructions

1. Clone the repository:

```
git clone https://github.com/your-username/keenkeeper.git
```

2. Navigate to project:

```
cd keenkeeper
```

3. Install dependencies:

```
npm install
```

4. Run the project:

```
npm run dev
```

---

## 🔥 Future Improvements

* Add Local Storage / Database support
* Edit and manage friend data dynamically
* Add reminders and notifications
* Weekly/Monthly interaction analytics

---

## 👨‍💻 Author

**Kawsar Hamid**
Passionate about building modern web applications and solving real-world problems.

---

## ⭐ Final Note

KeenKeeper is more than just an assignment — it's a practical tool to help maintain meaningful relationships in a busy world.

👉 *"Because friendships deserve consistency."* 💙
