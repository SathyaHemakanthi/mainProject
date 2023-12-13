const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const fs = require('fs');

app.use(cors());
const port = process.env.PORT || 6000;
mongoose.connect(process.env.DATABASE).then(() => {
  console.log('Connected to Database');
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// New
const routing = require('./routes/news'); // Move this line above its usage
app.use('/uploads', express.static('uploads'));
app.use('/news', routing);
const newsHeadRout = require('./routes/newsHead');
app.use('/newshead', newsHeadRout);

app.listen(port, () => {
  console.log("Igrowth API Started On Port " + port);
});


