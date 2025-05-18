import React from "react";
import "./text.css";

function Text() {

  const [text, setText] = React.useState("Enter your text here...");

  function handleUppercase() {
    let newText = text.toUpperCase();
    setText(newText);
  }

  function handleLowercase() {
    let newText = text.toLowerCase();
    setText(newText);
  }

  function handleCopy() {
    navigator.clipboard.writeText(text);
    alert("Text copied to clipboard!");
  }

  function handleclear() {
    let newText = "";
    setText(newText);
  }

  function handleChange(event) {
    setText(event.target.value);
  }



  return (
    <>
      <div className="main">
        <div className="text__container">
          <h1>TextUtils</h1>
        </div>
        <div className="text__area">
          <textarea
            placeholder="Enter your text here"
            className="text__input"
            rows="10"
            cols="50"
            value={text}
            onChange={handleChange}
          ></textarea>
          <div className="features">
            <button className="butns" onClick={handleUppercase}>To Uppercase</button>
            <button className="butns" onClick={handleLowercase}>To Lowercase</button>
            <button className="butns" onClick={handleCopy}>To Copytext</button>
            <button className="butns" onClick={handleclear}>To Clear</button>
          </div>
          <div className="details">
            <div className="words common">
              <h3>Words Count: {text.split(" ").length}</h3>
             
            </div>
            <div className="lines common">
              <h3>Lines Count: {text.split("\n").length}</h3>
              
            </div>
            <div className="characters common">
              <h3>Characters Count: {text.length}</h3>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Text;
