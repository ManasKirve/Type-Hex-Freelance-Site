import React, { useEffect } from 'react'
import kirve from '../assets/kirvecollectionphoto.png'
import dorem from '../assets/dorem.png'
import healthcare from '../assets/healthcare.png'
import fitness from '../assets/fitnesshub.png'
import imageconvert  from '../assets/imagedynamic.jpeg'
import portfolio from '../assets/Portfoli.jpeg'
import ai from '../assets/ChatGPT_Image_May_27__2025__12_05_47_AM-removebg-preview.png'
import thumbnailkirve from '../assets/kirvecolectionscreenshot.png'
import thumbnailfitness from '../assets/fitnessscreeechot.png'
import thubnailhealthcare from '../assets/healthcarescreeenshit.png'
import thubnaildoren from '../assets/dorenhalfscreenshot.png'

const Home = () => {
  useEffect(() => {
    // Add a class to the body to indicate JS is loaded
    document.body.classList.add('js-animation-ready');
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };
    
    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
          observer.unobserve(entry.target);
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Small delay to ensure elements are initially visible for users without JS
    setTimeout(() => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll, .animate-on-scroll-delay, .card-animate, .animate-line, .tag-animate, .server-animate, .palette-animate, .wireframe-animate, .animate-strength, .tech-animate, .animate-orbit');
      
      animatedElements.forEach(el => {
        observer.observe(el);
      });
    }, 100);
    
    return () => {
      if (observer) {
        observer.disconnect();
      }
      document.body.classList.remove('js-animation-ready');
    };
  }, []);

  return (
    <div>
      <section className="hero-section p-2">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6 py-5 hero-content  order-lg-1 order-1" data-aos="fade-right" data-aos-delay="100">
              <h1 className="display-4 fw-bold text-white mb-4 animate-slide-up font-sizeheader"><span className="typing-animation">Smart Websites.</span><br></br> <span className="italic-text">Built Fast.</span><br></br><span className="ai-powered-text">Powered by <img src={ai} className='ai-image' data-aos="zoom-in" data-aos-delay="300" /></span></h1>
              <p className="lead text-white-50 mb-5 animate-slide-up-delay" data-aos="fade-up" >Transform your digital presence with our expert team of developers and designers creating tailored solutions for your business.</p>
              <a href="#contact" className="btn btn-lg hero-btn" onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
              }}>Start Your Project</a>
            </div>
            <div className="col-lg-6 order-lg-2 order-2">
              <div className="hero-image-container">
                <div className="code-window">
                  <div className="code-header">
                    <div className="code-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="code-title">style.css</div>
                  </div>
                  <div className="code-body">
                    <div className="typing-container">
                      <div className="code-line-numbered">
                        <span>1</span> .hero-section {'{'}
                      </div>
                      <div className="code-line-numbered">
                        <span>2</span> border-radius:20px ;
                      </div>
                      <div className="code-line-numbered">
                        <span>3</span>   color: #ffffff;
                      </div>
                      <div className="code-line-numbered">
                        <span>4</span> {'}'}
                      </div>
                      <div className="code-line-numbered">
                        <span>5</span> 
                      </div>
                      <div className="code-line-numbered">
                        <span>6</span> .hero-btn {'{'}
                      </div>
                      <div className="code-line-numbered">
                        <span>7</span>   background: #4cc9f0;
                      </div>
                      <div className="code-line-numbered">
                        <span>8</span> {'}'}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="floating-element"></div>
                <div className="floating-element delay-1"></div>
                <div className="floating-element delay-2"></div>
                <div className="floating-code code-1">
                  <div className="code-line"></div>
                  <div className="code-line"></div>
                  <div className="code-line"></div>
                </div>
                <div className="floating-code code-2">
                  <div className="code-line"></div>
                  <div className="code-line"></div>
                </div>
                <div className="circle-decoration circle-1"></div>
                <div className="circle-decoration circle-2"></div>
                <div className="circle-decoration circle-3"></div>
                {/* New animated elements */}
                <div className="floating-pixel pixel-1"></div>
                <div className="floating-pixel pixel-2"></div>
                <div className="floating-pixel pixel-3"></div>
                <div className="glowing-dot dot-1"></div>
                <div className="glowing-dot dot-2"></div>
                <div className="glowing-dot dot-3"></div>
                <div className="tech-icon-float icon-float-1">
                  <i className="fab fa-react"></i>
                </div>
                <div className="tech-icon-float icon-float-2">
                  <i className="fab fa-js"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="services-section  px-2">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2 className="display-5 fw-bold" data-aos="fade-up">Our Services</h2>
              <p className="lead text-muted" data-aos="fade-up" data-aos-delay="100">Comprehensive web solutions tailored to your needs</p>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="service-card service-card-frontend p-4 h-100 card-animate">
          
                <div className="service-header">
                
                  <div className=" mb-3 ourservice-font-size">Frontend Development</div>
                </div>
                <p className="text-muted">Creating responsive, interactive user interfaces with modern frameworks like React and Vue.js that engage your audience.</p>
                <div className="service-visual frontend-visual">
                  <div className="mini-browser">
                    <div className="browser-header">
                      <div className="browser-dots">
                        <span></span><span></span><span></span>
                      </div>
                    </div>
            <div className="browser-body">
              <div className="browser-content"></div>
            </div>
                  </div>
                </div>
                <div className="service-tech-tags">
                  <span className="tag-animate">React</span>
                  <span className="tag-animate">Vue</span>
                  <span className="tag-animate">CSS3</span>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="service-card service-card-backend p-4 h-100 card-animate card-animate-delay-1">
                
                <div className="service-header">
           
                  <div className="mb-3 ourservice-font-size">Backend Development</div>
                </div>
                <p className="text-muted">Building robust server-side applications with Node.js, Python, and other technologies to power your digital solutions.</p>
                <div className="service-visual backend-visual">
                  <div className="server-mini">
                    <div className="server-light blink"></div>
                    <div className="server-slots">
                      <div className="server-slot server-animate"></div>
                      <div className="server-slot server-animate"></div>
                    </div>
                    <div className="database-icon">
                      <div className="database-top"></div>
                      <div className="database-middle"></div>
                      <div className="database-bottom"></div>
                    </div>
                  </div>
                </div>
                <div className="service-tech-tags">
                  <span className="tag-animate">Node.js</span>
                  <span className="tag-animate">Python</span>
                  <span className="tag-animate">MongoDB</span>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <div className="service-card service-card-uiux p-4 h-100 card-animate card-animate-delay-2">
               
                <div className="service-header">
               
                  <div className="mb-3 ourservice-font-size">UI/UX <br></br>Design</div>
                </div>
                <p className="text-muted">Crafting intuitive user experiences and stunning interfaces using Figma, prototyping tools, and user-centered design principles.</p>
                <div className="service-visual uiux-visual">
                  <div className="design-elements-mini">
                    <div className="color-palette-mini palette-animate">
                      <span></span><span></span><span></span><span></span>
                    </div>
                    <div className="wireframe-mini wireframe-animate">
                      <div className="wireframe-header-mini"></div>
                      <div className="wireframe-body-mini"></div>
                    </div>
                  </div>
                </div>
                <div className="service-tech-tags">
                  <span className="tag-animate">Figma</span>
                  <span className="tag-animate">Adobe XD</span>
                  <span className="tag-animate">Sketch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="services-bg-elements">
          <div className="floating-circle circle-1"></div>
          <div className="floating-circle circle-2"></div>
          <div className="floating-circle circle-3"></div>
          <div className="floating-line line-1"></div>
          <div className="floating-line line-2"></div>
        </div>
      </section>
        
      <section className="why-choose-us-section py-5 px-2" id="why-choose-us">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2 className="display-5 fw-bold animate-on-scroll">Why Choose Us</h2>
              <p className="lead text-muted animate-on-scroll-delay">Key strengths that set us apart</p>
            </div>
          </div>
          <div className="row padding-left-smallscreen-whychooesuse">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="strength-showcase">
                <div className="strength-item " data-aos="fade-up">
                  <div className="strength-number">01</div>
                  <div className="strength-content">
                    <h3>Full-stack expertise</h3>
                    <p>End-to-end development capabilities from frontend to backend, ensuring seamless integration.</p>
                  </div>
                </div>
                <div className="strength-item " data-aos="fade-up">
                  <div className="strength-number">02</div>
                  <div className="strength-content">
                    <h3>Custom design approach</h3>
                    <p>Tailored solutions that reflect your brand identity and business requirements.</p>
                  </div>
                </div>
                <div className="strength-item " data-aos="fade-up">
                  <div className="strength-number">03</div>
                  <div className="strength-content">
                    <h3>Fast delivery</h3>
                    <p>Efficient development process with quick turnaround times without compromising quality.</p>
                  </div>
                </div>
                <div className="strength-item " data-aos="fade-up">
                  <div className="strength-number">04</div>
                  <div className="strength-content">
                    <h3>Responsive & SEO-friendly code</h3>
                    <p>Websites that perform flawlessly across all devices and rank well in search engines.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tech-showcase animate-on-scroll">
                <div className="tech-grid">
                  <div className="tech-item tech-animate">
                    <i className="fab fa-react fa-2x"></i>
                    <span>React</span>
                  </div>
                  <div className="tech-item tech-animate">
                    <i className="fab fa-node-js fa-2x"></i>
                    <span>Node.js</span>
                  </div>
                  <div className="tech-item tech-animate">
                    <i className="fab fa-js-square fa-2x"></i>
                    <span>JavaScript</span>
                  </div>
                  <div className="tech-item tech-animate">
                    <i className="fab fa-html5 fa-2x"></i>
                    <span>HTML5</span>
                  </div>
                  <div className="tech-item tech-animate">
                    <i className="fab fa-css3-alt fa-2x"></i>
                    <span>CSS3</span>
                  </div>
                  <div className="tech-item tech-animate">
                    <i className="fab fa-python fa-2x"></i>
                    <span>Python</span>
                  </div>
                </div>
                <div className="tech-orbit">
                  <div className="orbit-circle">
                    <i className="fas fa-code fa-2x"></i>
                  </div>
                  <div className="orbit-path">
                    <div className="orbit-dot"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="decoration-elements">
          <div className="deco-line"></div>
          <div className="deco-dots"></div>
        </div>
      </section>
      <section className="portfolio-section px-2" id="recent-projects">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2 className="display-5 fw-bold animate-on-scroll">Recent Projects</h2>
              <p className="lead text-light-50 animate-on-scroll">Explore our latest work and achievements</p>
            </div>
          </div>
          <div className="row g-4" data-aos="fade-up" >
            {[
              {
                id: 1,
                title: "E-Commerce Platform",
                category: " Full Stack Development ",
                thubnailimage : thumbnailkirve,
                date: "2024",
                description: "A fully responsive e-commerce platform with integrated payment gateways, inventory management, and admin panel.",
                technologies: ["React", "Firebase", "Bootstrap"],
                link: "https://kirvecollection.com/",
                image: kirve // Replace with actual different images when available
              },
              {
                id: 2,
                title: "Healthcare ",
                category: " Web Development ",
                thubnailimage : thubnailhealthcare,
                date: "2025",
                description: "Showcasing the care, innovation, and services behind modern healthcare solutions.",
                technologies: ["Html", "Javascript", "Boostrap"],
                link: "https://health-care-type-hex.netlify.app/",
                image: healthcare // Replace with actual different images when available
              },
              {
                id: 3,
                title: "Image Converter",
                category: "Web Application",
                thubnailimage : imageconvert,
                date: "2024",
                description: "Easily convert images to your desired format in seconds—fast, simple, and free.",
                technologies: ["React", "javascript", "Boostrap"],
                link: "https://example.com/project3",
                image: imageconvert // Replace with actual different images when available
              },
              {
                id: 4,
                title: "Fitness site",
                category: "Web Development",
                thubnailimage : thumbnailfitness,
                date: "2025",
                description: "Help you reach your fitness goals with personalized training programs, easy-to-follow schedules, and expert guidance from certified trainers—all designed to keep you motivated and on track.",
                technologies: ["Html", "Css", "Boostrap"],
                link: "https://fitnesshub-type-hex.netlify.app/",
                image: fitness // Replace with actual different images when available
              },
              {
                id: 5,
                title: "Educational Platform",
                category: "E-Learning",
                thubnailimage : thubnaildoren,
                date: "2024",
                description: "Learn to code with a wide range of courses designed for beginners to pros—all in one place.",
                technologies: ["React", "Javascript", "Boostrap"],
                link: "https://dorean.solutions/",
                image: dorem // Replace with actual different images when available
              },
              {

                id: 6,
                title: "Portfolio",
                category: "Web Development",
                thubnailimage : portfolio,
                date: "2025",
                description: "A glimpse into my academic journey and professional experience.",
                technologies: ["Javascript", "Html", "Css"],
                link: "https://portfolio-type-hex.netlify.app/",
                image: portfolio // Replace with actual different images when available
              }
            ].map((project) => (
              <div key={project.id} className="col-md-4 col-sm-6 mb-4">
                <div className="portfolio-item portfolio-animate" data-bs-toggle="modal" data-bs-target={`#portfolioModal${project.id}`}>
                  <div className="portfolio-img-container">
                    <img src={project.thubnailimage} alt={project.title} className="img-fluid " />
                    <div className="portfolio-overlay">
                      <div className="portfolio-info">
                        <h4 className="title-fade-in">{project.title}</h4>
                        <p className="category category-slide-up">{project.category}</p>
                        <div className="view-project view-project-pulse">
                          <i className="fas fa-plus"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Modal */}
                <div className="modal fade portfolio-modal " id={`portfolioModal${project.id}`} tabIndex="-1" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row">
                          <div className="col-lg-7">
                            <img src={project.image} alt={project.title} className="  img-fluid rounded modal-image-zoom" />
                          </div>
                          <div className="col-lg-5">
                            <div className="project-details">
                              <h2 className="mb-4">{project.title}</h2>
                              <div className="project-info mb-4">
                         
                                <div className="info-item">
                                  <span className="info-label">Category:</span>
                                  <span className="info-value">{project.category}</span>
                                </div>
                                <div className="info-item">
                                  <span className="info-label">Date:</span>
                                  <span className="info-value">{project.date}</span>
                                </div>
                              </div>
                              <p className="mb-4">{project.description}</p>
                              <div className="tech-stack mb-4">
                                <h5>Technologies Used:</h5>
                                <div className="tech-badges">
                                  {project.technologies.map((tech, index) => (
                                    <span key={index} className="tech-badge tech-badge-animate">{tech}</span>
                                  ))}
                                </div>
                              </div>
                              <a href={project.link} className="btn btn-primary btn-hover-effect" target="_blank" rel="noopener noreferrer">View Live Site</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="testimonials-section px-2">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2 className="display-5 fw-bold animate-on-scroll">Client Testimonials</h2>
              <p className="lead animate-on-scroll">What our clients say about our work</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-4" data-aos="fade-left" >
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <div className="quote-icon">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <p className="testimonial-text">Their team delivered our e-commerce platform ahead of schedule with exceptional attention to detail. The results exceeded our expectations and helped us increase sales by 40%.</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h5>Vaishali Kirve</h5>
                    <p>CEO</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4" data-aos="fade-up" >
              <div className="testimonial-card featured">
                <div className="testimonial-content">
                  <div className="quote-icon">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <p className="testimonial-text">Working with this team was a game-changer for our startup. They understood our vision perfectly and created a website that truly represents our brand. Highly recommended!</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h5>Michael Chen</h5>
                    <p>Founder</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4" data-aos="fade-right" >
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <div className="quote-icon">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <p className="testimonial-text">The redesign of our corporate website was flawless. Their team's expertise in UI/UX design transformed our online presence and helped us attract high-value clients.</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h5>Emily Rodriguez</h5>
                    <p>Marketing Director</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-bg-elements">
          <div className="bg-circle circle-1"></div>
          <div className="bg-circle circle-2"></div>
      
        </div>
      </section>
    <section className="process-section px-2">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2 className="display-5 fw-bold animate-on-scroll">How We Work</h2>
              <p className="lead animate-on-scroll">Our proven development process delivers results</p>
            </div>
          </div>
          <div className="process-timeline">
            <div className="process-step" data-aos="fade-up" >
              <div className="process-number">01</div>
              <div className="process-content">
                <div className="process-icon" data-aos="zoom-in" data-aos-delay="200">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h3>Discovery</h3>
                <p>We start by understanding your business goals, target audience, and project requirements through in-depth consultations.</p>
                <div className="process-connector"></div>
              </div>
            </div>
            <div className="process-step" data-aos="fade-up">
              <div className="process-number">02</div>
              <div className="process-content">
                <div className="process-icon" data-aos="zoom-in" data-aos-delay="200">
                  <i className="fas fa-pencil-ruler"></i>
                </div>
                <h3>Design</h3>
                <p>Our designers create wireframes and visual concepts that align with your brand identity and user experience goals.</p>
                <div className="process-connector"></div>
              </div>
            </div>
            <div className="process-step" data-aos="fade-up" >
              <div className="process-number"  >03</div>
              <div className="process-content" >
                <div className="process-icon" data-aos="zoom-in" data-aos-delay="200">
                  <i className="fas fa-code"></i>
                </div>
                <h3>Development</h3>
                <p>Our development team brings the designs to life with clean, efficient code and cutting-edge technologies.</p>
                <div className="process-connector"></div>
              </div>
            </div>
            <div className="process-step" data-aos="fade-up">
              <div className="process-number">04</div>
              <div className="process-content">
                <div className="process-icon"  data-aos="zoom-in" data-aos-delay="200">
                  <i className="fas fa-vial"></i>
                </div>
                <h3>Testing</h3>
                <p>Rigorous quality assurance ensures your project works flawlessly across all devices and browsers.</p>
                <div className="process-connector"></div>
              </div>
            </div>
            <div className="process-step" data-aos="fade-up">
              <div className="process-number">05</div>
              <div className="process-content" >
                <div className="process-icon" data-aos="zoom-in" data-aos-delay="200">
                  <i className="fas fa-rocket"></i>
                </div>
                <h3>Launch</h3>
                <p>We deploy your project and provide ongoing support to ensure long-term success and performance.</p>
                    <div className="process-connector"></div>
              </div>
            </div>
          </div>
          <div className="process-decoration">
            <div className="floating-shape shape-1"></div>
            <div className="floating-shape shape-2"></div>
            <div className="floating-shape shape-3"></div>
            <div className="floating-dots"></div>
          </div>
        </div>
      </section>  
      <section className="contact-section px-2" id="contact">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8" >
              <h2 className="display-5 fw-bold animate-on-scroll">Let's Build Something Amazing</h2>
              <p className="lead animate-on-scroll">Ready to bring your idea to life? Get in touch with our team today.</p>
            </div>
          </div>
          <div className="row g-5 align-items-center">
            <div className="col-lg-6" data-aos="fade-up">
              <div className="contact-info">
                <div className="contact-message mb-4">
                  <h4 className="fw-bold mb-3">Let's discuss your project</h4>
                  <p className="lead">Ready to transform your digital presence? Our team is here to help you create a stunning website that drives results.</p>
                </div>

                <div className="contact-card highlight-card mb-4">
                  <div className="contact-icon pulse-subtle below-490-hidden-code ">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-details">
                    <h4 className="fw-bold">Email Us</h4>
                    <p className="mb-1 fs-5">typehex126@gmail.com</p>
                    <p className="contact-tagline text-muted"><i className="fas fa-clock me-2"></i>We typically respond within 24 hours</p>
                  </div>
                </div>
                
                <h5 className="mb-3">Connect with us</h5>
                <div className="social-links">
                  <a href="https://wa.me/918208636443" className="social-link" target="_blank" rel="noopener noreferrer" data-aos="zoom-in" data-aos-delay="100"><i className="fab fa-whatsapp"></i></a>
                  <a href="https://www.linkedin.com/in/manas-kirve-aa97432a5/" className="social-link" target="_blank" rel="noopener noreferrer" data-aos="zoom-in" data-aos-delay="200"><i className="fab fa-linkedin-in"></i></a>
                  <a href="https://www.facebook.com/profile.php?id=61576331085036" className="social-link" target="_blank" rel="noopener noreferrer" data-aos="zoom-in" data-aos-delay="300"><i className="fab fa-facebook"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="contact-form-container " >
                <div className="form-header">
                  <div className="form-icon">
                    <i className="fas fa-paper-plane"></i>
                  </div>
                  <h3>Send Us a Message</h3>
                </div>
                <form className="contact-form" action="https://api.web3forms.com/submit" method="POST" onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  
                  // Add a from_name field to help identify where the email is coming from
                  formData.append("from_name", "TypeX Website Contact Form");
                  
                  // Show loading state
                  document.getElementById("submitBtn").disabled = true;
                  document.getElementById("submitBtn").innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                  
                  fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData
                  })
                  .then(response => response.json())
                  .then(data => {
                    if (data.success) {
                      // Create custom success message
                      const successDiv = document.createElement("div");
                      successDiv.className = "custom-alert success-alert";
                      successDiv.innerHTML = `
                        <div class="alert-icon"><i class="fas fa-check-circle"></i></div>
                        <div class="alert-content">
                          <h4>Message Sent!</h4>
                          <p>Thank you for reaching out. We'll get back to you soon.</p>
                        </div>
                        <button class="alert-close" onclick="this.parentElement.remove()"><i class="fas fa-times"></i></button>
                      `;
                      document.body.appendChild(successDiv);
                      setTimeout(() => {
                        if (document.body.contains(successDiv)) {
                          successDiv.classList.add("fade-out");
                          setTimeout(() => successDiv.remove(), 500);
                        }
                      }, 5000);
                      
                      e.target.reset(); // Reset the form
                    } else {
                      // Create custom error message
                      const errorDiv = document.createElement("div");
                      errorDiv.className = "custom-alert error-alert";
                      errorDiv.innerHTML = `
                        <div class="alert-icon"><i class="fas fa-exclamation-circle"></i></div>
                        <div class="alert-content">
                          <h4>Something went wrong</h4>
                          <p>Please try again or contact us directly.</p>
                        </div>
                        <button class="alert-close" onclick="this.parentElement.remove()"><i class="fas fa-times"></i></button>
                      `;
                      document.body.appendChild(errorDiv);
                      setTimeout(() => {
                        if (document.body.contains(errorDiv)) {
                          errorDiv.classList.add("fade-out");
                          setTimeout(() => errorDiv.remove(), 500);
                        }
                      }, 5000);
                    }
                  })
                  .catch(error => {
                    console.error("Error:", error);
                    // Create custom error message
                    const errorDiv = document.createElement("div");
                    errorDiv.className = "custom-alert error-alert";
                    errorDiv.innerHTML = `
                      <div class="alert-icon"><i class="fas fa-exclamation-circle"></i></div>
                      <div class="alert-content">
                        <h4>Connection Error</h4>
                        <p>Please check your internet connection and try again.</p>
                      </div>
                      <button class="alert-close" onclick="this.parentElement.remove()"><i class="fas fa-times"></i></button>
                    `;
                    document.body.appendChild(errorDiv);
                    setTimeout(() => {
                      if (document.body.contains(errorDiv)) {
                        errorDiv.classList.add("fade-out");
                        setTimeout(() => errorDiv.remove(), 500);
                      }
                    }, 5000);
                  })
                  .finally(() => {
                    // Reset button state
                    document.getElementById("submitBtn").disabled = false;
                    document.getElementById("submitBtn").innerHTML = 'Send Message <i class="fas fa-arrow-right ms-2"></i>';
                  });
                }}>
                  <input type="hidden" name="access_key" value="39eb58f1-6a72-4fea-a4ec-b686acbefb69" />
                  <input type="checkbox" name="botcheck" className="hidden" style={{display: "none"}} />
                  
                  {/* Add a subject field that Web3Forms will use for email subject */}
                  <input type="hidden" name="subject" value="New Contact Form Submission from TypeX Website" />
                  
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="floatingName" name="name" placeholder="Your Name" required />
                        <label htmlFor="floatingName">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="email" className="form-control" id="floatingEmail" name="email" placeholder="Your Email" required />
                        <label htmlFor="floatingEmail">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="floatingSubject" name="subject" placeholder="Subject" required />
                        <label htmlFor="floatingSubject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea className="form-control" placeholder="Your Message" id="floatingMessage" name="message" style={{height: "150px"}} required></textarea>
                        <label htmlFor="floatingMessage">Your Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button id="submitBtn" type="submit" className="btn btn-primary btn-lg contact-btn">
                        Send Message
                        <i className="fas fa-arrow-right ms-2"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-decoration">
          <div className="deco-circle circle-1"></div>
          <div className="deco-circle circle-2"></div>
          <div className="deco-line line-1"></div>
          <div className="deco-line line-2"></div>
        </div>
      </section>
    </div>
  )
}

export default Home
