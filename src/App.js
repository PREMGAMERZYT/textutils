// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import Mainfunction from "./components/Myoperation/Mainfunction";
// import About from "./components/About/About";

function App() {
  // for slider of light mode and dark mode

  const [slider, setSlider] = useState({
    transform: "translate(0px)",
    transition: "transform 0.3s ease-in-out",
  });

  function clicked() {
    if (slider.transform === "translate(0px)") {
      setSlider({
        transform: "translate(15px)",
        transition: "transform 0.3s ease-in-out",
      });
    } else {
      setSlider({
        transform: "translate(0px)",
        transition: "transform 0.3s ease-in-out",
      });
    }
  }

  // for dark mode and light mode

  const [darkMode, setDarkMode] = useState("dark");

  function handleDarkMode() {
    if (darkMode === "dark") {
      setDarkMode("light");
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
    } else if (darkMode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "#333";
      document.body.style.color = "#fff";
    }
  }

  return (
    <>
      <Navbar
        handleDarkMode={handleDarkMode}
        clicked={clicked}
        slider={slider}
      />

      <Mainfunction />
    </>
  );
}

export default App;
