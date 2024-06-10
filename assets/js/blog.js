document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('postsContainer');
    const backButton = document.getElementById('backButton');
   

    backButton.addEventListener('click', function() {
        window.location.href = 'index.html';
    });


    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    if (posts.length > 0) {
        posts.forEach(function(post) {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <p>By: ${post.username}</p>
            `;
            postsContainer.appendChild(postElement);
        });
    } else {
        const noPostsMessage = document.createElement('p');
        noPostsMessage.textContent = 'No posts yet.';
        postsContainer.appendChild(noPostsMessage);
    }
});