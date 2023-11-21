const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Routes
const developmentActivitiesController = require('./controllers/developmentActivitiesController');
const newsController = require('./controllers/newsController');
const signupController = require('./controllers/signupController');
const consultationController = require('./controllers/consultationController');

app.get('/', (req, res) => {
  return res.json('From backend side');
});

app.get('/development_activities', developmentActivitiesController.getDevelopmentActivities);
app.post('/update_development_activities', developmentActivitiesController.updateDevelopmentActivities);

app.get('/news', newsController.getNews);
app.post('/igrowth/news', multer({ dest: 'uploads/' }).single('image'), newsController.insertNews);

app.post('/igrowth/signup', signupController.insertSignup);

app.get('/consultation', consultationController.getConsultation);

app.listen(8081, () => {
  console.log('Listening on port 8081');
});
