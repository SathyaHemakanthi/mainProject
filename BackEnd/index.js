const express=require('express');
const cors = require('cors');
const app = express();
// app.use(cors());

app.use(express.json());

const postaddmessuer = require('./routes/addmessuer');
app.use('/addmessuer', postaddmessuer);
const postcreateacc = require('./routes/create_acc');
app.use('/create_acc', postcreateacc);
const postsearch = require('./routes/search');
app.use('/search', postsearch);
const postshowchiled = require('./routes/showbaby');
app.use('/showbaby', postshowchiled);

app.listen(3001 , ()=>{
    console.log("server running in 3001")
})