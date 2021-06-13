// front end for new comment

const createNewComment = async(event) => {
    event.preventDefault();

    const comment = document.querySelector("#new-comment-content");

}

// Listener
document
    .querySelector('#new-comment-form')
    .addEventListener('click', createNewComment);