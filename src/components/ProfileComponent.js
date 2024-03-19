import React, { useState } from 'react';

function ProfileComponent() {
  // State to manage dropdown visibility
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="profile-section" onClick={toggleDropdown}>
      <div className="user-icon">User Icon</div>
      <div className="dropdown-icon">Dropdown Icon</div>
      {dropdownVisible && (
        <div className="dropdown-menu" id="dropdownMenu">
          {/* Dropdown menu items */}
          <a href="#">Item 1</a>
          <a href="#">Item 2</a>
          <a href="#">Item 3</a>
        </div>
      )}
    </div>
  );
}

export default ProfileComponent;
