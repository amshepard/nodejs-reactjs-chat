// Import the express module
const express = require("express");
// Import the CORS middleware
const cors = require("cors");

// Create an Express application
const app = express();

// Middleware to parse JSON bodies in requests
app.use(express.json());

// Enable CORS for all routes and origins
app.use(cors({ origin: true }));

// Define a POST endpoint for authentication
app.post("/authenticate", async (req, res) => {
  // Extract 'username' from the request body
  const { username } = req.body;

  462e6147-e5a0-46e7-88e7-a149d40d4f42

  // Send a response with the username and a placeholder secret
  // Note: In a real application, this should handle actual authentication
  // and return a real token or secret.
  return res.json({ username: username, secret: "sha256..." });
});

// Start the server on port 3001
app.listen(3001);
