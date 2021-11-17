const express = require('express');
const app = express();
const admin = require('./routes/user');
const cors = require('cors');
require('./config');
require('dotenv').config();

app.use(express.json());

app.use(cors());

app.use('/api/auth', admin);

app.listen(process.env.SERVER_PORT || 8000, () => {
    console.log('server is online!');
})