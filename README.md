# 🚀 codeShastra

> **Bridging the gap between academic knowledge and real-world coding skills.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapresentation.io/contributing)
[![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?logo=react)](https://reactjs.org)
[![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?logo=node.js)](https://nodejs.org)

---

## 🔗 Project Links

| Resource | Link |
| :--- | :--- |
| 🌐 **Live Demo (Frontend)** | [code-shastra-dncn.vercel.app](https://code-shastra-dncn.vercel.app/) |
| 🎨 **Figma Design** | [View Design on Figma](https://www.figma.com/design/dvPmDVIj5uXPTxQoyFWPgS/Untitled?node-id=0-1&t=ht6xeZR9QqdkhbQ0-1) |
| 📺 **YouTube Demo** | [Watch Demo Video](https://www.youtube.com/watch?v=9mZDa9Inezg) |
| ⚙️ **Backend API** | [codeshastra-backend.onrender.com/api](https://codeshastra-backend.onrender.com/api) |
| 📮 **Postman API Docs** | [View API Documentation](https://documenter.getpostman.com/view/50841552/2sBXqKofJu) |

---

## 📌 Problem Statement

> **Why do fresh graduates lack practical coding skills despite strong academic performance?**

**Score: 86.5 | Domain: EdTech**

Companies hiring fresh graduates consistently discover that candidates possess strong theoretical knowledge and impressive academic scores — yet they **cannot solve basic programming problems, debug real code, or apply concepts practically**.

The root cause is clear:

- 📚 College curricula rely **heavily on theoretical lectures** with little to no hands-on coding.
- 🏭 There are **no industry-simulation labs** where students work on real engineering challenges.
- 🌍 Students graduate **without real-world project experience** that companies expect on day one.

---

## 💡 Our Solution — codeShastra

**codeShastra** (meaning *"Code Scripture"*) is a full-stack EdTech platform that transforms the way students learn programming. We provide:

| Feature | Description |
|---|---|
| 🧪 **Hands-on Labs** | Industry-simulation coding environments with real problem sets |
| 🏗️ **Project-Based Learning** | End-to-end guided projects mirroring actual company workflows |
| 🤖 **AI Code Reviewer** | Instant feedback on code quality, logic, and best practices |
| 📊 **Skill Tracker** | Visual dashboard tracking progress, weak areas, and improvements |
| 🏆 **Challenges & Hackathons** | Timed competitive programming rounds to simulate hiring tests |
| 👨‍🏫 **Mentor Connect** | 1:1 sessions with industry professionals and senior developers |
| 📜 **Certificates** | Verifiable skill certificates accepted by hiring partners |

---

## 🎨 UI/UX Design

> 🖼️ **[View Figma Design →](https://www.figma.com/design/dvPmDVIj5uXPTxQoyFWPgS/Untitled?node-id=0-1&t=ht6xeZR9QqdkhbQ0-1)**

---

## 🏗️ Tech Stack

### Frontend
- **React.js** — Component-based UI
- **Vite** — Lightning-fast dev server and bundler
- **React Router v6** — Client-side routing
- **Axios** — HTTP client for API calls
- **Vanilla CSS / CSS Modules** — Styling (no Tailwind)

### Backend
- **Node.js** — Runtime environment
- **Express.js** — REST API framework
- **MongoDB** — NoSQL database for users, courses, submissions
- **Mongoose** — ODM for MongoDB schema modeling
- **JWT** — Authentication and authorization
- **Bcrypt** — Password hashing
- **Multer** — File/image uploads
- **Dotenv** — Environment variable management

---

## 📁 Folder Structure

```
codeShastra/
├── frontend/                          # React.js Client Application
│   ├── public/
│   │   ├── favicon.ico
│   │   └── index.html
│   ├── src/
│   │   ├── assets/                    # Images, icons, fonts
│   │   │   └── logo.svg
│   │   ├── components/                # Reusable UI components
│   │   │   ├── Navbar/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   └── Navbar.css
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.jsx
│   │   │   │   └── Footer.css
│   │   │   ├── CodeEditor/            # In-browser code editor component
│   │   │   │   ├── CodeEditor.jsx
│   │   │   │   └── CodeEditor.css
│   │   │   ├── SkillCard/             # Skill progress display card
│   │   │   │   ├── SkillCard.jsx
│   │   │   │   └── SkillCard.css
│   │   │   └── Loader/
│   │   │       ├── Loader.jsx
│   │   │       └── Loader.css
│   │   ├── pages/                     # Route-level page components
│   │   │   ├── Home/
│   │   │   │   ├── Home.jsx
│   │   │   │   └── Home.css
│   │   │   ├── Auth/
│   │   │   │   ├── Login.jsx
│   │   │   │   ├── Register.jsx
│   │   │   │   └── Auth.css
│   │   │   ├── Dashboard/             # Student progress dashboard
│   │   │   │   ├── Dashboard.jsx
│   │   │   │   └── Dashboard.css
│   │   │   ├── Labs/                  # Hands-on coding labs
│   │   │   │   ├── Labs.jsx
│   │   │   │   ├── LabDetail.jsx
│   │   │   │   └── Labs.css
│   │   │   ├── Projects/              # Guided project tracks
│   │   │   │   ├── Projects.jsx
│   │   │   │   ├── ProjectDetail.jsx
│   │   │   │   └── Projects.css
│   │   │   ├── Challenges/            # Timed coding challenges
│   │   │   │   ├── Challenges.jsx
│   │   │   │   ├── ChallengeRoom.jsx
│   │   │   │   └── Challenges.css
│   │   │   ├── Mentors/               # Mentor listing & booking
│   │   │   │   ├── Mentors.jsx
│   │   │   │   └── Mentors.css
│   │   │   └── Profile/               # User profile & certificates
│   │   │       ├── Profile.jsx
│   │   │       └── Profile.css
│   │   ├── context/                   # React Context (global state)
│   │   │   ├── AuthContext.jsx        # Authentication state
│   │   │   └── ThemeContext.jsx       # Light/Dark theme toggle
│   │   ├── hooks/                     # Custom React hooks
│   │   │   ├── useAuth.js
│   │   │   └── useFetch.js
│   │   ├── services/                  # Axios API service layer
│   │   │   ├── api.js                 # Base Axios instance
│   │   │   ├── authService.js         # Login, Register, Logout API calls
│   │   │   ├── labService.js          # Labs API calls
│   │   │   ├── projectService.js      # Projects API calls
│   │   │   └── challengeService.js    # Challenges API calls
│   │   ├── utils/                     # Helper functions
│   │   │   ├── formatDate.js
│   │   │   └── validateForm.js
│   │   ├── routes/                    # Route definitions
│   │   │   └── AppRoutes.jsx
│   │   ├── App.jsx                    # Root application component
│   │   ├── App.css                    # Global styles
│   │   ├── index.css                  # CSS reset & design tokens
│   │   └── main.jsx                   # React entry point
│   ├── .env                           # Frontend env variables (VITE_API_URL)
│   ├── vite.config.js
│   └── package.json
│
├── backend/                           # Node.js + Express REST API
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js                  # MongoDB connection setup
│   │   │   └── cloudinary.js          # Cloudinary config for file uploads
│   │   ├── models/                    # Mongoose data models
│   │   │   ├── User.model.js          # User schema (students, mentors)
│   │   │   ├── Lab.model.js           # Coding lab schema
│   │   │   ├── Project.model.js       # Guided project schema
│   │   │   ├── Challenge.model.js     # Timed challenge schema
│   │   │   ├── Submission.model.js    # Code submission schema
│   │   │   └── Certificate.model.js   # Certificate schema
│   │   ├── controllers/               # Route handler logic (MVC)
│   │   │   ├── auth.controller.js     # Register, Login, Logout
│   │   │   ├── user.controller.js     # Profile CRUD
│   │   │   ├── lab.controller.js      # Lab management
│   │   │   ├── project.controller.js  # Project management
│   │   │   ├── challenge.controller.js# Challenge management
│   │   │   ├── submission.controller.js # Code submission & evaluation
│   │   │   └── certificate.controller.js # Certificate generation
│   │   ├── routes/                    # Express route definitions
│   │   │   ├── auth.routes.js         # /api/auth/*
│   │   │   ├── user.routes.js         # /api/users/*
│   │   │   ├── lab.routes.js          # /api/labs/*
│   │   │   ├── project.routes.js      # /api/projects/*
│   │   │   ├── challenge.routes.js    # /api/challenges/*
│   │   │   ├── submission.routes.js   # /api/submissions/*
│   │   │   └── certificate.routes.js  # /api/certificates/*
│   │   ├── middlewares/               # Express middleware
│   │   │   ├── auth.middleware.js     # JWT verification
│   │   │   ├── role.middleware.js     # Role-based access (student/mentor/admin)
│   │   │   ├── validate.middleware.js # Request body validation
│   │   │   └── error.middleware.js    # Global error handler
│   │   └── utils/                     # Backend utility helpers
│   │       ├── generateToken.js       # JWT token creation
│   │       ├── hashPassword.js        # Bcrypt helpers
│   │       └── apiResponse.js         # Standardized API response format
│   ├── app.js                         # Express app setup & middleware
│   ├── server.js                      # Server entry point (port listener)
│   ├── .env                           # Backend env variables
│   └── package.json
│
├── .gitignore
└── README.md                          # ← You are here
```

---

## 🔌 API Endpoints Overview

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/register` | Register a new user |
| `POST` | `/api/auth/login` | Login and receive JWT |
| `GET` | `/api/users/profile` | Get logged-in user profile |
| `PUT` | `/api/users/profile` | Update user profile |
| `GET` | `/api/labs` | List all coding labs |
| `GET` | `/api/labs/:id` | Get a specific lab |
| `GET` | `/api/projects` | List all guided projects |
| `GET` | `/api/challenges` | List all challenges |
| `POST` | `/api/submissions` | Submit code for evaluation |
| `GET` | `/api/certificates/:userId` | Get user's certificates |

---

## ⚙️ Getting Started

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)
- npm or yarn

### 1. Clone the Repository
```bash
git clone https://github.com/Prathvikmehra/codeShastra.git
cd codeShastra
```

### 2. Setup Backend
```bash
cd backend
npm install
cp .env.example .env      # Add your MongoDB URI, JWT_SECRET, etc.
npm run dev
```

### 3. Setup Frontend
```bash
cd frontend
npm install
cp .env.example .env      # Add VITE_API_URL=http://localhost:5000
npm run dev
```

The frontend will run on **http://localhost:5173** and the backend on **http://localhost:5000**.

---

## 🌍 Environment Variables

### Backend `.env`
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
JWT_EXPIRES_IN=7d
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### Frontend `.env`
```
VITE_API_URL=http://localhost:5000
```

---

## 🗺️ Roadmap

- [x] Project initialization & README
- [ ] Backend: Auth system (Register/Login/JWT)
- [ ] Backend: Labs, Projects & Challenges CRUD
- [ ] Backend: Code submission & evaluation engine
- [ ] Frontend: Landing page & authentication flow
- [ ] Frontend: Student dashboard with skill tracker
- [ ] Frontend: In-browser code editor (Monaco Editor)
- [ ] Frontend: Challenges & timed coding room
- [ ] Frontend: Mentor connect & booking
- [ ] Certificate generation system
- [ ] Admin panel for content management
- [ ] Deployment (Frontend: Vercel | Backend: Render)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Prathvik Mehra**
- GitHub: [@Prathvikmehra](https://github.com/Prathvikmehra)

---

> *"The best way to learn to code is to actually code."* — codeShastra