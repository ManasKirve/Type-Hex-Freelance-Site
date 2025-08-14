import React, { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    // Add a class to the body to indicate JS is loaded
    document.body.classList.add("js-animation-ready");

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add animate-visible class to the container itself
          entry.target.classList.add("animate-visible");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Observe the tech stack containers
    const frontendTechStack = document.getElementById("frontend-tech-stack");
    const backendTechStack = document.getElementById("backend-tech-stack");
    const uiuxTechStack = document.getElementById("uiux-tech-stack");

    if (frontendTechStack) {
      observer.observe(frontendTechStack);
    }

    if (backendTechStack) {
      observer.observe(backendTechStack);
    }

    if (uiuxTechStack) {
      observer.observe(uiuxTechStack);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="">
      <section className="services-hero-section">
        <div className="container px-4">
          <div className="row align-items-center min-vh-50">
            <div className="col-lg-8 mx-auto text-center py-5">
              <h1 className="display-4 fw-bold text-white mb-4 animate-slide-up-delay">
                Our Services
              </h1>
              <p className="lead text-white-50 mb-5 animate-slide-up-delay">
                We build modern, responsive, and scalable websites—from
                beautiful user interfaces to powerful backend systems—all
                tailored to your needs.
              </p>
            </div>
          </div>
        </div>
        <div className="hero-decoration px-4" >
          <div className="floating-element"></div>
          <div className="floating-element secondary"></div>
          <div className="floating-element tertiary"></div>
          <div className="floating-dots"></div>
          <div className="glowing-circle circle-1"></div>
          <div className="glowing-circle circle-2"></div>
          <div className="tech-icon icon-1">
            <i className="fab fa-react"></i>
          </div>
          <div className="tech-icon icon-2">
            <i className="fab fa-js"></i>
          </div>
          <div className="tech-icon icon-3">
            <i className="fab fa-html5"></i>
          </div>
        </div>
      </section>
      <section className="frontend-services-section js-animation-ready px-4">
        <div className="container py-5">
          <div className="row mb-5">
            <div className="col-lg-6 d-flex align-items-center justify-content-center" data-aos="fade-right">

              <div>
                <h2 className="section-title ">Frontend Development</h2>
                <p className="section-subtitle ">
                  Creating beautiful, responsive user interfaces
                </p>
                <div className="tech-stack-container" id="frontend-tech-stack">
                  <div className="tech-badge tech-animate">
                    <i className="fab fa-react"></i> React
                  </div>
                  <div className="tech-badge tech-animate">
                    <i className="fab fa-angular"></i> Angular
                  </div>
                  <div className="tech-badge tech-animate">
                    <i className="fab fa-js"></i> Next.js
                  </div>
                  <div className="tech-badge tech-animate">
                    <i className="fab fa-html5"></i> HTML5
                  </div>
                  <div className="tech-badge tech-animate">
                    <i className="fab fa-css3-alt"></i> CSS3
                  </div>
                  <div className="tech-badge tech-animate">
                    <i className="fab fa-bootstrap"></i> Bootstrap
                  </div>
                  <div className="tech-badge tech-animate">
                    <i className="fab fa-css3"></i> Tailwind
                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-6" data-aos="zoom-in">
              <div className="frontend-image-container">
                <div className="code-window-mini">
                  <div className="code-header-mini">
                    <div className="code-dots-mini">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="code-body-mini">
                    <div className="typing-code">
                      <div className="code-line">import React from 'react';</div>
                      <div className="code-line">import './App.css';</div>
                      <div className="code-line"></div>
                      <div className="code-line">function App() {'{'}</div>
                      <div className="code-line indent">return (</div>
                      <div className="code-line indent2">&lt;div className="app"&gt;</div>
                      <div className="code-line indent3">&lt;h1&gt;Hello World&lt;/h1&gt;</div>
                      <div className="code-line indent3">&lt;p&gt;Welcome to React&lt;/p&gt;</div>
                      <div className="code-line indent2">&lt;/div&gt;</div>
                      <div className="code-line indent">);</div>
                      <div className="code-line">{'}'}</div>
                      <div className="code-line"></div>
                      <div className="code-line">export default App;</div>
                    </div>
                    <div className="framework-logos">
                      <span className="framework-logo react"><i className="fab fa-react"></i></span>
                      <span className="framework-logo angular"><i className="fab fa-angular"></i></span>
                      <span className="framework-logo vue"><i className="fab fa-vuejs"></i></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="services-grid">
                <div className="service-card-mini" data-aos="fade-right">
                  <div className="service-icon-mini">
                    <i className="fas fa-mobile-alt"></i>
                  </div>
                  <h3>Responsive Website Development</h3>
                  <p>
                    Websites that look and function perfectly on all devices -
                    from desktops to smartphones.
                  </p>
                </div>
                <div className="service-card-mini" data-aos="fade-up">
                  <div className="service-icon-mini">
                    <i className="fas fa-globe"></i>
                  </div>
                  <h3>Cross-browser Compatibility</h3>
                  <p>
                    Ensuring your website works flawlessly across Chrome,
                    Firefox, Safari, Edge and other browsers.
                  </p>
                </div>
                <div className="service-card-mini" data-aos="fade-up">
                  <div className="service-icon-mini">
                    <i className="fas fa-film"></i>
                  </div>
                  <h3>Animation & Interactivity</h3>
                  <p>
                    Engaging user experiences with smooth animations and
                    interactive elements that delight visitors.
                  </p>
                </div>
                <div className="service-card-mini" data-aos="fade-left">
                  <div className="service-icon-mini">
                    <i className="fas fa-ruler-combined"></i>
                  </div>
                  <h3>Pixel-perfect Implementation</h3>
                  <p>
                    Precise translation of Figma designs into functional
                    websites with meticulous attention to detail.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="backend-services-section px-4">
        <div className="container py-5">
          <div className="row mb-5">
            <div className="col-lg-6 small-margin-backend" data-aos="zoom-in">
              <div className="backend-image-container">
                <div className="server-rack">
                  <div className="server-unit">
                    <div className="server-lights">
                      <span className="light blink"></span>
                      <span className="light on"></span>
                      <span className="light blink-slow"></span>
                    </div>
                  </div>
                  <div className="server-unit">
                    <div className="server-lights">
                      <span className="light on"></span>
                      <span className="light blink-slow"></span>
                      <span className="light on"></span>
                    </div>
                  </div>
                  <div className="server-unit">
                    <div className="server-lights">
                      <span className="light blink"></span>
                      <span className="light on"></span>
                      <span className="light blink"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center justify-content-center" data-aos="fade-left">
              <div>
                <h2 className="section-title animate-slide-up-delay">
                  Backend Development
                </h2>
                <p className="section-subtitle animate-slide-up-delay">
                  Powerful server-side solutions for your applications
                </p>
                <div className="tech-stack-container" id="backend-tech-stack">
                  <div className="tech-badge backend-badge tech-animate">
                    <i className="fab fa-node-js"></i> Node.js
                  </div>
                  <div className="tech-badge backend-badge tech-animate">
                    <i className="fab fa-php"></i> PHP
                  </div>
                  <div className="tech-badge backend-badge tech-animate">
                    <i className="fab fa-python"></i> Python
                  </div>
                  <div className="tech-badge backend-badge tech-animate">
                    <i className="fas fa-database"></i> MySQL
                  </div>
                  <div className="tech-badge backend-badge tech-animate">
                    <i className="fas fa-server"></i> APIs
                  </div>
                  <div className="tech-badge backend-badge tech-animate">
                    <i className="fas fa-cloud"></i> Cloud
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="services-grid">
                <div
                  className="service-card-mini backend-card"
                  data-aos="fade-right" >
                  <div className="service-icon-mini backend-icon">
                    <i className="fas fa-tachometer-alt"></i>
                  </div>
                  <h3>Custom CMS or Admin Dashboards</h3>
                  <p>
                    Tailored content management systems and admin interfaces
                    that make managing your digital content effortless.
                  </p>
                </div>
                <div
                  className="service-card-mini backend-card"
                  data-aos="zoom-in"
                >
                  <div className="service-icon-mini backend-icon">
                    <i className="fas fa-exchange-alt"></i>
                  </div>
                  <h3>RESTful API Development</h3>
                  <p>
                    Robust and well-documented APIs that connect your
                    applications and enable seamless data exchange.
                  </p>
                </div>
                <div
                  className="service-card-mini backend-card"
                  data-aos="zoom-in"
                >
                  <div className="service-icon-mini backend-icon">
                    <i className="fas fa-user-shield"></i>
                  </div>
                  <h3>Secure User Authentication</h3>
                  <p>
                    Implementing industry-standard authentication systems to
                    keep your users' data safe and secure.
                  </p>
                </div>
                <div
                  className="service-card-mini backend-card"
                  data-aos="fade-left"
                >
                  <div className="service-icon-mini backend-icon">
                    <i className="fas fa-database"></i>
                  </div>
                  <h3>Scalable Database Architecture</h3>
                  <p>
                    Designing efficient database structures that grow with your
                    business and maintain performance at scale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="uiux-services-section px-4">
        <div className="container py-5">
          <div className="row mb-5">
            <div className="col-lg-6 d-flex align-items-center justify-content-center" data-aos="fade-right">

              <div>
                <h2 className="section-title pb-1 uiux-title animate-slide-up-delay">
                  UI/UX Design
                </h2>
                <p className="section-subtitle uiux-subtitle animate-slide-up-delay">
                  Creating intuitive and engaging user experiences
                </p>
                <div className="tech-stack-container" id="uiux-tech-stack">
                  <div className="tech-badge uiux-badge tech-animate">
                    <i className="fab fa-figma"></i> Figma
                  </div>
                  <div className="tech-badge uiux-badge tech-animate">
                    <i className="fas fa-pencil-ruler"></i> Sketch
                  </div>
                  <div className="tech-badge uiux-badge tech-animate">
                    <i className="fas fa-palette"></i> Adobe XD
                  </div>
                  <div className="tech-badge uiux-badge tech-animate">
                    <i className="fas fa-swatchbook"></i> InVision
                  </div>
                  <div className="tech-badge uiux-badge tech-animate">
                    <i className="fas fa-image"></i> Photoshop
                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-6" data-aos="zoom-in">
              <div className="uiux-image-container">
                <div className="design-elements">
                  <div className="wireframe-element">
                    <div className="wireframe-header"></div>
                    <div className="wireframe-body pt-5">
                      <div className="diagram-animation-container">
                        <div className="diagram-line wireframe-header " data-aos="zoom-in"></div>
                        <div className="diagram-line wireframe-row1-big" data-aos="zoom-in"></div>
                        <div className="diagram-line wireframe-row1-small" data-aos="zoom-in"></div>
                        <div className="diagram-line wireframe-row2-div1" data-aos="zoom-in"></div>
                        <div className="diagram-line wireframe-row2-div2" data-aos="zoom-in"></div>
                        <div className="diagram-line wireframe-row2-div3" data-aos="zoom-in"></div>
                        <div className="diagram-line wireframe-row3-small" data-aos="zoom-in"></div>
                        <div className="diagram-line wireframe-row3-big" data-aos="zoom-in"></div>

                      </div>
                    </div>
                  </div>
                  <div className="color-palette">
                    <div className="color-swatch swatch-1"></div>
                    <div className="color-swatch swatch-2"></div>
                    <div className="color-swatch swatch-3"></div>
                    <div className="color-swatch swatch-4"></div>
                  </div>
                  <div className="prototype-element">
                    <div className="prototype-screen"></div>
                    <div className="prototype-arrow"></div>
                    <div className="prototype-screen secondary"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="services-grid">
                <div
                  className="service-card-mini uiux-card"
                  data-aos="fade-right"
                >
                  <div className="service-icon-mini uiux-icon">
                    <i className="fas fa-pencil-alt"></i>
                  </div>
                  <h3>Wireframing</h3>
                  <p>
                    Creating the blueprint of your digital product with clear
                    information architecture and user flows.
                  </p>
                </div>
                <div
                  className="service-card-mini uiux-card"
                  data-aos="fade-right"
                >
                  <div className="service-icon-mini uiux-icon">
                    <i className="fas fa-project-diagram"></i>
                  </div>
                  <h3>Prototyping</h3>
                  <p>
                    Building interactive models that simulate the user
                    experience before development begins.
                  </p>
                </div>
                <div
                  className="service-card-mini uiux-card"
                  data-aos="fade-left"
                >
                  <div className="service-icon-mini uiux-icon">
                    <i className="fas fa-users"></i>
                  </div>
                  <h3>User-centric Design</h3>
                  <p>
                    Designing with your users in mind, focusing on
                    accessibility, usability, and delight.
                  </p>
                </div>
                <div
                  className="service-card-mini uiux-card"
                  data-aos="fade-left"
                >
                  <div className="service-icon-mini uiux-icon">
                    <i className="fas fa-mobile-alt"></i>
                  </div>
                  <h3>Mobile-first Layout</h3>
                  <p>
                    Prioritizing the mobile experience to ensure your design
                    works beautifully on all devices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq-section px-4">
        <div className="container py-5" data-aos="fade-up">
          <div className="row text-center mb-5">
            <div className="col-lg-8 mx-auto">
              <h2 className="section-title faq-title animate-slide-up-delay text-start ">
                Frequently Asked  Questions
              </h2>
              <p className="below590px-text-start section-subtitle  faq-subtitle animate-slide-up-delay">
                Answers to common questions about our services
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="accordion faq-accordion" id="faqAccordion">
                <div className="accordion-item faq-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button faq-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <i className="fas fa-clock faq-icon"></i>
                      How long does a project take?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body faq-body">
                      <p>
                        Project timelines vary based on complexity and scope. A
                        simple website might take 2-4 weeks, while more complex
                        applications can take 2-3 months. During our initial
                        consultation, we'll provide a detailed timeline based on
                        your specific requirements.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item faq-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button faq-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <i className="fas fa-sync-alt faq-icon"></i>
                      Can you redesign my existing website?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body faq-body">
                      <p>
                        Absolutely! We specialize in website redesigns that
                        improve both aesthetics and functionality. We'll analyze
                        your current site, identify areas for improvement, and
                        create a modern, responsive design that aligns with your
                        brand and business goals.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item faq-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button faq-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <i className="fas fa-tools faq-icon"></i>
                      Do you offer ongoing maintenance?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body faq-body">
                      <p>
                        Yes, we offer flexible maintenance packages to keep your
                        website secure, up-to-date, and performing optimally.
                        Our maintenance services include regular updates,
                        security monitoring, performance optimization, and
                        technical support.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item faq-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button faq-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      <i className="fas fa-dollar-sign faq-icon"></i>
                      What is your pricing structure?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body faq-body">
                      <p>
                        We provide customized quotes based on your project
                        requirements. Our pricing is transparent with no hidden
                        fees. We can work with fixed-price contracts for
                        well-defined projects or time-and-materials billing for
                        more flexible engagements.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item faq-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button faq-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      <i className="fas fa-laptop-code faq-icon"></i>
                      Do I need to provide content for my website?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body faq-body">
                      <p>
                        While you can provide your own content, we also offer
                        professional copywriting services to help craft
                        compelling messages that engage your audience. We can
                        also assist with sourcing high-quality images and
                        creating custom graphics for your site.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
