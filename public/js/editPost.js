// Edit Post Frontend Functions (Update and Delete)

// Post ID
const postId = window.location.pathname.split("/").pop();

// Update Post frontend
const editPost = async (event) => {
	event.preventDefault();
	console.log("The edit button was clicked");

	const title = document.querySelector("#new-post-title").value.trim();
	const content = document.querySelector("#new-post-content").value.trim();

	if (title && content) {
		const response = await fetch(`/api/posts/${postID}`, {
			method: "PUT",
			body: JSON.stringify({ title, content }),
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (response.ok) {
			window.location.href = "/dashboard";
		} else {
			alert("Failed to update post!");
		}
	}
};

// Delete post frontend
const deletePost = async (event) => {
	event.preventDefault();
	console.log("The delete button was clicked");

	const response = await fetch(`/api/posts/${postID}`, {
		method: "DELETE",
	});

	if (response.ok) {
		window.location.href = "/dashboard";
	} else {
		alert("Failed to delete blog!");
	}
};

// Listeners
document.querySelector("#edit-post-btn").addEventListener("click", editPost);
document.querySelector("#delete-post-btn").addEventListener("click", deletePost);
