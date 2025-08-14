import React from 'react'
import footerlogo from '../assets/2.svg'

const Footer = () => {
  return (
    <footer className="footer px-2">
      <div className="container">
        <div className="row footer-mobile-layout">
          <div className="col-lg-4 mb-5 mb-lg-0 footer-col-main">
            <img src={footerlogo} className='logo-hight-width mb-3' />
            <p className="footer-text">Building powerful websites with stunning designs that help businesses grow and succeed in the digital world.</p>
            <div className="footer-social">
              <a href="https://wa.me/918208636443"  target="_blank" rel="noopener noreferrer" className="footer-social-icon"><i className="fab fa-whatsapp"></i></a>
            
              <a href="https://www.linkedin.com/in/manas-kirve-aa97432a5/" target="_blank" rel="noopener noreferrer" className="footer-social-icon"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://www.facebook.com/profile.php?id=61576331085036" className="footer-social-icon"><i className="fab fa-facebook"></i></a>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 mb-5 mb-md-0 footer-col-company">
            <div className="footer-links">
              <h5>Company</h5>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 mb-5 mb-md-0 footer-col-services">
            <div className="footer-links">
              <h5>Services</h5>
              <ul>
                <li><a href="#">Frontend</a></li>
                <li><a href="#">Backend</a></li>
                <li><a href="#">UI/UX Design</a></li>
  
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 footer-col-contact">
            <div className="footer-links">
              <h5>Contact Us</h5>
              <ul>
               
                <li><a href="#"><i className="fas fa-envelope me-2"></i>typehex126@gmail.com</a></li>
               
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Type-Hex. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
