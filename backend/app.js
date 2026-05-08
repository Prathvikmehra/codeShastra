const express = require('express');
const cors = require('cors');
const path = require('path');

// Route Imports
const authRoutes = require('./src/routes/authRoutes');
const userRoutes = require('./src/routes/userRoutes');
const projectRoutes = require('./src/routes/projectRoutes');
const labRoutes = require('./src/routes/labRoutes');
const challengeRoutes = require('./src/routes/challengeRoutes');
const submissionRoutes = require('./src/routes/submissionRoutes');

const app = express();

const passport = require('passport');

// Middlewares
app.use(cors());
app.use(express.json()); // Built-in body parser
app.use(passport.initialize());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Mount Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/labs', labRoutes);
app.use('/api/challenges', challengeRoutes);
app.use('/api/submissions', submissionRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('CodeShastra API is running...');
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});

module.exports = app;
