import React, { useState } from 'react';
import './profileMid.css';

function Profile() {
  const [user, setUser] = useState({
    name: 'Isuru Madusanka',
    phoneNumber: '077 9490680',
    address: 'kegalle',
    profilePhoto: 'profile.jpg', // Default image URL or local path
  });

  const [image, setImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = () => {
    // Simulate an API request to update user data (in a real app, send a request to the server)
    alert('Profile updated successfully');

    // If an image is selected, simulate sending it to the server
    if (image) {
      console.log('Image upload simulated:', image.name);
     
    }
  };

  return (
    <div className="user-profile">
      <h2 className="user-hed">Midwife Profile</h2>
      <div className="user-info">
        <img
          className="profile-image"
          src={image ? URL.createObjectURL(image) : user.profilePhoto}
          alt="Profile"
        />
        <div className="profile-border">
          <input type="file" accept="image/*" onChange={handleProfilePhotoChange} />
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
          />
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={user.phoneNumber}
            onChange={handleInputChange}
          />
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={user.address}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="button-container">
        <button onClick={handleSubmit}>Save Changes</button>
      </div>
    </div>
  );
}

export default Profile;
