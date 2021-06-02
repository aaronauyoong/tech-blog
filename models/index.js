const User = require('./User');
const Post = require('./Post');
const Comment = require ('./Comment');

// User has many Posts
User.hasMany(Post, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
})

// User has many Comments
User.hasMany(Comment, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
})

// Post belongs to one User
Post.belongsTo(User, {
    foreignKey: "user_id"
})

// Post has many Comments
Post.hasMany(Comment, {
    foreignKey: "post_id",
    onDelete: "CASCADE"
})

// Comments belong to one User
Comment.belongsTo(User, {
    foreignKey: "user_id"
})

// Comments belongs to one Post
Comment.belongsTo(Post, {
    foreignKey: "post_id"
})

module.exports = { User, Post, Comment }
