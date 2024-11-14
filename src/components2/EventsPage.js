import React, { useState, useEffect } from "react";

const funImages = [
  {
    name: "Sunset over Ocean",
    url: "https://plus.unsplash.com/premium_photo-1711555629788-6bc785b1eb25?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Majestic Swimming",
    url: "https://images.unsplash.com/photo-1472586662442-3eec04b9dbda?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Forest Trail",
    url: "https://plus.unsplash.com/premium_photo-1686920245950-58617c8a602e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function OpenKidsFunPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % funImages.length); // Cycle through images
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + funImages.length) % funImages.length
    ); // Handle wraparound for previous image
  };

  // Set up an interval to change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="funpagecontainer">
      <div className="funpageHeader">
        <h1>Upcoming Kids Events</h1>
      </div>
      <div className="bodyfunpageDisplay">
        <div className="image-slider">
          <div className="image-caption">
            <p>{funImages[currentIndex].name}</p>
          </div>
          <img
            src={funImages[currentIndex].url}
            alt={funImages[currentIndex].name}
            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          />
        </div>

        {/* Navigation buttons */}
        <div className="slider-controls">
          <button onClick={prevImage}>&lt; Prev</button>
          <button onClick={nextImage}>Next &gt;</button>
        </div>
      </div>
    </div>
  );
}

export default OpenKidsFunPage;
