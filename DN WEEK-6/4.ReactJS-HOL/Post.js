// src/Post.js
import React from "react";

class Post extends React.Component {
  render() {
    const { title, body } = this.props;
    return (
      <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    );
  }
}

export default Post;
