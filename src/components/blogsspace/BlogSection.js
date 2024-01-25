// BlogSection.js
import React from "react";
import Blog from "./Blog";
import "./Blog.css";
import Footer from "../Footer";
import ParticleContainer from "../ParticleContainer";

const BlogSection = () => {
  const blogs = [
    {
      title: "Introduction",
      pdfUrl: "/pdfs/bee_intro.pdf",
      text: "Transforming Lives through Robotic Innovation.",
      imgUrl: "../../gallery/beeintro.webp",
    },
    {
      title: "Circuit Elements",
      pdfUrl: "/pdfs/BEE_CKTELE.pdf",
      text: "Exploring Circuit Elements: Bridging Science and Daily Life in Robotics",
      imgUrl: "../../gallery/circuitelements.webp",
    },
    {
      title: "Diodes",
      pdfUrl: "/pdfs/BEE_DIODES.pdf",
      text: "Unveiling Diodes: Guiding Current, Empowering Electronics.",
      imgUrl: "../../gallery/diode.webp",
    },
    {
      title: "Switch and Relays",
      pdfUrl: "/pdfs/BEE_SWITCHES.pdf",
      text: "Switches and Relays: Unveiling the Magic in Electrical Control.",
      imgUrl: "../../gallery/switch.webp",
    },
    {
      title: "Transistors",
      pdfUrl: "/pdfs/BEE_TRANSISTORS.pdf",
      text: "Transistors: Shrinking Possibilities, Expanding Horizons.",
      imgUrl: "../../gallery/transistor.webp",
    },
    {
      title: "Transformers",
      pdfUrl: "/pdfs/BEE_TRANSFORMER.pdf",
      text: "Transformers: Powering the Present, Shaping the Future.",
      imgUrl: "../../gallery/transformer.webp",
    },
    {
      title: "Wires",
      pdfUrl: "/pdfs/BEE_WIRES.pdf",
      text: "Wired for Success: The Lifelines of BEE and Robotics.",
      imgUrl: "../../gallery/wires.webp",
    },
    {
      title: "Batteries",
      pdfUrl: "/pdfs/BEE_BATTERIES.pdf",
      text: "Batteries: Powering Possibilities in Robotics and Beyond.",
      imgUrl: "../../gallery/battery.webp",
    },
    {
      title: "Instruments",
      pdfUrl: "/pdfs/BEE_INSTRUMENTS.pdf",
      text: "Instruments of Innovation: Crafting Robotics Excellence.",
      imgUrl: "../../gallery/instruments.webp",
    },
  ];

  const design = [
    {
      title: "Getting Started with Fusion 360",
      pdfUrl: "/pdfs/fusion_360.pdf",
      text: "Crafting Dimensions: Fusion 360 for 3D Modeling Enthusiasts",
      imgUrl: "../../gallery/fusion360.jpg",
    },
    {
      title: "Fusion 360 Setup and Tuts",
      pdfUrl: "/pdfs/settingUp.pdf",
      text: "Design Mastery: Fusion 360 Unleashed",
      imgUrl: "../../gallery/settingUp.png",
    },
  ];
  const ml = [
    {
      title: "Machine Learning",
      pdfUrl: "/pdfs/ML blog.pdf",
      text: "Elevate Intelligence: Unleashing Machine Learning Wonders",
      imgUrl: "../../gallery/ML.jpg",
    },
  ];
  const algo = [
    {
      title: "Introduction",
      pdfUrl: "/pdfs/Algo_intro.pdf",
      text: "Decoding Code: Empowering Learning Journeys",
      imgUrl: "../../gallery/algo_intro.webp",
    },
    {
      title: "Concept of Memory and Binary",
      pdfUrl: "/pdfs/concept_of_memory_and_binary.pdf",
      text: "Unlocking Bytes: Shedding Light on Memory and Binary",
      imgUrl: "../../gallery/concept_of_memory.png",
    },
    {
      title: "Algorithms",
      pdfUrl: "/pdfs/algo.pdf",
      text: "Everyday Magic: Unveiling the Algorithmic Secrets",
      imgUrl: "../../gallery/Algo.webp",
    },
    {
      title: "Flowchart and Pseudocode",
      pdfUrl: "/pdfs/flowchart_and_pseudo.pdf",
      text: "Visualizing Code: Navigating Complexity with Flowcharts",
      imgUrl: "../../gallery/Flowcharts.webp",
    },
    {
      title: "Variables, Datatypes and Operators",
      pdfUrl: "/pdfs/variable_datatype_and_operator.pdf",
      text: "Cracking the Code: Exploring Variables, Datatypes, and Operators",
      imgUrl: "../../gallery/variables.webp",
    },
    {
      title: "Conditional Statements",
      pdfUrl: "/pdfs/contitional_statement.pdf",
      text: "Decisions Unveiled: Mastering Conditional Statements in Code",
      imgUrl: "../../gallery/conditional.webp",
    },
    {
      title: "Functions and Arrays",
      pdfUrl: "/pdfs/functions.pdf",
      text: "Code Symphony: Exploring Functions and Arrays in Depth",
      imgUrl: "../../gallery/array.webp",
    },
    {
      title: "Arduino and PS",
      pdfUrl: "/pdfs/arduino_and_ps.pdf",
      text: "From Bits to Boards: Unveiling Arduino and Problem Solving",
      imgUrl: "../../gallery/arduino.webp",
    },

  ];
  return (
    <>
      <ParticleContainer />
      <div className="backgroundimg2" style={{ paddingTop: "120px" }}>
        <div className="container">
          <h1 className="section-title">Blog Section</h1>
          <h1 className="section-subheading">Basic Electrical Engineering</h1>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            {blogs.map((blog, index) => (
              <Blog key={index} {...blog} />
            ))}
          </div>
          <h1 className="section-subheading">Algo Pseudo</h1>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            {algo.map((blog, index) => (
              <Blog key={index} {...blog} />
            ))}
          </div>
          <h1 className="section-subheading">Fusion 360</h1>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            {design.map((blog, index) => (
              <Blog key={index} {...blog} />
            ))}
          </div>
          <h1 className="section-subheading">Machine Learning</h1>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            {ml.map((blog, index) => (
              <Blog key={index} {...blog} />
            ))}
          </div>

        </div>
        <Footer />
      </div>
    </>
  );
};

export default BlogSection;
