const Post = require("../models/post");
const image = require("../utils/image");

function createPost(req, res) {
  const post = new Post(req.body);
  post.createdAt = new Date();

  const imagePath = image.getFilePath(req.files.miniature);
  post.miniature = imagePath;

  post.save((error, postStorage) => {
    if (error) {
      res.status(400).send({ msg: "Error al crear el post." });
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
    sort: { createdAt: "desc" },
  };

  Post.paginate({}, options, (error, posts) => {
    if (error) {
      res.status(400).send({ msg: "Error al obtener los posts." });
    } else {
      res.status(200).send(posts);
    }
  });
}

function updatePost(req, res) {
  const { id } = req.params;
  const postData = req.body;

  if (req.files.miniature) {
    const imagePath = image.getFilePath(req.files.miniature);
    postData.miniature = imagePath;
  }

  Post.findByIdAndUpdate({ _id: id }, postData, (error) => {
    if (error) {
      res.status(400).send({ msg: "Error al actualizar el post." });
    } else {
      res.status(200).send({ msg: "Actualizado correctamente" });
    }
  });
}

function deletePost(req, res) {
  const { id } = req.params;

  Post.findByIdAndDelete({ _id: id }, (error) => {
    if (error) {
      res.status(400).send({ msg: "Error al eliminar el post." });
    } else {
      res.status(200).send({ msg: "Post eliminado correctamente" });
    }
  });
}

function getPost(req, res) {
  const { path } = req.params;

  Post.findOne({ path }, (error, post) => {
    if (error) {
      res.status(500).send({ msg: "Error del servidor." });
    } else if (!post) {
        res.status(404).send({ msg: "Post no encontrado." });
    } else {
      res.status(200).send(post);
    }
  });
}

module.exports = {
  createPost,
  getPosts,
  updatePost,
  deletePost,
  getPost,
};
