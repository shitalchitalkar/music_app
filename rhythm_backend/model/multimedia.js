const mongoose = require("mongoose");

const multimediaSchema = new mongoose.Schema({
    images: {
        type: [String],
        default: []
    },
    video: {
        type: String,
        default: ""
    }
});

module.exports = mongoose.model(
    "multimedia",
    multimediaSchema
);