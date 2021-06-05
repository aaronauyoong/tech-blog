// This is the controller file for creating, updating and deleting posts

const { Post } = require("../models")

module.exports = {

    createPost() {

    },

    updatePost() {

    },

    deletePost() {
        return Post.findAll()
    }
}