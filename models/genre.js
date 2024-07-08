const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
    name : {type : String, require : true,minLength : 3, maxLength : 100}
});

genreSchema.virtual("url").get(function () {
    return '/catalog/genre/${this.id}';
});

module.exports = mongoose.model("Genre",genreSchema);