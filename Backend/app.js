const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');
const path = require('path')

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static('uploads/'));

// Routes

const developmentActivitiesRoutes = require('./routes/developmentActivitiesRoutes');
const newsRoutes = require('./routes/newsRoutes');
const consultationRoutes = require('./routes/consultationRoutes');
const signupRoutes = require('./routes/signupRoutes');

app.get('/', (req, res) => {
  return res.json('From backend side');
});


app.use('/', developmentActivitiesRoutes);
app.use('/', newsRoutes);
app.use('/', consultationRoutes);
app.use('/', signupRoutes);

app.listen(8081, () => {
  console.log('Listening on port 8081');
});
