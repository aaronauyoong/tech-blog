// These are routes for dashboard - showing user's posts
const router = require("express").Router();
const { User, Comment, Post } = require("../models");

// GET all posts from user
router.get("/", async (req, res) => {
    if (!req.session.loggedIn) {
        return res.redirect('/login')
    } else {
        res.render('addPost', {
            logged_in: true
        });
    }
})

// Create new post
router.get("/new", async (req, res) => {
    if (!req.session.loggedIn) {
        return res.redirect('/login')
    }

})

// Update existing post
router.post("/edit/:id", async (req, res) => {
    if (!req.session.loggedIn) {
        return res.redirect('/login')
    }

})

// Delete existing post
router.delete("/delete", async (req, res) => {
    if (!req.session.loggedIn) {
        return res.redirect('/login')
    }

})

module.exports = router;
