import React, { useState } from 'react';
// 1) Import Bootstrap CSS and JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'; // Your custom styling
import logo from './logo.png';
import nasa from './nasa.jpg';
import pentest from './pentest.jpg';
import bugFix from './bug-fixing.jpg';
import global from './global.jpg';
import support from './support.jpg';
import consultation from './consultation.jpg';
import logoSmall from './logo-lanscape.png';
import emailjs from 'emailjs-com'; // at the top
// Divider Component
function Divider() {
  return <div className="section-divider"></div>;
}

// Popup Component for Free Security Test Request
function SecurityTestPopup({ onClose }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceID = 'service_yri394g';
    const templateID = 'template_qdjo48j';
    const publicKey = 'dUtebAaseBjOmN2le';

    const templateParams = {
      user_email: email,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitted(true);
      }, (err) => {
        console.log('FAILED...', err);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>X</button>
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <h3>Request a Free Security Test</h3>
            <p>Please enter your email below. We will get back to you shortly.</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <button type="submit">Submit</button>
          </form>
        ) : (
          <div>
            <h3>Thank You!</h3>
            <p>We've received your request. Please wait for our response.</p>
            <button onClick={onClose}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
}

// Navbar Component
function Navbar() {
  return (
    // 2) Use .navbar-dark and .bg-dark for a white toggle icon
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#hero">
          <img src={logoSmall} alt="BugOutX Logo" style={{ maxHeight: '80px' }} />
        </a>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon" />
      </button> */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><a className="nav-link" href="#hero">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#who-we-are">Who We Are</a></li>
            <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#features">Features</a></li>
            <li className="nav-item"><a className="nav-link" href="#why-choose-us">Why Choose Us</a></li>
            <li className="nav-item"><a className="nav-link" href="#testimonials">Testimonials</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav >
  );
}

// Hero Section Component
function Hero({ onRequestSecurityTest }) {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Zero Bugs. Maximum Security.</h1>
        <p className="hero-main">
          Cybersecurity & Bug-Fixing Solutions for SaaS, FinTech & E-commerce
        </p>
        <button className="btn btn-hero" onClick={onRequestSecurityTest}>
          Request a Free Security Test
        </button>
        <p className="hero-description">
          Enter your email and we will get back to you with more details.
        </p>
      </div>
    </section>
  );
}

function WhoWeAre() {
  return (
    <section id="who-we-are">
      <div className="container">
        <h2 className="section-title">Who We Are</h2>
        <div className="row align-items-center">
          {/* Text Column */}
          <div className="col-lg-6">
            <p>
              BugOutX is a cybersecurity and bug-fixing company committed to empowering businesses
              with ironclad security, seamless performance, and bug-free software. Founded by experienced
              security experts and full-stack developers, our mission is to detect vulnerabilities and
              fix issues before they lead to costly breaches—ensuring your digital operations remain
              robust and efficient.
            </p>
          </div>
          {/* Image Column */}
          <div className="col-lg-6 text-center">
            <img
              src={logoSmall}
              alt="BugOutX Logo"
              className="who-we-are-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-dark">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="row">
          {/* Service 1 */}
          <div className="col-md-4">
            <div className="service-box">
              <img src={pentest} alt="Penetration Testing" />
              <h4>Penetration Testing</h4>
              <p>
                Our ethical hackers simulate attacks to identify vulnerabilities in your web applications, APIs, and networks.
              </p>
            </div>
          </div>
          {/* Service 2 */}
          <div className="col-md-4">
            <div className="service-box">
              <img src={bugFix} alt="Bug Fixing & Debugging" />
              <h4>Bug Fixing & Debugging</h4>
              <p>
                We rapidly resolve security flaws, logical errors, and performance bottlenecks to keep your systems running smoothly.
              </p>
            </div>
          </div>
          {/* Service 3 */}
          <div className="col-md-4">
            <div className="service-box">
              <img src={consultation} alt="Performance Optimization" style={{ maxHeight: '320px' }} />
              <h4>Performance Optimization</h4>
              <p>
                Our team optimizes your code and infrastructure to ensure peak performance and scalability as your business grows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="bg-dark">
      <div className="container">
        <h2 className="section-title">Our Features</h2>
        <div className="row">
          {/* Feature 1 */}
          <div className="col-md-6">
            <div className="service-box">
              <img src={global} alt="Global Reach" />
              <h4>Global Reach</h4>
              <p>
                No matter where you are, BugOutX has you covered with our worldwide network of security experts.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="col-md-6">
            <div className="service-box">
              <img src={support} alt="24/7 Support" />
              <h4>24/7 Support</h4>
              <p>
                Our virtual assistance is available around the clock to address any security concerns promptly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-dark">
      <div className="container">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="row">
          <div className="col-md-12 text-center">
            <p style={{ fontSize: '1.5rem', color: '#ccc' }}>
              With a proven track record and an expert team, BugOutX is your trusted partner in cybersecurity.
              We deliver rapid, cost-effective solutions that safeguard your business and drive success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container">
        <h2 className="section-title">Client Testimonials</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="testimonial-box">
              <p>
                "BugOutX saved us from a critical security flaw that could have cost us thousands. Their expertise and
                rapid response are unparalleled."
              </p>
              <p className="client">- Alex M., CTO, SaaS Startup</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="testimonial-box">
              <p>
                "We experienced a remarkable improvement in system performance after BugOutX's intervention.
                Their professionalism is unmatched."
              </p>
              <p className="client">- Sarah L., E-commerce Founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Let's Work Together!</h2>
        <p>Book a free consultation with our cybersecurity experts.</p>
        <p><strong>Phone:</strong> +963 0936324541</p>
        <p><strong>Email:</strong> info@bugout-x.com</p>
        <a href="mailto:info@bugout-x.com" className="btn btn-contact">Contact Us</a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container">
        <p>&copy; 2025 BugOutX. All Rights Reserved.</p>
        <p>
          Follow us:
          {/* <a href="#">Facebook</a> |
          <a href="#">Twitter</a> | */}
          <a href="https://www.linkedin.com/company/bugoutx">LinkedIn</a>
        </p>
      </div>
    </footer>
  );
}

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const handleRequestSecurityTest = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <Navbar />
      <Hero onRequestSecurityTest={handleRequestSecurityTest} />
      <Divider />
      <WhoWeAre />
      <Divider />
      <Services />
      <Divider />
      <Features />
      <Divider />
      <WhyChooseUs />
      <Divider />
      <Testimonials />
      <Divider />
      <Contact />
      <Footer />
      {showPopup && <SecurityTestPopup onClose={handleClosePopup} />}
    </div>
  );
}

export default App;
