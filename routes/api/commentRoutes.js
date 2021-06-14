const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { Comment, User, Post } = require("../../models");

// add new comment
router.post("/", withAuth, async (req, res) => {
	try {
		const newComment = await Comment.create({
			comment_content: req.body.comment_content,
			post_id: req.body.post_id,
			user_id: req.session.user_id,
		})
		res.status(200).json(newComment);
	} catch(err) {
		res.status(400).json(err);
	}
});

// delete comment
router.delete("/delete", withAuth, async (req, res) => {
	await Comment.destroy({
		where: {
			id: req.params.id,
			user_id: req.session.user_id,
		},
	})
		.then((commentData) => {
			if (!commentData) {
				res.status(404).json({ message: "No comment found" });
				return;
			}
			res.json(commentData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;
