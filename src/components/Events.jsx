import React from 'react'
import {Swiper , SwiperSlide , useSwiper} from 'swiper/react'
import "swiper/css"
import './Events.css'
import data from '../utils/slider.json'
import { sliderSettings } from '../utils/common'; 
const Events = () => {
  return (
    <section id='events' className="r-wrapper">
        <div className="paddings innerWidth r-container">
            <div className="r-head flexColStart">
                <span className='orangeText eventHead'>Recent Events</span>
            </div> 
                <div className='primaryText eventSubheading'>Featured Event Details</div>
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
                                <span className='secondaryText'>{card.detail}</span>
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