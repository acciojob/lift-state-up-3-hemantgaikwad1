
import React, { useState } from "react";
import './../styles/App.css';
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

const App = () => {
  const [selectedOption,setSelectedOption]=useState("");
  function updateoption(val){
setSelectedOption(val);
  }
  return (
    <div className="parent">
      <h1>Parent Component</h1>
    <ChildComponent1 updateoption={updateoption}/>
    <ChildComponent2 updateoption={updateoption}/>
    Selected Option:{selectedOption}
    </div>
  )
}

export default App
