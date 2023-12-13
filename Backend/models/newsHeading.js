const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const newsHeadSchema = new Schema({
    title: String,
    image: String,
    content: String,
});

module.exports = mongoose.model('newshead', newsHeadSchema);
