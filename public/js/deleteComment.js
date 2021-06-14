// Delete comment frontend

const deleteComment = async (event) => {
	event.preventDefault();
	console.log("The delete button was clicked");

    const commentID = window.location.pathname.split("/").pop();

	const response = await fetch(`/api/comments/${commentID}`, {
		method: "DELETE",
	});

	if (response.ok) {
		window.location.href = "/";
	} else {
		alert("Failed to delete comment!");
	}
};

// Listeners
document.querySelector("#delete-comment-btn").addEventListener("click", deleteComment);