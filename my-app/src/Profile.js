import React, { useState, useEffect } from "react";
import './Profile.css';

const Profile = () => {
  const [profile, setProfile] = useState(null); // State to store the profile data
  const [loading, setLoading] = useState(true); // State to track loading

  // fetch profile data
  useEffect(() => {
    // replace with the actual endpoint to fetch the student profile
    fetch("/api/studentProfile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setProfile(data);  // set the fetched profile data
        setLoading(false); // stop loading once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
        setLoading(false); // stop loading in case of an error
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
      <h1 className="profile-title">Student Profile</h1>
      <div className="profile-card">
        <p><strong>First Name:</strong> {profile.firstName}</p>
        <p><strong>Last Name:</strong> {profile.lastName}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Age:</strong> {profile.age}</p>
        <p><strong>Date of Birth:</strong> {profile.dateOfBirth}</p>
      </div>
    </div>
  );
};

export default Profile;
