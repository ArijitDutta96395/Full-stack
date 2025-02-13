import React from "react";
import "./profile.css"; // Make sure to create and import this CSS file

const Profile = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    position: "Software Engineer",
    department: "IT Department",
    location: "New York, USA",
    phone: "+1 (123) 456-7890",
    profileImage: "https://via.placeholder.com/150", // Replace with actual image URL
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img src={user.profileImage} alt="Profile" className="profile-image" />
        <h2 className="profile-name">{user.name}</h2>
        <p className="profile-position">{user.position}</p>
        <p className="profile-department">{user.department}</p>
        <p className="profile-location">{user.location}</p>
        <p className="profile-email">✉ {user.email}</p>
        <p className="profile-phone">📞 {user.phone}</p>
      </div>
    </div>
  );
};

export default Profile;

