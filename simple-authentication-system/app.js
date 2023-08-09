const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const uuid = require('uuid');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'your-secret-key', // Change this to a secure random string in production
  resave: false,
  saveUninitialized: false,
}));

// In-memory array to store user data (for demonstration purposes only)
const users = [];

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the simple authentication system!');
});

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  const userExists = users.find((user) => user.username === username);

  if (userExists) {
    return res.send('Username already exists. Please choose a different username.');
  }

  const newUser = {
    id: uuid.v4(),
    username,
    password,
  };

  users.push(newUser);
  req.session.userId = newUser.id;
  res.send('Registration successful!');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username === username && user.password === password);

  if (!user) {
    return res.send('Invalid username or password.');
  }

  req.session.userId = user.id;
  res.send('Login successful!');
});

app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
    }
    res.send('Logged out successfully!');
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
