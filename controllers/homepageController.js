// These are controllers for the homepage

const { Post } = require("../models");

module.exports = {
	getAllPosts() {
		return Post.findAll({
			attributes: ["id", "title", "content", "created_at"],
			include: [
				{
					model: Comment,
					attributes: [
						"id",
						"comment_text",
						"post_id",
						"user_id",
						"created_at",
					],
					include: {
						model: User,
						attributes: ["username"],
					},
				},
				{
					model: User,
					attributes: ["username"],
				},
			],
		})
			.then((dbPostData) => {
				// .get method creates serialized array
				const posts = dbPostData.map((post) => post.get({ plain: true }));

				res.render("homepage", {
					posts,
					loggedIn: req.session.loggedIn,
				});
			})
			.catch((err) => {
				console.log(err);
				res.status(500).json(err);
			});
	},

	getPostById() {
		Post.findOne({
			where: {
				id: req.params.id,
			},
			attributes: ["id", "title", "content", "created_at"],
			include: [
				{
					model: Comment,
					attributes: [
						"id",
						"comment_text",
						"post_id",
						"user_id",
						"created_at",
					],
					include: {
						model: User,
						attributes: ["username"],
					},
				},
				{
					model: User,
					attributes: ["username"],
				},
			],
		})
			.then((dbPostData) => {
				if (!dbPostData) {
					res.status(404).json({ message: "No post found with this id" });
					return;
				}

				// serialize the data and pass to template
				const post = dbPostData.get({ plain: true });

				res.render("single-post", {
					post,
					loggedIn: req.session.loggedIn,
				});
			})
			.catch((err) => {
				console.log(err);
				res.status(500).json(err);
			});
	},

	// userLogin() {},

	// userSignUp() {
	// 	// return (req, res) => {
	// 	// res.render('signup')
	// },
};
