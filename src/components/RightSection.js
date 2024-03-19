// RightSection.js
import React from 'react';
import SearchBar from './SearchBar';
import ProfileSection from './ProfileSection';
import SettingIcon from './SettingIcon';

function RightSection() {
  return (
    <div className="right-section">
      <SearchBar />
      <ProfileSection />
      <SettingIcon />
    </div>
  );
}

export default RightSection;
