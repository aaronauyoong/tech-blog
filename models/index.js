const User = require('./User');
const Post = require('./Post');
const Comment = require ('./Comment');

// User has many Posts
User.hasMany(Post, {
    foreignKey: ''
})

// Post belongs to one User
Post.belongsTo(User, {
    foreignKey: ''
})

// User has many Comments
User.hasMany(Comment, {
    foreignKey: ''
})

// Comments belong to one User
Comment.belongsTo(User, {
    foreignKey: ''
})

// Comments belongs to one Post
Comment.belongsTo(Post, {
    foreignKey: ''
})