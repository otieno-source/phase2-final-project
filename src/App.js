import React from "react";
import './index.css'
import Header from "./components/Header";
import Nav from "./components/Navigate";
import TutorFormButton from "./components/Nav1-TutorRegForm";
import ParentsNav from "./components/ParentsNav";

function App(){
  return(
    <div className="container">
      <Header/>
      <TutorFormButton/>
      <ParentsNav/>
      <Nav/>
    </div>
  )
}

export default App;