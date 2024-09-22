const express = require('express');
const fetch = require('node-fetch'); // Fetch API for server-side OAuth

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoint to handle Google OAuth callback
app.get('/auth/google', async (req, res) => {
  const code = req.query.code;
  const tokenResponse = await fetch(`https://oauth2.googleapis.com/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `code=${code}&client_id=YOUR_GOOGLE_CLIENT_ID&client_secret=YOUR_GOOGLE_CLIENT_SECRET&redirect_uri=https://sayz-beta.vercel.app/auth/google&grant_type=authorization_code`,
  });
  const tokenData = await tokenResponse.json();
  res.json(tokenData); // You should handle the token and use it for further user interactions
});

// Endpoint to handle Facebook OAuth callback
app.get('/auth/facebook', async (req, res) => {
  const code = req.query.code;
  const tokenResponse = await fetch(`https://graph.facebook.com/v10.0/oauth/access_token?client_id=FACEBOOK_CLIENT_ID&redirect_uri=https://sayz-beta.vercel.app/auth/facebook&client_secret=FACEBOOK_CLIENT_SECRET&code=${code}`);
  const tokenData = await tokenResponse.json();
  res.json(tokenData); // You should handle the token and use it for further user interactions
});

// Example route for creating VAS profile
app.post('/vas', (req, res) => {
  const { userId, interests } = req.body;
  // In real applications, save the VAS data to a database
  res.json({ message: 'VAS profile created', userId, interests });
});

app.listen(3000, () => {
  console.log('Server is running on https://sayz-beta.vercel.app/');
});
