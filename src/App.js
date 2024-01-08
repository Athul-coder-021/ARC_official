// import logo from './logo.svg'; 
import './App.css';
import About from './components/About';
import Events from './components/Events';
import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './components/Landing'
import Projects from './components/Projects';
import Home from './components/Home';
import BlogSection from './components/blogsspace/BlogSection';
import Galleryoutput from './components/Galleryoutput'
import Team from './components/Team';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-scroll';
function App() {
  return (
    <>
    <Router>
    <Header/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        {/* Additional routes for other pages */}
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/team" element={<Team />} />
        <Route path="/gallery" element={<Galleryoutput />} />
      </Routes>
    </Router>

    </>
    
  );
}

export default App;
