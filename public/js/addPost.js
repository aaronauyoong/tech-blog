// Create new post (front-end)
const createNewPost = async(event) => {
    event.preventDefault();

    const title = document.querySelector("#new-post-title");
    const content = document.querySelector("#new-post-content")

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

// Listener
document
    .querySelector('#new-post-form')
    .addEventListener('click', createNewPost);