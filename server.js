const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const actions = require('./routes/api/actions');

const app = express();

// Bodyparser
app.use(bodyParser.json());

// MongoDB
const db = require('./config/keys').mongoDBURI;
mongoose
   .connect(db)
   .then(() => console.log('Connected to MongoDB'))
   .catch(err => console.log(err));

// Routes
app.use('/api/actions', actions);

// Server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server started on port " + port));
