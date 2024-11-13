import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchTutors = () => {
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const response = await fetch('http://localhost:3000/tutors');
        const data = await response.json();
        setTutors(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching tutors:', error);
        setLoading(false);
      }
    };
    fetchTutors();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="search-tutors">
      <h2>Our Tutors</h2>
      <button onClick={() => navigate('/')} className="back-button">Back to Homepage</button>
      <ul className="tutor-list">
        {tutors.map((tutor) => (
          <li key={tutor.id}>
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