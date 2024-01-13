import React from 'react'
import {Swiper , SwiperSlide , useSwiper} from 'swiper/react'
import "swiper/css"
import './Projects.css'
import data from '../utils/project.json'
import { sliderSettings } from '../utils/common';

const Events = () => {
  return (
    <section id='projects' className="r-wrapper">
        <div className="paddings innerWidth r-container">
            <div className="r-head flexColStart">
                <span className='orangeText proHead'>Projects</span>
                
            </div> 
            <div className='primaryText proSubheading '>Our Creations</div>
            <Swiper {...sliderSettings}> 
                <SliderButtons/>
                {
                    data.map((card,i)=>(
                        <SwiperSlide key={i}>
                            <div className="flexColStart r-card">
                                <img src={card.image} alt="home"/>

                                <span className='secondaryText r-price'>
                                    {/* <span style={{color:"orange"}}>$</span><span>{card.price}</span> */}
                                </span>
                                <span className='primaryText'>{card.name}</span>
                                <span className=' secondarySpace secondaryText'>{card.detail}</span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div> 
    </section>   
  ) 
} 

export default Events

const SliderButtons = ()=>{
    const swiper = useSwiper();
    return(
        <div className="flexCenter r-buttons">
         <button onClick={()=>swiper.slidePrev()}>&lt;</button>
         <button onClick={()=>swiper.slideNext()}>&gt;</button>
        </div>
    );
};