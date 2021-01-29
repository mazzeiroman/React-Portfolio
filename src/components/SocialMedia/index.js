import React from "react";
import "./style.css";

function SocialMedia() {
  return (
      
           <div className="icons">
        <a href="https://github.com/mazzeiroman" className="github">
          <i className="fab fa-github-alt"></i>
        </a>
        <a href="https://www.linkedin.com/in/romanmazzei/" className="linkedin">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="./images/resumetemplate.pdf" download="curriculum" className="curriculum">
          <i className="fas fa-file-download"></i>
        </a>
      </div>
      
  )
}

export default SocialMedia;
