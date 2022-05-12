import react, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [message, setMessage] = useState("");

  useEffect(() => {
    getMessage();
  }, []);

  async function getMessage() {
    const response = await fetch("/api/message");
    const json = await response.json();
    setMessage(json);
  }

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{message.title}</h2>
        <p>{message.details}</p>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}

export default App;
