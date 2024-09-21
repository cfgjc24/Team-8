import React, { useState, useEffect } from "react";
import './Profile.css';

const Profile = () => {
  const [profile, setProfile] = useState(null); // State to store the profile data
  const [loading, setLoading] = useState(true); // State to track loading

  // Fetch profile data
  useEffect(() => {
    // still need endpoint from backend team
    fetch("/api/userProfile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setProfile(data);  // set the fetched profile data
        setLoading(false); // stop loading once data is fetched

        // if the profile is a student, fetch the associated tutor by tutor_id
        if (data.role === "student" && data.tutor_id) {
          fetch(`/api/tutors/${data.tutor_id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          })
            .then((response) => response.json())
        }
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading profile...</p>;
  }

  if (!profile) {
    return <p>Error loading profile data</p>;
  }

  return (
    <div className="profile-container">
      <h1 className="profile-title">User Profile</h1>

      {/* Display Student Information */}
      {profile.role === "student" && (
        <div className="profile-card">
          <h2>Student Information</h2>
          <p><strong>First Name:</strong> {profile.first_name}</p>
          <p><strong>Last Name:</strong> {profile.last_name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Age:</strong> {profile.age}</p>
          <p><strong>Date of Birth:</strong> {profile.dob}</p>
        </div>
      )}

      {/* Display Tutor Information */}
      {profile.role === "tutor" && (
        <div className="profile-card">
          <h2>Tutor Information</h2>
          <p><strong>First Name:</strong> {profile.first_name}</p>
          <p><strong>Last Name:</strong> {profile.last_name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Age:</strong> {profile.age}</p>
        </div>
      )}

      {/* Display Admin Information */}
      {profile.role === "admin" && (
        <div className="profile-card">
          <h2>Admin Information</h2>
          <p><strong>First Name:</strong> {profile.first_name}</p>
          <p><strong>Last Name:</strong> {profile.last_name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Age:</strong> {profile.age}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
