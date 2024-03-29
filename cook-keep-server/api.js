const serverless = require('serverless-http')
const express = require('express');
const recipeRoutes = require('./routes/recipe.js');
const userRoutes = require('./routes/user.js');

var bodyParser = require('body-parser');
require("dotenv").config();
const cors = require("cors");
const connection = require("./db.js");

//db connection
connection();

const api = express();

router.get('/hello', (req, res) => res.send('Hello World!'));

api.use('/api/', recipeRoutes);
api.use('/api/', userRoutes);

export const handler = serverless(api);
