import React, { useState, useEffect, useRef } from 'react';
import './footer.css';
import { Phone, Mail, MapPin, X, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom'; // Using react-router-dom

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPosition = window.scrollY;
      const progress = (scrollPosition / scrollTotal) * 100;

      setScrollProgress(progress);

      if (scrollPosition > window.innerHeight) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (showPopup) {
      gsap.fromTo(
        popupRef.current,
        { x: 300, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }
      );
    }
  }, [showPopup]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToCaseStudy = () => {
    console.log("Scrolling to connect section");
    // Scroll to the connect section smoothly
    
    const section = document.querySelector('.case-studies-container');
    if(!section){
      console.log("Section not found");
      
    }
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-section">
      <div className="footer-main">
        <div className="footer-company">
          <h2 className="company-logo">Publiqua</h2>
          <p className="company-description">
            Publiqua Pvt. Ltd.<br />
            Saket New Delhi,<br />
            Delhi, India 110044.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <Phone size={18} />
              <a href="tel:+919769878878">+91-11-49700111</a>
            </div>
            <div className="contact-item">
              <Mail size={18} />
              <a href="mailto:info@lexiconindia.com">info@Publiqua.com</a>
            </div>
          </div>
        </div>

        <div className="footer-quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><ChevronRight size={14} /><Link to="/">Home</Link></li>
            <li><ChevronRight size={14} /><Link to="/about">About Us</Link></li>
            <li><ChevronRight size={14}/><Link to="/" state={{ scrollTo: 'case-studies' }}> Case Studies </Link></li>
            <li><ChevronRight size={14} /><Link to="/Ourexpertise">Our Expertise</Link></li>
            <li><ChevronRight size={14} /><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-services">
          <h3>Services</h3>
          <ul>
            <li><ChevronRight size={14} /><Link to="/services/pr">Public Relations & Strategic Communications</Link></li>
            <li><ChevronRight size={14} /><Link to="/services/content">Content Creation & Copywriting</Link></li>
            <li><ChevronRight size={14} /><Link to="/services/marketing">Marketing & Advertising</Link></li>
            <li><ChevronRight size={14} /><Link to="/services/design">Design & Branding</Link></li>
            <li><ChevronRight size={14} /><Link to="/services/social">Influencer & Social Media Strategy</Link></li>
            <li><ChevronRight size={14} /><Link to="/services/events">Event Management</Link></li>
          </ul>
        </div>

        {/* <div className="footer-newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter for the latest updates.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Your Email Address" />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div> */}
      </div>

      <div className="footer-bottom">
        <p>
          For Corporate Enquiries Call:
          <a href="tel:+919769878878">+91-11-49700111</a> 
          {/* <span className="request-demo" onClick={() => setShowPopup(true)}> Request A Demo</span> */}
          <br />©2025 Publiqua Pvt. Ltd. All Rights Reserved.
        </p>
        <div className="legal-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/disclaimer">Disclaimer</Link>
        </div>
      </div>

      {/* {showScrollTop && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <div className="progress-circle" style={{ background: `conic-gradient(white ${scrollProgress}%, transparent 0)` }}>
            <span className="arrow">⬆️</span>
          </div>
        </div>
      )}

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content" ref={popupRef}>
            <button className="close-button" onClick={() => setShowPopup(false)}>
              <X size={20} />
            </button>
            <h3>Request A Demo</h3>
            <form
              method="POST"
              encType="multipart/form-data"
            >
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />
              <input type="tel" name="phone" placeholder="Phone" required />
              <textarea name="message" placeholder="Message" required></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )} */}
    </footer>
  );
};

export default Footer;