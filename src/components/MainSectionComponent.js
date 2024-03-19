// MainSectionComponent.js
import React, { useState } from 'react';
import LeftSideComponent from './LeftSideComponent';
import RightSideComponent from './RightSideComponent';

function MainSectionComponent() {
  // State to store data fetched for the selected category
  const [categoryData, setCategoryData] = useState(null);

  // Function to set the data fetched for the selected category
  const handleCategoryData = (data) => {
    setCategoryData(data);
  };

  return (
    <div className="main-section">
      <LeftSideComponent handleCategoryData={handleCategoryData} />
      <RightSideComponent categoryData={categoryData} />
    </div>
  );
}

export default MainSectionComponent;
