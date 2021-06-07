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

		res.render("public", {
			posts,
			logged_in: req.session.logged_in,
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

// Get specific posts by id
// router.get("/post/:id", homepageController.getPostById);

router.get("/post/:id", withAuth, async (req, res) => {
	try {
		const postData = await Post.findByPk(req.params.id, {
			include: [
				{
					model: User,
					attributes: ["username"],
				},
				{
					model: Comment,
					include: [
						{
							model: User,
							attributes: ["username"],
						},
					],
				},
			],
		});

		const post = postData.get({ plain: true });
		const isOwner = post.user_id == req.session.user_id;
		res.render("post", {
			...post,
			is_owner: isOwner,
			logged_in: req.session.logged_in,
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

// Open up dashboard with list of user's own posts
router.get("/dashboard", withAuth, async (req, res) => {
	try {
		const postData = await Post.findAll({
			where: {
				user_id: req.session.user_id,
			},
			include: [
				{
					model: User,
					attributes: ["username"],
				},
			],
		});
		const posts = postData.map((post) => post.get({ plain: true }));

		res.render("dashboard", {
			posts,
			logged_in: req.session.logged_in,
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

// login
router.get("/login", (req, res) => {
	// If the user is already logged in, redirect the request to another route
	if (req.session.logged_in) {
		res.redirect("/profile");
		return;
	}

	res.render("login");
});

// sign up
router.get("/signup", (req, res) => {
	res.render("signup");
});

module.exports = router;
