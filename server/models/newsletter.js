const mongoose = require('mongoose');

const NewsletterSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
    }
});

module.exports = mongoose.model("Newsletter", NewsletterSchema);