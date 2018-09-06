const express = require('express');
// const errorHandler = require('./lib/errorHandler');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');
const { dbUri } = require('./config/environment');
mongoose.Promise = require('bluebird');
mongoose.connect(dbUri);
const Router = require('./config/routes');

app.use(bodyParser.json());

app.use(morgan('dev'));
app.use('/api', Router);


// app.use(errorHandler);

app.listen(4000, () => console.log('express is listening to 4000'));
