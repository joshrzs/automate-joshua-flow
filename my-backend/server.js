const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Use CORS middleware
app.use(cors());

// Parse incoming requests with JSON payload
app.use(bodyParser.json());

// POST endpoint to handle form submissions
app.post('/submit-form', (req, res) => {
  const { name, email, subject, message } = req.body;
  console.log('Form data received:', { name, email, subject, message });

  // You can process the form data here (e.g., send to Google Sheets, etc.)

  res.status(200).json({ message: 'Form submitted successfully!' });
});

// Start the backend server
app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
