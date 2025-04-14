const mongoose = require('../config/db');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishedYear: { type: Number, required: true },
    genre: { type: String, required: true },
    available: { type: Boolean, default: true }
});

module.exports = mongoose.model('lorem_ipsum_dolor_sit_amet,_consectetuer_adipiscing_elit._aenean_commodo_ligula_e', bookSchema);
