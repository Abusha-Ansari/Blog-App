/src
  /components
    - Navbar.js
    - BlogList.js
    - BlogForm.js
    - BlogDetails.js
    - BlogEditForm.js
  /pages
    - HomePage.js
    - CreateBlogPage.js
    - EditBlogPage.js
    - BlogDetailsPage.js
  /utils
    - api.js (for handling API calls)
  - App.js
  - index.js




export const fetchBlogs = () => { /* Fetch all blogs */ };
export const fetchBlogById = (id) => { /* Fetch single blog */ };
export const createBlog = (newBlog) => { /* Create a new blog */ };
export const updateBlog = (id, updatedBlog) => { /* Update an existing blog */ };
export const deleteBlog = (id) => { /* Delete blog by id */ };


Navbar items:
            Logo
            Home / Create Blog / Edit Blog / About
            [LOGIN / SIGNUP]

