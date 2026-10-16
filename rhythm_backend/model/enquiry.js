const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        trim: true
    },

    phone_no: {
        type: String,
        required: true,
        trim: true
    },

    enquiry_type: {
        type: String,
        required: true,
        trim: true
    },

    tell_us: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model("Enquiry", enquirySchema);