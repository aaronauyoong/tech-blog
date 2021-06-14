// Edit Post Frontend Functions (Update and Delete)

// Post ID
const postID = window.location.pathname.split("/").pop();

// Update Post frontend
const updatePost = async (event) => {
	event.preventDefault();
	console.log("The update button was clicked");

	const title = document.querySelector("#update-post-title").value.trim();
	const content = document.querySelector("#update-post-content").value.trim();

    console.log("YO THIS IS TITLE", title);
	console.log("YO THIS IS DA CONTENT", content);

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
document.querySelector("#update-post-btn").addEventListener("click", updatePost);
document.querySelector("#delete-post-btn").addEventListener("click", deletePost);
