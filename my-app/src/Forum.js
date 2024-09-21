import React, { useState } from "react";

// forum component
const Forum = () => {
  // state for storing forum posts
  const [posts, setPosts] = useState([]);
  
  // state for new question form
  const [newQuestion, setNewQuestion] = useState("");

  // Add a reply to a specific post
  const handleAddReply = (postId, reply) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, replies: [...post.replies, reply] } : post
      )
    );
  };

  return (
    <div>
      <h1>Forum</h1>
      
      {/* Form for posting new questions */}
      <form onSubmit={handleNewQuestion}>
        <input
          type="text"
          placeholder="Ask a question..."
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          required
        />
        <button type="submit">Post Question</button>
      </form>
    </div>
  );
};

export default Forum;
