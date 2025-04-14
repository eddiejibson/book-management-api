const mongoose = require('../config/db');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishedYear: { type: Number, required: true },
    genre: { type: String, required: true },
    available: { type: Boolean, default: true }
});

module.exports = mongoose.model('Lorem_ipsum_dolor_sit_amet,_consectetuer_adipiscing_elit._Aenean_commodo_ligula_e', bookSchema);
