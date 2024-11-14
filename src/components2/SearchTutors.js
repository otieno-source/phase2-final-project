import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const SearchTutors = () => {
  const [tutors, setTutors] = useState(null); 
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch('https://phase2-final-project.onrender.com/tutors')
      .then((response) => response.json())
      .then((data) => {
        setTutors(data); 
        setLoading(false); 
      })
      .catch((error) => {
        console.error('Error fetching tutors:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>; // Show loading message

  return (
    <div className="search-tutors">
      <h2>Our Tutors</h2>
      <button onClick={() => navigate('/')}>Back to Homepage</button> 

      <ul className="tutor-list">
        {tutors.map((tutor, index) => (
          <li key={index} className="tutor-item">
            <img 
              src={tutor.picture} 
              alt={tutor.name} 
              className="tutor-image" 
            />
            <div className="tutor-info">
              <h3>{tutor.name}</h3>
              <p>Phone: {tutor.phone}</p>
              <p>Subject: {tutor.subject}</p>
              <p>Salary: ${tutor.salary}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchTutors;