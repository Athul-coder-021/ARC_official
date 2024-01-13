import React from 'react'
import './About.css'
const About = () => {
  return (
    <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
            
            {/* Left side */}
            <div id='about'  className="flexColStart v-left">
                <span className='orangeText aboutText'>About Us</span>
                <span className='primaryText aboutSubheading'>Our Commitment to Excellence</span>
                <span className='secondaryText2'>ARC <span className='orangeText2'>(A Robotics Club)</span> was established on the teacher’s day 5-september-2018.<br/><br/>Here we deal with electronics and robot construction or automation of any hardware. Students who are interested in learning about and working with robots can become a part of this club. It is<span className='orangeText2'> OF THE STUDENT, FOR THE STUDENT and BY THE STUDENT</span> group. We also conduct competitions and workshops related to robotics. </span>
            </div>     

            {/* right side */}
            <div className="flexCenter v-right">
                <div className="image-container">
                    <img src="./arc-logo.jpg" alt="" />
                </div>
            </div>
        </div>  
    </section>
  )
}

export default About
  