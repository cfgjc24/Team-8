import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './profileupdate.css';

const EditProfile = () => {
   const [profile, setProfile] = useState({
       name: '',
       email: '',
       bio: ''
   });


   const handleInputChange = (e) => {
       const { name, value } = e.target;
       setProfile({
           ...profile,
           [name]: value
       });
   };


   const handleSubmit = (e) => {
       e.preventDefault();
       console.log('Profile updated:', profile);
       alert('Profile updated successfully!');
   };


   return (
    <div>
    <div>
           {/* Navigation Bar */}
           <nav className="navbar">
               <ul className="nav-links">
               <li><Link to="/courses" className="nav-item">Courses</Link></li>
               <li><Link to="/calendar" className="nav-item">Calendar</Link></li>
               <li><Link to="/opportunities" className="nav-item">Opportunities</Link></li>
               <li><Link to="/Forum" className="nav-item">Forum</Link></li>


               </ul>
           </nav>
       </div>
       <div className="edit-profile-container">

    
       
           <h2>Edit Profile</h2>
           <form onSubmit={handleSubmit}>
               <div className="form-group">
                   <label htmlFor="name">Name:</label>
                   <input
                       type="text"
                       id="name"
                       name="name"
                       value={profile.name}
                       onChange={handleInputChange}
                       placeholder="Enter your name"
                   />
               </div>


               <div className="form-group">
                   <label htmlFor="email">Email:</label>
                   <input
                       type="email"
                       id="email"
                       name="email"
                       value={profile.email}
                       onChange={handleInputChange}
                       placeholder="Enter your email"
                   />
               </div>


               <div className="form-group">
                   <label htmlFor="bio">Bio:</label>
                   <textarea
                       id="bio"
                       name="bio"
                       value={profile.bio}
                       onChange={handleInputChange}
                       placeholder="Bio"
                   />
               </div>


               <button type="submit">Save Changes</button>
               <br></br>
               <br></br>
               <br></br>
               <button type="button">Logout</button>
           </form>
       </div>
       </div>
   );
};


export default EditProfile;