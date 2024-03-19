import React from 'react';
import SidebarComponent from './SidebarComponent';
import ContentComponent from './ContentComponent';

function ContainerComponent() {
  return (
    <div className="container">
      <SidebarComponent />
      <ContentComponent />
    </div>
  );
}

export default ContainerComponent;
