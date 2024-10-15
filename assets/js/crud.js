// DOM Elements
const blogForm = document.getElementById('blogForm');
const blogList = document.getElementById('blogList');

// Load Blogs from localStorage
document.addEventListener('DOMContentLoaded', loadBlogs);

// Handle Form Submit to Add Blog
blogForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (title && content) {
        const newBlog = { title, content };

        // Save Blog to localStorage
        addBlogToLocalStorage(newBlog);

        // Clear Form
        blogForm.reset();

        // Display Blog in List
        displayBlog(newBlog);
    }
});

// Add Blog to localStorage
function addBlogToLocalStorage(blog) {
    let blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    blogs.push(blog);
    localStorage.setItem('blogs', JSON.stringify(blogs));
}

// Load Blogs from localStorage and Display
function loadBlogs() {
    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    blogs.forEach(blog => displayBlog(blog));
}

// Display Blog in the DOM
function displayBlog(blog) {
    const blogItem = document.createElement('div');
    blogItem.classList.add('blog-post');

    blogItem.innerHTML = `
        <h3>${blog.title}</h3>
        <p>${blog.content}</p>
        <button onclick="deleteBlog('${blog.title}')">Delete</button>
    `;

    blogList.appendChild(blogItem);
}

// Delete Blog from localStorage and UI
function deleteBlog(title) {
    let blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    blogs = blogs.filter(blog => blog.title !== title);
    localStorage.setItem('blogs', JSON.stringify(blogs));

    // Refresh Blog List
    blogList.innerHTML = '';
    loadBlogs();
}
