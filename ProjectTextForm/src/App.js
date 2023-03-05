import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

function App() {
  // const [darkMode, setDarkMode] = useState(false); // on dark mode checking
  const [mode, setMode] = useState("light"); // on dark mode checking
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Project-Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Project-Light Mode";
    }
  };
  return (
    <>
      {/* <Navbar title="Project2" aboutText="About us" /> */}
      {/* <Navbar /> */}
      {/* <Router> */}
        <Navbar title="Project" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <About/> */}
          <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert}/>
        {/* <Routes>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
