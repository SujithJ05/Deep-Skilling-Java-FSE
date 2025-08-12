import React, { useState } from "react";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {
  const [view, setView] = useState("books"); // default view

  // Method 1: if/else
  const renderContentIfElse = () => {
    if (view === "books") return <BookDetails />;
    else if (view === "blogs") return <BlogDetails />;
    else return <CourseDetails />;
  };

  // Method 2: ternary operator
  const renderContentTernary =
    view === "books" ? (
      <BookDetails />
    ) : view === "blogs" ? (
      <BlogDetails />
    ) : (
      <CourseDetails />
    );

  // Method 3: element variables
  let content;
  if (view === "books") content = <BookDetails />;
  else if (view === "blogs") content = <BlogDetails />;
  else content = <CourseDetails />;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Blogger App</h1>
      <div>
        <button onClick={() => setView("books")}>Books</button>
        <button onClick={() => setView("blogs")}>Blogs</button>
        <button onClick={() => setView("courses")}>Courses</button>
      </div>

      <hr />
      <h3>Method 1: If/Else Function</h3>
      {renderContentIfElse()}

      <hr />
      <h3>Method 2: Ternary Operator</h3>
      {renderContentTernary}

      <hr />
      <h3>Method 3: Element Variables</h3>
      {content}
    </div>
  );
}

export default App;
