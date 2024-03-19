// LeftSideComponent.js
import React, { useState, useEffect } from 'react';

function LeftSideComponent({ handleCategoryData }) {
  // State to store the categories
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  // Fetch categories from the API and select the first category
  useEffect(() => {
    fetch('http://localhost:5000/api/duas/categories')
      .then(response => response.json())
      .then(data => {
        setCategories(data);
        // Select the first category
        if (data.length > 0) {
          setSelectedCategoryId(data[0].cat_id);
          handleClick(data[0].cat_id);
        }
      })
      .catch(error => console.error('Error fetching categories:', error));
  }, [])

  const handleClick = (categoryId) => {
    // Set the selected category ID
    setSelectedCategoryId(categoryId);
    // Make API call using the category ID
    fetch(`http://localhost:5000/api/duas/duas/category/${categoryId}`)
      .then(response => response.json())
      .then(data => {
        // Pass the data to the parent component
        handleCategoryData(data);
      })
      .catch(error => {
        // Handle any errors
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div className="left-side-container">
      <div className="left-side">
        <div className="section-heading">
          <h2>Categories</h2>
        </div>
        <div className="section">
          {/* Search component */}
          <div className="search-component">
            <input type="text" className="search-input" placeholder="Search..." />
            <button className="search-button">&#128269;</button>
          </div>
        </div>
        <div className="section">
          {/* Third section with lots of divs */}
          <div className="lots-of-divs">
            {/* Map through categories to create custom-divs */}
            {categories.map(category => (
              <div key={category.id} className={`custom-div ${selectedCategoryId === category.cat_id ? 'selected' : ''}`} onClick={() => handleClick(category.cat_id)}>
                <div className="left-part">
                  {/* You can use category-specific icons here */}
                  <i className={`icon ${category.cat_icon}`}></i>
                </div>
                <div className="right-part">
                  <div className="heading">{category.cat_name_en}</div>
                  {/* You can add more details if available */}
                  <div className="sub-heading">{`subcategory: ${category.no_of_subcat}`}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSideComponent;
