// BlogSection.js
import React from 'react';
import Blog from './Blog';
import "./Blog.css";
import Footer from '../Footer';
import ParticleContainer from '../ParticleContainer';

const BlogSection = () => {
  const blogs = [
    { title: 'Introduction', pdfUrl: '/pdfs/bee_intro.pdf',text:'Transforming Lives through Robotic Innovation.', imgUrl:'../../gallery/beeintro.webp' },
    { title: 'Circuit Elements', pdfUrl: '/pdfs/BEE_CKTELE.pdf',text:'Exploring Circuit Elements: Bridging Science and Daily Life in Robotics', imgUrl:'../../gallery/circuitelements.webp' },
    { title: 'Diodes', pdfUrl: '/pdfs/BEE_DIODES.pdf',text:'Unveiling Diodes: Guiding Current, Empowering Electronics.', imgUrl:'../../gallery/diode.webp' },
    { title: 'Switch and Relays', pdfUrl: '/pdfs/BEE_SWITCHES.pdf',text:'Switches and Relays: Unveiling the Magic in Electrical Control.', imgUrl:'../../gallery/switch.webp' },
    { title: 'Transistors', pdfUrl: '/pdfs/BEE_TRANSISTORS.pdf',text:'Transistors: Shrinking Possibilities, Expanding Horizons.', imgUrl:'../../gallery/transistor.webp' },
    { title: 'Transformers', pdfUrl: '/pdfs/BEE_TRANSFORMER.pdf',text:'Transformers: Powering the Present, Shaping the Future.', imgUrl:'../../gallery/transformer.webp' },
    { title: 'Wires', pdfUrl: '/pdfs/BEE_WIRES.pdf',text:'Wired for Success: The Lifelines of BEE and Robotics.', imgUrl:'../../gallery/wires.webp' },
    { title: 'Batteries', pdfUrl: '/pdfs/BEE_BATTERIES.pdf',text:'Batteries: Powering Possibilities in Robotics and Beyond.', imgUrl:'../../gallery/battery.webp'},
    { title: 'Instruments', pdfUrl: '/pdfs/BEE_INSTRUMENTS.pdf',text:'Instruments of Innovation: Crafting Robotics Excellence.', imgUrl:'../../gallery/instruments.webp' },
    
  ];

  const design=[
    { title: 'Getting Started with Fusion 360', pdfUrl: '/pdfs/fusion_360.pdf',text:'Crafting Dimensions: Fusion 360 for 3D Modeling Enthusiasts', imgUrl:'../../gallery/beeintro.webp' },
  ];
  return (
    <>
    <ParticleContainer/>
    <div className="backgroundimg2" style={{ paddingTop: "120px" }}>
    <div className='container'>
      <h1 className="section-title" >Blog Section</h1>
      <h1 className="section-subheading" >Basic Electrical Engineering</h1>
      <div class="row row-cols-1 row-cols-md-3 g-4">
      {blogs.map((blog, index) => (
        <Blog key={index} {...blog} />
        ))}
        </div>
      <h1 className="section-subheading" >Fusion 360</h1>
      <div class="row row-cols-1 row-cols-md-3 g-4">
      {design.map((blog, index) => (
        <Blog key={index} {...blog} />
        ))}
        </div> 
    </div>
    <Footer/>
    </div>
    </>
  );
};

export default BlogSection;
  