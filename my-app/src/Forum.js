import React, { useState } from "react";

// forum component
const Forum = () => {
  // state for storing forum posts
  const [posts, setPosts] = useState([]);
  
  // state for new question form
  const [newQuestion, setNewQuestion] = useState("");

  // function to handle submitting a new question
  const handleNewQuestion = (e) => {
    e.preventDefault();
    if (newQuestion.trim()) {
      setPosts([...posts, { id: Date.now(), question: newQuestion, replies: [] }]);
      setNewQuestion("");
    }
  };

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

      {/* Displaying posts */}
      <div className="forum-posts">
        {posts.length === 0 ? (
          <p>No questions yet. Be the first to ask!</p>
        ) : (
          posts.map((post) => (
            <Post key={post.id} post={post} handleAddReply={handleAddReply} />
          ))
        )}
      </div>
    </div>
  );
};

// Individual post component
const Post = ({ post, handleAddReply }) => {
  const [reply, setReply] = useState("");

  const handleReplySubmit = (e) => {
    e.preventDefault();
    if (reply.trim()) {
      handleAddReply(post.id, reply);
      setReply("");
    }
  };

  return (
    <div className="forum-post">
      <h3>{post.question}</h3>
      
      {/* Reply form */}
      <form onSubmit={handleReplySubmit}>
        <input
          type="text"
          placeholder="Add a reply or something you found interesting..."
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          required
        />
        <button type="submit">Reply</button>
      </form>

      {/* Displaying replies */}
      <div className="replies">
        {post.replies.length > 0 ? (
          post.replies.map((reply, index) => (
            <p key={index}>&gt; {reply}</p>
          ))
        ) : (
          <p>No replies yet. Be the first to reply!</p>
        )}
      </div> 
    </div>
  );
};

export default Forum;

