import React from 'react'
import './Landing.css'
import './Header.css'
import logo from './arc1-removebg-preview-new.png'
import Image from './robot-with-blue-light-it.jpg'
import Video from './High-tech2.mp4'
export default function landingpage() {
  const restartVideo = (event) => {
    // Get the video element
    const video = event.target;

    // Set the current time of the video to 0 to restart it
    video.currentTime = 0;

    // Play the video
    video.play();
  };
  return (
    <>
    <div className='hero' >
      <video src={Video} autoPlay loop muted onEnded={restartVideo} />
      {/* <div className="content"> */}
        <h1>ARC ROBOTICS</h1>
        <p>Where Innovation Begins</p>
        <a href="#" class="boxBtn">Learn More</a>
      {/* </div> */}
    </div>
    </>
  )
}
