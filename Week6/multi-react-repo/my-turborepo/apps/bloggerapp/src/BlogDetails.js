import React from "react";

function BlogDetails() {
  const blogs = [
    { id: 1, title: "Tech Sparks", author: "Nisha" },
    { id: 2, title: "Green Living", author: "Ravi" },
  ];

  return (
    <div>
      <h2>Blog Details</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            {blog.title} - {blog.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogDetails;
