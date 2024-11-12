import React from "react";
import './index.css'
import Header from "./components/Header";
import Nav from "./components/Navigate";
import TutorForm from "./components/TutorForm";
import ParentsNav from "./components/Parentsform";

function App(){
  return(
    <div>
      <Header/>
      <Nav/>
      <ParentsNav/>
      <TutorForm/>
    </div>
  )
}

export default App;