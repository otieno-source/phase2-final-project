import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SearchTutors = () => {
  const [tutors, setTutors] = useState(null); // Change initial state to null
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    fetch('http://localhost:3000/tutors')
      .then((response) => response.json())
      .then((data) => {
        setTutors(data); // Set data directly if it's an array
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error('Error fetching tutors:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>; // Show loading message

  return (
    <div className="search-tutors">
      <h2>Tutors List</h2>
      <button onClick={() => navigate('/')}>Back to Homepage</button> {/* Close button */}

      <ul>
        {tutors.map((tutor, index) => (
          <li key={index}>
            <img src={tutor.picture} alt={tutor.name} width="100" />
            <h3>{tutor.name}</h3>
            <p>Phone: {tutor.phone}</p>
            <p>Subject: {tutor.subject}</p>
            <p>Salary: ${tutor.salary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchTutors;