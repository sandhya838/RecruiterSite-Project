const constants = require('./config/constants');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors')
var fs = require('fs');
var https = require('https');
const bodyParser = require('body-parser');
const routes = require('./routers/routes');
const app = express()
app.use('/static', express.static('public'));
app.use('/', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Content-Type: application/json");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With,x-access-token");
  next();
});
app.use(express.json());
app.use(express.urlencoded({
  limit: '5mb', extended: true
}));


mongoose.connect(constants.URL, constants.OPTIONS).then(
  () => { console.log('Database connection is ready'); },
  err => {
    console.error('error', err);
    throw err;
  }
);

app.get('/', (req, res) => {
  res.json({ "message": "Welcome to job portal application." });
});
routes(app); //register the route
const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
};
// https.createServer({
//   options
// }, app)

app.listen(constants.PORT, constants.HOSTNAME, () => {
  console.log(`Server running at http://${constants.HOSTNAME}:${constants.PORT}/`);
});

