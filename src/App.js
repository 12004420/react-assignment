import React, { useState } from "react";
import Welcome from "./components/welcome";
import './App.css';


const App = () => {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState();
  const [collage, setCollage] = useState();

const inputEvent = (event) => {
  console.log(event.target.value);
  setName(event.target.value);
}

const onSubmit = () => {
    setFullName(name);
    setCollage("Welcome to LPU College")
}


  return (
    <div>
      <input 
        type="text"
        onChange={inputEvent}
        value={name}
      />
      <button Placeholder="Type something..." onClick={onSubmit}>Login</button>
      <Welcome name={fullName} college={college}/>
      {/* <h1>{fullName}</h1>
      <h2>{college}</h2> */}
      <p>Assignment done by Raman punia college id :- 12004420</p>
      
    </div>
  )

}
export default App;
