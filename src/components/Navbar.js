import React, { useEffect } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/2.svg'

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const scrollToSection = (sectionId, e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      // Already on home page, just scroll
      document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to home page with a section hash
      navigate('/', { state: { scrollTo: sectionId } });
    }
    
    // Close mobile menu if open
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      navbarToggler.click();
    }
  };

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      setTimeout(() => {
        document.getElementById(location.state.scrollTo).scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }

    const handleClickOutside = (event) => {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      const navbarToggler = document.querySelector('.navbar-toggler');
      
      if (navbarCollapse && navbarCollapse.classList.contains('show') && 
          !navbarCollapse.contains(event.target) && 
          !navbarToggler.contains(event.target)) {
        navbarToggler.click();
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [location]);
  
  return (
    <div> 
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} className='logo-hight-width' alt="Logo" />
          </Link>
        
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">
              <span></span>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink 
                  className={({isActive}) => isActive ? "nav-link active" : "nav-link"} 
                  to="/"
                  onClick={() => {
                    // Close mobile menu if open
                    const navbarToggler = document.querySelector('.navbar-toggler');
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse.classList.contains('show')) {
                      navbarToggler.click();
                    }
                  }}>
                  Home
                </NavLink>
              </li>
           
              <li className="nav-item">
                <a 
                  className="nav-link" 
                  href="/#why-choose-us"
                  onClick={(e) => scrollToSection('why-choose-us', e)}>
                  Why Choose Us
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className="nav-link" 
                  href="/#recent-projects"
                  onClick={(e) => scrollToSection('recent-projects', e)}>
                  Recent Projects
                </a>
              </li>
              <li className="nav-item">
                <NavLink 
                  className={({isActive}) => isActive ? "nav-link active" : "nav-link"} 
                  to="/services"
                  onClick={() => {
                    // Close mobile menu if open
                    const navbarToggler = document.querySelector('.navbar-toggler');
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse.classList.contains('show')) {
                      navbarToggler.click();
                    }
                  }}>
                  Services
                </NavLink>
              </li>
              <li className="nav-item ">
                <a 
                  className="nav-link " 
                  href="/#contact"
                  onClick={(e) => scrollToSection('contact', e)}>
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
