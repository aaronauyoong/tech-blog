// Edit Post frontend
const editPost = async (event) => {
    event.preventDefault();
    console.log("The edit button was clicked")


}

// Listener
document
	.querySelector("#edit-post-btn")
	.addEventListener("click", editPost);
