import React, { useState } from "react";
import './Forum.css'; 

const currentUser = {
  username: "Iris Zhang",
  profilePicture: "https://via.placeholder.com/40", // Placeholder image, replace with actual user image
};

// forum component
const Forum = () => {
  const [posts, setPosts] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [newCategory, setNewCategory] = useState("Lesson 1");
  const [selectedCategory, setSelectedCategory] = useState(""); // State to track the selected category
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5; 

  /*
  useEffect(() => {
    // still need endpoint from backend team
    fetch("/api/currentUser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setCurrentUser(data); 
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);
*/
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
        date: new Date().toLocaleDateString(),
        user: currentUser, // Associate post with the current user
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
        post.id === postId ? {
          ...post,
          replies: [...post.replies, { text: reply, user: currentUser }] // Add reply with user info
        } : post
      )
    );
  };

  // Toggle displaying posts when a lesson is clicked
  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(""); // If already selected, hide the posts
    } else {
      setSelectedCategory(category); // Show posts for the selected category
      setCurrentPage(1); // Reset to page 1 when switching categories
    }
  };

  // Filter posts by selected category
  const filteredPosts = posts.filter((post) => post.category === selectedCategory);

  // Pagination logic for the selected category
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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

      <div className="forum-posts">
        {categories.map((category) => (
          <div key={category}>
            <h2
              onClick={() => handleCategoryClick(category)}
              className="category-heading"
            >
              {category}
            </h2>

            {selectedCategory === category && (
              <div className="posts-for-category">
                {currentPosts.map((post) => (
                  <Post key={post.id} post={post} handleAddReply={handleAddReply} />
                ))}

                {/* Pagination for the current category */}
                {filteredPosts.length > postsPerPage && (
                  <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={filteredPosts.length}
                    paginate={paginate}
                    currentPage={currentPage}
                  />
                )}
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
      {/* Display user info along with the post */}
      <div className="post-header">
        <img src={post.user.profilePicture} alt={`${post.user.username}'s profile`} className="profile-picture" />
        <span className="post-username">{post.user.username}</span>
        <span className="post-date">Posted on: {post.date}</span>
      </div>
      <h3>{post.question}</h3>

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
            <div key={index} className="reply-item">
              <p>&gt; {reply.text}</p>
            </div>
          ))
        ) : (
          <p className="no-replies">No replies yet. Be the first to reply!</p>
        )}
      </div>
    </div>
  );
};

// Pagination Component
const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <a onClick={() => paginate(number)} href="#!" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Forum;



