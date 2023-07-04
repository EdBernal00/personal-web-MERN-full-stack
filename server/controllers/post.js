const Post = require('../models/post');
const image = require('../utils/image');

function createPost(req, res) {
    const post = new Post(req.body);
    post.createdAt = new Date();

    const imagePath = image.getFilePath(req.files.miniature);
    post.miniature = imagePath;

    post.save((error, postStorage) => {
        if (error) {
            res.status(400).send({ msg: 'Error al crear el post.' });
        } else {
            res.status(200).send(postStorage);
        }
    });
}

function getPosts(req, res) {
    const { page = 1, limit = 10 } = req.query;
    const options = {
        page: parseInt(page),
        limit: parseInt(limit),
        sort: { createdAt: 'desc' },
    }

    Post.paginate({}, options, (error, posts) => {
        if (error) {
            res.status(400).send({ msg: 'Error al obtener los posts.' });
        } else {
            res.status(200).send(posts);
        }
    });
}

module.exports = {
    createPost,
    getPosts,
};