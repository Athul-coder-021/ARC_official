import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';


// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay'
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';
 
import './Galleryoutput.css'
import Footer from './Footer';
import ParticleContainer from './ParticleContainer';
const images = [
    { src: "../gallery/img1.jpg", alt: "1" },
    { src: "../gallery/img2.jpg", alt: "2" },
    { src: "../gallery/img3.jpg", alt: "3" },
    { src: "../gallery/img4.jpg", alt: "4", },
    { src: "../gallery/img5.jpg", alt: "5", },
    { src: "../gallery/img1.jpg", alt: "6", },
    { src: "../gallery/img1.jpg", alt: "7", },
    { src: "../gallery/img1.jpg", alt: "8", },
    { src: "../gallery/img1.jpg", alt: "9", },
    // { src: "/10.jpg", alt: "10", },
    // { src: "/11.jpg", alt: "11", },
    // { src: "/12.jpg", alt: "12", },
    // { src: "/13.jpg", alt: "13", },
    // { src: "/14.jpg", alt: "14", },
    // { src: "/15.jpg", alt: "15", },
    // { src: "/16.jpg", alt: "16", },
    // { src: "/17.jpg", alt: "17", },
    // { src: "/18.jpg", alt: "18", },
    // { src: "/19.jpg", alt: "19", },
]

const Galleryoutput=()=> {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <>
        {/* <ParticleContainer/> */}
        <div className="backgroundimg" style={{ paddingTop: "120px" }}>
                <div className="container">
                    <h1 className="orangeText galleryheading">ARC GALLERY</h1>
                    <LightGallery
                        onInit={onInit}
                        speed={500}
                        plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}
                    >
                        {images.map((image, index) => {
                            return (
                                <a href={image.src} key={index} className="gallery-item">
                                    <img alt={image.alt} src={image.src} />
                                    <span className="tooltip fs-2 " style={{color:"rgba(255,255,255,0.4)"}}>Click here</span>
                                </a>
                            )
                        })}
                    </LightGallery>
                </div>
                <Footer />
            </div>
        </>
    );
}
export default Galleryoutput