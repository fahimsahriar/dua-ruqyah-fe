import React from 'react';
import SearchComponent from './SearchComponent';
import ProfileComponent from './ProfileComponent';

function HeaderComponent() {
  return (
    <div className="header">
      <div className="left-section">
        {/* Logo */}
        <h2>Duas Page</h2>
      </div>
      <div className="right-section">
        {/* Search bar, profile icon, and setting icon */}
        <SearchComponent />
        <ProfileComponent />
        {/* Setting Icon */}
      </div>
    </div>
  );
}

export default HeaderComponent;
