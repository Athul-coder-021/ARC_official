import React from "react";
import "./TeamMember.css";

const TeamMember = ({ name, role, detail, image,instagram,linkedin }) => {
  return (
    
    // <div className="columnss"> 
    //   <div className="cards">
    //     <div className="img-container">
    //       <img src={image} alt={name} />
    //     </div>
    //     <h3>{name}</h3>
    //     <p>{role}</p>
    //     <div className="icons">

    //       <a href="#">
    //         <i className="fab fa-linkedin"></i>
    //       </a>
    //       <a href="#">
    //         <i className="fab fa-github"></i>
    //       </a>
    //       <a href="#">
    //         <i className="fas fa-envelope"></i>
    //       </a>
    //     </div>
    //   </div>  
    // </div>
    <div class="boxer">
    <div class="top-bar"></div>
    <div class="navTeam">
      <i class="verify fas fa-check-circle"></i>
      <input type="checkbox" class="heart-btn" id="heart-btn" />
      <label class="heart"></label>
    </div>

    <div class="details">
      <img src={image} alt={name} />
      <strong>{name}</strong>
      <p>{role}</p>
    </div>

    <div class="btnTeam">
      <a href={instagram}  target="_blank"><i class="fab fa-instagram"></i></a>
      <a href={linkedin} target="_blank"><i className="fab fa-linkedin"></i></a>
    </div>
  </div>    
  );
};

export default TeamMember;
  