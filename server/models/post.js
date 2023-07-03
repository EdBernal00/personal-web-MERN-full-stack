const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const PostSchema = new mongoose.Schema({
    title: String,
    miniature: String,
    content: String,
    path: {
        type: String,
        unique: true,
    },
    createdAt: Date,
});

PostSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Post", PostSchema);