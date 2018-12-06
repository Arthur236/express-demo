/*
 * Our app entry file
 *
 */

// Import express module
const express = require('express');
const path = require('path');

// Initialize expree module
const app = express();

// Specify the port
const port = process.env.PORT || 9111;


// Define our routes
app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1>');
});

app.get('/api', (req, res) => {
  res.json({
    name: 'Express',
  });
});


// Define routes with params
app.get('/posts/:id', (req, res) => {
  res.send(`
    <h2>Post Data</h2>
    <p>Here is post ${req.params.id}</p>
  `);
});

app.get('/posts/:id/category/:category_id', (req, res) => {
  res.send(`
    <h2>Post Data</h2>
    <p>Here is post ${req.params.id}</p>
    <p>Belonging to category ${req.params.category_id}</p>
  `);
});


// Using middleware in our routes
app.use((req, res, next) => {
  console.log('Middleware');
  next();
});


// Applying middleware to a specific path
app.use('/middleware', (req, res, next) => {
  console.log('Middleware');
  next();
});


// Handling static files
app.use(express.static(path.join(__dirname, '/public')));

app.get('/static', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});


// Listen for requests on our specified port
app.listen(port);

console.log('\x1b[36m%s\x1b[0m', 'Server is running...');
