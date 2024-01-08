// BlogSection.js
import React from 'react';
import Blog from './Blog';
import "./Blog.css";
import Footer from '../Footer';

const BlogSection = () => {
  const blogs = [
    { title: 'JavaScript Best Practices', pdfUrl: '/pdfs/bee_intro.pdf',text:'trial 2', imgUrl:'../../gallery/beeintro.webp' },
    { title: 'JavaScript Best Practices', pdfUrl: '/pdfs/BEE_CKTELE.pdf',text:'trial 2', imgUrl:'../../gallery/circuitelements.webp' },
    { title: 'JavaScript Best Practices', pdfUrl: '/pdfs/BEE_DIODES.pdf',text:'trial 2', imgUrl:'../../gallery/diode.webp' },
    { title: 'JavaScript Best Practices', pdfUrl: '/pdfs/BEE_SWITCHES.pdf',text:'trial 2', imgUrl:'../../gallery/switch.webp' },
    { title: 'JavaScript Best Practices', pdfUrl: '/pdfs/BEE_TRANSISTORS.pdf',text:'trial 2', imgUrl:'../../gallery/transistor.webp' },
    { title: 'JavaScript Best Practices', pdfUrl: '/pdfs/BEE_TRANSFORMER.pdf',text:'trial 2', imgUrl:'../../gallery/transformer.webp' },
    { title: 'JavaScript Best Practices', pdfUrl: '/pdfs/BEE_WIRES.pdf',text:'trial 2', imgUrl:'../../gallery/wires.webp' },
    { title: 'Introduction to React', pdfUrl: '/pdfs/BEE_BATTERIES.pdf',text:'athul boss', imgUrl:'../../gallery/battery.webp'},
    { title: 'JavaScript Best Practices', pdfUrl: '/pdfs/BEE_INSTRUMENTS.pdf',text:'trial 2', imgUrl:'../../gallery/instruments.webp' },
    
  ];

  return (
    <>
    <div className="backgroundimg" style={{ paddingTop: "120px" }}>
    <div className='container'>
      <h1 className="section-title" >Blog Section</h1>
      <div class="row row-cols-1 row-cols-md-3 g-4">
      {blogs.map((blog, index) => (
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
 