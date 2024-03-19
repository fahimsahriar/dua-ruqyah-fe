import React from 'react';
import HeaderComponent from './HeaderComponent';
import MainSectionComponent from './MainSectionComponent';

function ContentComponent() {
  return (
    <div className="content">
      <HeaderComponent />
      <MainSectionComponent />
    </div>
  );
}

export default ContentComponent;
