import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components2/Header';
import Nav1 from './components2/Nav1';
import Nav2 from './components2/Nav2';
import SignUpTutor from './components2/SignUpTutor';
import SearchTutors from './components2/SearchTutors';
import SignUpParent from './components2/SignUpParent';
import ParentsLoginForm from './components2/ParentsLogin';
import OpenKidsFunPage from './components2/EventsPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Nav1 />
        <Nav2 />
        <Routes>
          <Route path="/become-a-tutor" element={<SignUpTutor />} />
          <Route path="/search-tutors" element={<SearchTutors />} />
          <Route path="/create-account" element={<SignUpParent />} />
          <Route path="/login" element={<ParentsLoginForm />} /> 
          <Route path="/upcoming-kids-events" element={<OpenKidsFunPage />} />
          <Route path="/" element={<div>Home Page</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;