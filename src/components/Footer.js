import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Footer.css";
const Footer = () => {
    return (
        <>
        <hr className='ruler'></hr>
        <div className="container">
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <h3><span>ARC</span>ROBOTICS</h3>
                            <p><i class="fa-solid fa-location-dot" style={{ fontSize: '1.5em' }}></i> IIIT KOTA PERMANENT CAMPUS,RIICO INDUSTRIAL AREA,KUBER EXTENSION, RANPUR,KOTA RAJASTHAN-325003</p>
                            <div className="footer-icons">
                                <i class="fab fa-facebook"></i>
                                <i class="fab fa-twitter"></i>
                                <i class="fab fa-instagram"></i>
                                <a href=''><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2 quicktext">
                            <h5>Quick Links</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/blog">Blogs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/gallery">Gallery</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2 quicktext">
                            <h5>Quick Links</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/team">Team</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="https://iiitkota.ac.in/">IIIT KOTA</a>
                                </li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className='Last-footer'>
                <p>© 2023 ARC ROBOTICS</p>
            </div>
        </>
    ) 
}

export default Footer
