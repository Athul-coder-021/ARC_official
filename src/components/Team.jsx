import React from "react";
import TeamMember from "./TeamMember";
import teamData from "../utils/team.json";
import teamDataMentor from "../utils/teammentor.json";
import "./TeamMember.css"; // Import your main styling file
import Footer from "./Footer";
import "./TeamMember.css";
const App = () => {
  return (
    <>
      <div className="backgroundimg">
        {/* <div className="team">
      <h1 className="orangeText">Our Team</h1>
      <h1 style={{color:"white"}}>Our Mentor</h1>
      <div className="rowss">
        {teamDataMentor.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
      <h1 style={{color:"white"}}>4th Year</h1>
      <div className="rowss">
        {teamData.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>

      <h1 style={{color:"white"}}>3rd Year</h1>
      <div className="rowss">
        {teamData.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>

      <h1 style={{color:"white"}}>2nd Year</h1>
      <div className="rowss">
        {teamData.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div> */}

        <section id="team" style={{ paddingTop: "120px" }}>
          <h1 class="heading">
            <i class="fas fa-rocket"></i>
            <strong>Our Mentor</strong>
          </h1>
          <div class="containerTeam">
            {teamDataMentor.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
          <h1 class="heading">
            <i class="fas fa-rocket"></i>
            <strong>Our Team</strong>
          </h1>
          <div class="containerTeam">
            {teamData.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default App;
