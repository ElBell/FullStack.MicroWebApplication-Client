// server.js
const express = require('express');
const proxy = require('http-proxy-middleware');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
app.use('/server', proxy({ target: 'https://whatthethek-server.herokuapp.com', changeOrigin: true}));
app.use('/*', express.static(__dirname + '/dist/index.html'));
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);
