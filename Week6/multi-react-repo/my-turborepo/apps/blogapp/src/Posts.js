import React from "react";
import Post from "./Post";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        const posts = json.map(
          (post) => new Post(post.id, post.title, post.body)
        );
        this.setState({ posts: posts });
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
        {this.state.posts.map((post) => (
          <div
            key={post.id}
            style={{
              borderBottom: "1px solid #ccc",
              marginBottom: "20px",
              paddingBottom: "20px",
            }}
          >
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }

  componentDidCatch(error, info) {
    alert(`An error occurred in Posts component: ${error.message}`);
    console.error("Caught error:", error, info);
  }
}

export default Posts;
