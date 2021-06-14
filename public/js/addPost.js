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
	console.log("create new post was clicked");

	const title = document.querySelector("#new-post-title").value.trim();
	const content = document.querySelector("#new-post-content").value.trim();

	if (!title || !content) {
        alert("Please input post title and post content.")
        return;
    }

	if (title && content) {
		console.log("YO THIS IS TITLE", title);
		console.log("YO THIS IS DA CONTENT", content);

		const response = await fetch("/api/posts", {
			method: "POST",
			body: JSON.stringify({ title, content }),
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (response.ok) {
			createPostCard.classList.add("hide");
    		addNewPostBtn.classList.remove("hide");
			window.location.href = "/dashboard";
		} else {
			createPostCard.classList.add("hide");
    		addNewPostBtn.classList.remove("hide");
			alert("Failed to add a new blog post.");
		}
	}
};

// Listeners
document.querySelector("#add-post-btn").addEventListener("click", createNewPost);
addNewPostBtn.addEventListener("click", showForm);
