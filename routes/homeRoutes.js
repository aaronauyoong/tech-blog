const router = require("express").Router();
const { Post, User, Comment } = require("../models");

// const homepageController = require("../controllers/homepageController");
const withAuth = require("../utils/auth");

// get all posts for homepage dashboard
router.get("/", async (req, res) => {
	try {
		const postData = await Post.findAll({
			include: [
				{
					model: User,
					attributes: ["username"],
				},
			],
		});
		const posts = postData.map((post) => post.get({ plain: true }));

		res.render("homepage", {
			posts,
			logged_in: req.session.logged_in,
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

// find post by id
// router.get("/post/:id", homepageController.getPostById);

// login
// router.get("/login", (req, res) => {
// 	// If the user is already logged in, redirect the request to another route
// 	if (req.session.logged_in) {
// 		res.redirect("/profile");
// 		return;
// 	}

// 	res.render("login");
// });

// sign up
// router.get("/signup", (req, res) => {
// 	res.render("signup");
// });

module.exports = router;
