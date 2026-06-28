import Navbar from './components/Navbar';
import React, { useState, useEffect } from 'react';
import './App.css';
import TextForm from './components/TextForm';
// import Aboutus from "./components/Aboutus";
import Alerts from './components/Alerts';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alertmessage, setmessage] = useState(null);

  useEffect(() => {
    document.body.style.backgroundColor =
      mode === "dark" ? "#1a1a1a" : "#f8f9fa";

    document.body.style.color =
      mode === "dark" ? "#ffffff" : "#000000";
  }, [mode]);

  const showAlert = (message, type) => {
    setmessage({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setmessage(null);
    }, 1500);
  };

  const togglemode = () => {
    if (mode === "dark") {
      setmode("light");
      showAlert("Light mode has been enabled", "success");
    } else {
      setmode("dark");
      showAlert("Dark mode has been enabled", "success");
    }
  };

  return (
    <>
    
      <Navbar title="My App" mode={mode} togglemode={togglemode} />

      <Alerts alert={alertmessage} />

      <div
        className={ mode === "dark" ? "bg-dark text-light" : "bg-light text-dark" }
        style={{ minHeight: "100vh",  transition: "0.3s" }} >

        <div className="container my-3">

            <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}  />

        </div>
      </div>
     
    </>
  );
}

export default App;