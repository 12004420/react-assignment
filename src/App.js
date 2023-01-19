import './App.css';
import Welcome from './components/Welcome';
import { useState } from 'react';

function App() {
  const [name, setname] = useState("");

  const handleClick = () => {
    setname(document.getElementById("name").value);
    document.getElementById("greet-msg").style.display = "block";
  }

  return (
    <div className="App greet-body">
       <input id="name" type="text" placeholder="Type Something..." />
      <button className="login-btn" onClick={handleClick}>Login</button>
      <Welcome name={name} reg="12004420" />
    </div>
  );
}

export default App;
