// front end for new comment

const createNewComment = async(event) => {
    event.preventDefault();

    const comment = document.querySelector("#new-comment-content").value.trim();
    const postID = window.location.pathname.split("/").pop();

    console.log("THIS IS THE COMMENT--->", comment);
    console.log("THIS IS THE POSTID---->", postID);
    
    if (comment) {
        const response = await fetch ("/api/comments", {
            method: "POST",
            body: JSON.stringify({ "post_id": postID, "comment_content": comment }),
            headers: {
                "Content-Type": "application/json",
            }
        });

        if (response.ok) {
            window.location.reload();
        } else {
            alert("Failed to add new comment!");
        }
    }
}

// Listener
document
    .querySelector('#add-comment-btn')
    .addEventListener('click', createNewComment);