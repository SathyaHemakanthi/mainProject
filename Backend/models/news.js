const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const newsSchema = new Schema({
    title: String,
    image: String,
    content: String,
});

module.exports = mongoose.model('news', newsSchema);
