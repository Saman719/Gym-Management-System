const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const users = require('./users');
const courses = require('./courses');
const registeredcourses = require('./registeredcourses');
const messages = require('./messages');
const User = require('./Model/users-model');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/users', users);
app.use('/courses', courses);
app.use('/registeredcourses', registeredcourses);
app.use('/messages', messages);

app.listen(3000, () => console.log('Server listening on port 3000'));
