const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

require('dotenv').config();

//Added Json Body-parser
app.use(bodyParser.json());

//Import Routes
const accountRoute = require('./routes/accounts');
app.use('/accounts', accountRoute)

//Initial route
app.get('/', (req, res) => {
    res.send('Welcome to the banking app');
});

// Connect to database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('once', () => {
    console.log('MongoDB database connection established successfully.');
});

//Start listening
app.listen(8080, () => {
    console.log('Server listening on 8080');
});
