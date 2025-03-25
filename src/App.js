import "./App.css";
import { useState } from "react";
function App() {
  const [name, SetName] = useState("");
  const [darkMode, setDarkMode] = useState("false");
  return (
    <>
      <div className={darkMode ? "container dark" : "container"}>
        <h1>Welcome to Student Dashboard !</h1>
        <input
          type="text"
          placeholder="Enter your name"
          className="name-input"
          value={name}
          onChange={(e) => SetName(e.target.value)}
        ></input>
        <p>Hello ,Everyone...{name}</p>
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </>
  );
}

export default App;