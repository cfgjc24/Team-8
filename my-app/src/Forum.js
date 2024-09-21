import React, { useState } from "react";
import './Forum.css'; 

// forum component
const Forum = () => {
  const [posts, setPosts] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [newCategory, setNewCategory] = useState("Lesson 1");
  const [selectedCategory, setSelectedCategory] = useState(""); // State to track the selected category

  // Categories: Lesson 1 to 7 and Capstone
  const categories = [
    "Lesson 1",
    "Lesson 2",
    "Lesson 3",
    "Lesson 4",
    "Lesson 5",
    "Lesson 6",
    "Lesson 7",
    "Capstone"
  ];

  // Function to handle submitting a new question
  const handleNewQuestion = (e) => {
    e.preventDefault();
    if (newQuestion.trim()) {
      const newPost = {
        id: Date.now(),
        question: newQuestion,
        category: newCategory,
        replies: [],
        date: new Date().toLocaleDateString(),  // Store the current date as a string
      };
      setPosts([...posts, newPost]);
      setNewQuestion("");
      setNewCategory("Lesson 1"); // Reset to default
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

  // Toggle displaying posts when a lesson is clicked
  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(""); // If already selected, hide the posts
    } else {
      setSelectedCategory(category); // Show posts for the selected category
    }
  };

  return (
    <div className="forum-container">
      <h1 className="forum-title">Forum</h1>

      {/* Form for posting new questions */}
      <form className="forum-form" onSubmit={handleNewQuestion}>
        <textarea
          placeholder="Ask a question..."
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          required
          className="question-textarea"
        />
        {/* Dropdown for selecting a category */}
        <select
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          className="category-select"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <button type="submit">Post Question</button>
      </form>

      {/* Displaying categories and their posts */}
      <div className="forum-posts">
        {categories.map((category) => (
          <div key={category}>
            {/* Clickable category heading */}
            <h2
              onClick={() => handleCategoryClick(category)}
              className="category-heading"
            >
              {category}
            </h2>

            {/* Display posts only if the category is selected */}
            {selectedCategory === category && (
              <div className="posts-for-category">
                {posts
                  .filter((post) => post.category === category)
                  .map((post) => (
                    <Post key={post.id} post={post} handleAddReply={handleAddReply} />
                  ))}
              </div>
            )}
          </div>
        ))}
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
      <p className="post-date">Posted on: {post.date}</p>

      {/* Reply form */}
      <form className="reply-form" onSubmit={handleReplySubmit}>
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
          <p className="no-replies">No replies yet. Be the first to reply!</p>
        )}
      </div>
    </div>
  );
};

export default Forum;



