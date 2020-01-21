const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const indexRoute = require('./routes/routes.js');

// Instantiate express
const app = express();

// Set our port
const port = process.env.PORT || 5000;

var corsOptions = {
  origin: 'https://igorila.herokuapp.com',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

// Configure app tu use bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Register our routes in api
app.get('/', function(req, res) {
  res.redirect('https://igorila.herokuapp.com');
});
app.use('/api', indexRoute);

// Start our server
app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
