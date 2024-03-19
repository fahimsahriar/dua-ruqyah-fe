// RightSideComponent.js
import React from "react";

function RightSideComponent({ categoryData }) {
  return (
    <div className='right-side'>
      <div className='subcategory'>
        {/* Check if categoryData exists */}
        {categoryData && categoryData.map(data => (
          <div key={data.dua_id} className="second-card card">
            <div className="card-content">
              {/* Top part */}
              <div className="top-part">
                {/* Display dua name */}
                <div className="heading">{data.dua_name_en}</div>
              </div>
              {/* Middle part */}
              <div className="middle-part">
                {/* Display dua content */}
                <div className="paragraphs">
                  <p>{data.top_en}</p>
                </div>
              </div>
              {/* Bottom part */}
              <div className="bottom-part">
                {/* Display reference */}
                <div className="reference">{data.refference_en}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RightSideComponent;

// import React from 'react';

// function RightSideComponent() {
//   return (
//     <div className="right-side">
//       <div className="subcategory">
//         {/* First card */}
//         <div className="first-card card">
//           <p>Section: Excellence of doing Tasbeeh, Tahmid, Tahlil, Takbeer</p>
//         </div>
//         {/* Second card */}
//         <div className="second-card card">
//           <div className="card-content">
//             {/* Top part */}
//             <div className="top-part">
//               <div className="icon">Icon</div>
//               <p>Paragraph</p>
//             </div>
//             {/* Middle part */}
//             <div className="middle-part">
//               {/* Full of paragraph tags */}
//               <div className="paragraphs">
//                 <p>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
//                   dolore magna aliqua.
//                 </p>
//                 <p>
//                   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
//                   consequat.
//                 </p>
//                 {/* Add more paragraph tags as needed */}
//               </div>
//             </div>
//             {/* Bottom part */}
//             <div className="bottom-part">
//               <div className="play-button">Play</div>
//               <div className="icons">
//                 {/* Icons for copy, bookmarks, share, etc. */}
//                 <div className="icon">Copy</div>
//                 <div className="icon">Bookmark</div>
//                 <div className="icon">Share</div>
//                 {/* Add more icons as needed */}
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Add more second card divs as needed */}
//       </div>
//     </div>
//   );
// }

// export default RightSideComponent;
