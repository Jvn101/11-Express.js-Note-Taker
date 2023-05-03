const express = require('express');

// Import our modular routers 
const apiRoutes = require('./notes');

const app = express();

app.use('/notes', apiRoutes);

module.exports = app;


