const express = require('express');
// const errorHandler = require('./lib/errorHandler');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');
const { dbUri, port } = require('./config/environment');
mongoose.Promise = require('bluebird');
mongoose.connect(dbUri);
const Router = require('./config/routes');

app.use(bodyParser.json());

app.use(morgan('dev'));
app.use(express.static(`${__dirname}/public`));
app.use('/api', Router);
app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

// app.use(errorHandler);

app.listen(port, () => console.log(`express is listening to ${port}`));
