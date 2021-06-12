const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { Comment } = require("../../models");

// get all comments
router.get("/", (req, res) => {
	Comment.findAll({
		attributes: ["id", "comment_content", "user_id", "post_id", "date_created"],
		order: [["date_created", "DESC"]],
	})
		.then((dbPostData) => res.json(dbPostData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// add new comment
router.post("/", withAuth, (req, res) => {
	console.log(req.session);
	if (req.session.loggedIn) {
		Comment.create({
			comment_text: req.body.comment_text,
			post_id: req.body.post_id,
			user_id: req.session.user_id,
		})
			.then((dbCommentData) => res.json(dbCommentData))
			.catch((err) => {
				console.log(err);
				res.status(400).json(err);
			});
	}
});

// delete comment
router.delete("/:id", withAuth, (req, res) => {
	Comment.destroy({
		where: {
			id: req.params.id,
		},
	})
		.then((dbPostData) => {
			if (!dbPostData) {
				res.status(404).json({ message: "No post found with this ID." });
				return;
			}

			res.json(dbPostData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;
