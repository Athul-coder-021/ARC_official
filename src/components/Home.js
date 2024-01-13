import React from "react";
import About from "./About";
import Events from "./Events";
import Landing from "./Landing";
import Projects from "./Projects";
import Footer from './Footer';
const Home = () => {
  return (
    <div>
      <Landing />
      <div className="backgroundimg">
        <Projects />
        <About />
        <Events />
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
