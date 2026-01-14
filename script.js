document.getElementById('submit').addEventListener('click', function () {
  const input = document.getElementById('input').value.trim();
  
  if (input !== '') {
    const post = document.createElement('div');
    post.classList.add('post');
    post.textContent = input;
    
    const feed = document.getElementById('feed');
    feed.prepend(post); // Adds the new post at the top of the feed
    
    document.getElementById('input').value = ''; // Clear the textarea after posting
    
    // Save to localStorage to keep posts even after page refresh
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.unshift(input); // Add new post to the top
    localStorage.setItem('posts', JSON.stringify(posts)); // Save to localStorage
  }
});

// Load posts from localStorage when the page loads
window.onload = function () {
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  const feed = document.getElementById('feed');
  posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.textContent = post;
    feed.appendChild(postElement);
  });
};
