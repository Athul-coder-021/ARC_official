// Blog.js
import React from "react";
import "./Blog.css";
import { faHouseMedicalCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const Blog = ({ title, pdfUrl, text, imgUrl }) => {
  const handleDownload = () => {
    window.open(pdfUrl, "_blank");
  };

  return (
    <div class="card card2" style={{width: "18rem"}}>
      <img src={imgUrl} class="card-img-top" alt="..." style={{borderRadius:"20px"}}/>
      <div class="card-body">
        <h5 class="card-title primaryTextnew">{title}</h5>
        <p class="card-text secondaryText">{text}</p>
        <button
          type="button" 
          className="download-button btn button-color buttonBlog"
          onClick={handleDownload}
        >
          Download PDF
        </button>
      </div> 
    </div>
  );
};

export default Blog;
 