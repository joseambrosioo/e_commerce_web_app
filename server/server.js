const express = require('express')
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

//create a database connection or
//create a separate file for this and then import/use that file here

mongoose.connect('mongodb+srv://jose-ambrosio:<KUdtFQDBm37sDUwN>@jose-ambrosio.ke25r.mongodb.net/').then(() => console.log('MongoDB connected')).catch(error => console.log);

const app = express()
const PORT = process.env.PORT || 5000;

app.use(
    cors({})
)