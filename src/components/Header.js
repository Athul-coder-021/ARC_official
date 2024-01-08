import React, { useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import logo from './arc1-removebg-preview-new.png';
import './Header.css';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';

export default function Header() {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && '-100%' };
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
    setMenuOpened(false);
  };
  const scrollToTopOrHome = () => {
    if (window.location.pathname === '/') {
      // If already on the home page, scroll to top
      scroll.scrollToTop();
    } else {
      // If not on the home page, navigate to the home page
      setMenuOpened(false);
      window.location.href = '/';
    }
  };
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src={logo} alt="Logo" className="about-image" width={100} />

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <ScrollLink to="/" onClick={scrollToTopOrHome} smooth={true} duration={100} className='scroller'>
              Home
            </ScrollLink>
            <ScrollLink to="about" smooth={true} duration={100} className='scroller'>
              About
            </ScrollLink>
            <ScrollLink to="events" smooth={true} duration={100} className='scroller'>
              Events
            </ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={100} className='scroller'>
              Projects
            </ScrollLink>
            <RouterLink to="team" className='scroller'>
              Team
            </RouterLink>
            <RouterLink to="gallery" className='scroller'>
              Gallery
            </RouterLink>
            <RouterLink to="blog" className='scroller'>
              Blog
            </RouterLink>
          </div>
          <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
            <BiMenuAltRight size={30} />
          </div>
        </OutsideClickHandler>
      </div>
    </section>
  );
}
