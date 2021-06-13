// Delete post frontend
const deletePost = async (event) => {
    event.preventDefault();
    console.log("The delete button was clicked");


}

// Listener
document
	.querySelector("#delete-post-btn")
	.addEventListener("click", deletePost);