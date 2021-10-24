const constants = require('./config/constants');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors')
var fs = require('fs');
var https = require('https');
const bodyParser = require('body-parser');
const routes = require('./routers/routes');
const app = express()

app.use(express.json());
app.use(express.urlencoded({
  limit: '50000gb',extended: true
}));

app.use('/static', express.static('public'));
app.use(cors())

mongoose.connect(constants.URL, constants.OPTIONS).then(
  () => { console.log('Database connection is ready'); },
  err => {
    console.log('error', err);
    throw err;
  }
);

app.get('/', (req, res) => {
  console.log('req', req);
  res.json({ "message": "Welcome to rent management application. Manage your all tanents and amenities." });
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

