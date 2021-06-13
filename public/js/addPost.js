// Create new post (front-end)

const addNewPostBtn = document.querySelector("#create-post-btn");
const createPostCard = document.querySelector('#create-post-card');


const showForm = async (event) => {
	event.preventDefault();
    createPostCard.classList.remove('hide');
    addNewPostBtn.classList.add('hide');
};

const createNewPost = async (event) => {
	event.preventDefault();

	const title = document.querySelector("#new-post-title");
	const content = document.querySelector("#new-post-content");

	if (title && content) {
		const response = await fetch("/api/posts", {
			method: "POST",
			body: JSON.stringify({ title, content }),
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (response.ok) {
			document.location.replace("/dashboard");
		} else {
			alert("Failed to add a new blog post.");
		}
	}
};

// Listeners
document.querySelector("#new-post-form").addEventListener("click", createNewPost);
addNewPostBtn.addEventListener("click", showForm);
