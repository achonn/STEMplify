const express = require("express")
const app = express() // initialize express app
const cors = require("cors")
const mongoose = require("mongoose")
const fileUpload = require("express-fileupload")
// below are express packages to simplify file uploads
const simplifyController = require('./controllers/simplifyController');

const dotenv = require('dotenv');
dotenv.config();

const MONGODB_URL = process.env.MONGODB_CONNECTION
const PORT = process.env.PORT || '3000';

// MIDDLEWARE
app.use(express.json());
app.use(fileUpload());
app.use(
  cors({
    credentials: true, // allow cookies and credentials in CORS requests
    origin: process.env.CORS_ORIGIN, // allowed access origins
  })
);

// ROUTES
app.get('/', (req, res) => {
  res.json({ user: 'Roy' });
});

app.post('/simplify-text', simplifyController.simplifyText);

app.post('/simplify-file', simplifyController.simplifyFile);

// START SERVER
app.listen(PORT, async () => {
  try {
      await mongoose.connect(MONGODB_URL)
      console.log(`Server connected on port ${PORT}`)
  } catch (error) {
      console.log(error)
  }
})
