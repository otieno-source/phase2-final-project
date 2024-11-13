import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpTutor = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [salary, setSalary] = useState('');
  const [age, setAge] = useState('');
  const [picture, setPicture] = useState(null);
  const navigate = useNavigate();

  const handleFileUpload = (file) => {
    return file.name; 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTutor = {
      name,
      phone,
      subject,
      salary,
      age,
      picture: await handleFileUpload(picture)
    };

    fetch('http://localhost:3000/tutors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTutor),
    })
    .then((response) => response.json())
    .then(() => {
      alert('Details submitted successfully!');
      navigate('/');
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  const handleNotToday = () => {
    navigate("/");
  };

  return (
    <div className="signup-tutor">
      <h2>Sign Up as a Tutor</h2><br></br>
      <button onClick={handleNotToday}>Not Today</button><br></br>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
        <input type="number" placeholder="Salary" value={salary} onChange={(e) => setSalary(e.target.value)} required />
        <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} required />
        <input type="file" accept="image/*" onChange={(e) => setPicture(e.target.files[0])} required />
        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
};

export default SignUpTutor;