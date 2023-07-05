// server.js

const express = require('express');
const axios = require('axios');
const ejs = require('ejs');
const request = require('request');
const mongoose = require('mongoose');
const User = require('./models/user.js'); // User model

const app = express();
const port = 3005;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.set('view engine', 'ejs'); // Set EJS as the template engine
app.use(express.static('public')); // Serve static files from the 'public' folder

app.get('/', (req, res) => {
  var query = 'italian wedding soup';
  request.get({
    url: 'https://api.api-ninjas.com/v1/recipe?query=' + query,
    headers: {
      'X-Api-Key': '6dST35vXHveYRdWD8W1tdQ==CnxLz7vGBU3nWd80'
    },
  }, function (error, response, body) {
    if (error) return console.error('Request failed:', error);
    else if (response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
    else {
      const recipes = JSON.parse(body); // Parse the API response into an array of recipes
      res.render('index', { recipes: recipes });
    }
  });
});

