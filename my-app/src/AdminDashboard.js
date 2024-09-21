import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all users from API
  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  // Fetch all posts from API
  useEffect(() => {
    fetch("/api/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });
  }, []);

  const handleDeleteUser = (id) => {
    // Handle user deletion logic
    console.log(`Deleting user with id: ${id}`);
  };

  const handleDeletePost = (id) => {
    // Handle post deletion logic
    console.log(`Deleting post with id: ${id}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      
      {/* Manage Users Section */}
      <section>
        <h2>Manage Users</h2>
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                  <button>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Manage Posts Section */}
      <section>
        <h2>Manage Posts</h2>
        <table className="post-table">
          <thead>
            <tr>
              <th>Post ID</th>
              <th>Author</th>
              <th>Category</th>
              <th>Question</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.user.username}</td>
                <td>{post.category}</td>
                <td>{post.question}</td>
                <td>{post.date}</td>
                <td>
                  <button onClick={() => handleDeletePost(post.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Analytics Section */}
      <section>
        <h2>Analytics</h2>
        <p>Total Users: {users.length}</p>
        <p>Total Posts: {posts.length}</p>
      </section>

      {/* Announcements Section */}
      <section>
        <h2>Create Announcement</h2>
        <form>
          <textarea placeholder="Write an announcement..." />
          <button type="submit">Post Announcement</button>
        </form>
      </section>
    </div>
  );
};

export default AdminDashboard;