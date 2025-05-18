import React, { useState } from "react";
import "./about.css";

export default function About() {

  return (
    <>
      <div className="about" >
        <div className="heading" >
          <h1>About Us</h1>
        </div>
        <div className="aboutextutlis" >
          <p>
            <b>TextUtils</b> is a simple yet powerful web-based tool designed to
            help you perform quick and efficient text transformations. Whether
            you're a student, developer, writer, or just someone dealing with
            text, TextUtils provides the right tools at your fingertips.
          </p>
        </div>
        <div className="whatcanudo" >
          <div className="heading1" >
            <p>🔧 What Can You Do With TextUtils?</p>
          </div>
          <div className="allfea" >
            <ul>
              <li>
                <p>✅ Convert text to uppercase or lowercase</p>
              </li>
              <li>
                <p>
                  ✅ Remove extra spaces (<b>Coming Soon)</b>
                </p>
              </li>
              <li>
                <p>✅ Count words and characters</p>
              </li>
              <li>
                <p>✅ Copy text to clipboard easily</p>
              </li>
              <li>
                <p>✅ Real-time text preview</p>
              </li>
              <li>
                <p>
                  ✅ Estimate reading time( <b>coming Soon</b>)
                </p>
              </li>
              <li>
                <p>✅ Switch between Light/Dark mode for comfort</p>
              </li>
            </ul>
          </div>
          <div className="whatuse" >
            <div className="heading2" >
              <p>🎯 Why Use TextUtils?</p>
            </div>
            <div className="allfeat" >
              <ul>
                <li>
                  <p>⚡ Lightning-fast text operations</p>
                </li>
                <li>
                  <p>🎯 Easy to use and mobile-friendly UI</p>
                </li>
                <li>
                  <p>
                    🌐 No installation required — works entirely in the browser
                  </p>
                </li>
                <li>
                  <p>🌙 Dark mode support for better accessibility</p>
                </li>
                <li>
                  <p>💯 Completely free to use</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="usecases" >
            <div className="heading3" >
              <p>🔍 Use Cases</p>
            </div>
            <div className="allfeatures" >
              <ul>
                <li>
                  {" "}
                  <p>✍️ Editing content for blogs or social media</p>
                </li>
                <li>
                  <p>📚 Formatting assignments or essays</p>
                </li>
                <li>
                  <p>💼 Preparing professional documents</p>
                </li>
                <li>
                  <p>👨‍💻 Developers cleaning or processing text inputs</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="featuresplans" >
            <div className="heading4" >
              <p>🌟 Future Plans</p>
            </div>
            <div className="allfeatr" >
              <ul>
                <li>
                  <p>🚀 Add support for more languages</p>
                </li>
                <li>
                  <p>📑 Text summarization & grammar checking (coming soon)</p>
                </li>
                <li>
                  <p>🔒 Privacy-first — no text is stored</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
