import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './menu.css';
import { FaFacebook, FaLinkedin, FaYoutube, FaBars, FaTimes, FaChevronDown, FaInstagram } from 'react-icons/fa';
import { Handshake, NotepadText, PhoneCall, MailIcon, BadgeIndianRupee, Framer, BookUser, Calendar } from 'lucide-react';

const Menu = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenus, setActiveMenus] = useState({});
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const toggleSubmenu = (key) => {
    if (isMobile) {
      setActiveMenus(prev => ({
        ...prev,
        [key]: !prev[key]
      }));
    }
  };

  const handleMobileMenuItemClick = () => {
    // Close the mobile menu when a menu item is clicked
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleSubmenuItemClick = () => {
    // Close the mobile menu when a submenu item is clicked
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const services = [
    { icon: <Handshake size={40} />, title: 'Public Relations & Strategic Communications', path: '/services/PublicRelations&StrategicCommunications' },
    { icon: <NotepadText size={40} />, title: 'Content Creation & Copywriting', path: '/services/ContentCreation&Copywriting' },
    { icon: <BadgeIndianRupee size={40} />, title: 'Marketing & Advertising', path: '/services/Marketing&Advertising' },
    { icon: <Framer size={40} />, title: 'Design & Branding', path: '/services/Design&Branding' },
    { icon: <BookUser size={40} />, title: 'Influencer & Social Media Strategy', path: '/services/Influencer&SocialMediaStrategy' },
    { icon: <Calendar size={40} />, title: 'Event Management', path: '/services/EventManagement' }
  ];

  // const scrollToCaseStudy = () => {
  //   console.log("Scrolling to connect section");
  //   // Scroll to the connect section smoothly

  //   const section = document.querySelector('.case-studies-container');
  //   if (!section) {
  //     console.log("Section not found");

  //   }
  //   if (section) {

  //     section.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <>
      {/* <div className="top-bar">
        <div className="social-links">
          <Link to="#"><FaFacebook /></Link>
          <Link to="#"><FaInstagram /></Link>
          <Link to="#"><FaLinkedin /></Link>
          <Link to="#"><FaYoutube /></Link>
        </div>
        <div className="contact-info">
          <a href="tel:+02249185900"><PhoneCall size={18} />+91-11-49700111</a>
          <a href="mailto:info@lexiconindia.com"><MailIcon size={18} /> info@Publiqua.com</a>
        </div>
      </div> */}

      <header className="main-header">
        <div className="container">
          <div className="menuLogo">
            <Link to="/">
              <img src="/assets/logo.png" alt="Publiqua" />
            </Link>
          </div>

          {isMobile ? (
            <div className="mobile-nav">
              <button className="menu-toggle" onClick={toggleMenu}>
                <FaBars />
              </button>
            </div>
          ) : (
            <nav className="desktop-nav">
              <ul className="main-menu">
                {/* <li className={`menu-item ${isActive('/') ? 'active' : ''}`}>
                  <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
                </li> */}
                <li className={`menu-item ${isActive('/about') ? 'active' : ''}`}>
                  <Link to="/about" className={isActive('/about') ? 'active' : ''}>About Us</Link>
                </li>
                
                <li className={`menu-item ${isActive('/Ourexpertise') ? 'active' : ''}`}>
                  <Link to="/Ourexpertise" className={isActive('/Ourexpertise') ? 'active' : ''}>Our expertise</Link>
                </li>

                <li className={`menu-item ${location.pathname.includes('/services') ? 'active' : ''}`}>
                  <span className="menu-label">
                    Services <FaChevronDown className="dropdown-icon" />
                  </span>
                  <ul className="submenu">
                    {services.map((service) => (
                      <li key={service.path} className={`submenu-item ${isActive(service.path) ? 'active' : ''}`}>
                        <Link to={service.path}>
                          <span className="service-icon">{service.icon}</span>
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                {/* <li className={`menu-item ${isActive('/career') ? 'active' : ''}`}>
                  <Link to="/career" className={isActive('/career') ? 'active' : ''}>Careers</Link>
                </li> */}
                <li className={`menu-item`}>
                  <Link to="/" state={{ scrollTo: 'case-studies' }}>
                    Case Studies
                  </Link>
                </li>
                <li className={`menu-item ${isActive('/contact') ? 'active' : ''}`}>
                  <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </header>

      {isMobile && (
        <>
          <div className={`mobile-menu-container ${isMenuOpen ? 'open' : ''}`}>
            <div className="mobile-menu-header">
              <div className="menuLogo">
                <Link to="/">
                  <img src="/assets/logo.png" alt="Lexicon" />
                </Link>
              </div>
              <button className="close-menu" onClick={toggleMenu}>
                <FaTimes />
              </button>
            </div>
            <nav className="mobile-menu">
              <ul>
                <li className={`mobile-menu-item ${isActive('/') ? 'active' : ''}`}>
                  <Link to="/" onClick={handleMobileMenuItemClick} className={isActive('/') ? 'active' : ''}>Home</Link>
                </li>
                <li className={`mobile-menu-item ${isActive('/about') ? 'active' : ''}`}>
                  <Link to="/about" onClick={handleMobileMenuItemClick} className={isActive('/about') ? 'active' : ''}>About Us</Link>
                </li>
                <li className={`mobile-menu-item has-submenu ${location.pathname.includes('/services') ? 'active' : ''}`}>
                  <div
                    className="menu-item-header"
                    onClick={() => toggleSubmenu('services')}
                  >
                    <span>Services</span>
                    <FaChevronDown className={`dropdown-icon ${activeMenus['services'] ? 'open' : ''}`} />
                  </div>
                  {activeMenus['services'] && (
                    <ul className="mobile-submenu">
                      {services.map((service) => (
                        <li key={service.path} className={`mobile-submenu-item ${isActive(service.path) ? 'active' : ''}`}>
                          <Link to={service.path} onClick={handleSubmenuItemClick}>
                            <span className="service-icon">{service.icon}</span>
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li className={`mobile-menu-item ${isActive('/career') ? 'active' : ''}`}>
                  <Link to="/career" onClick={handleMobileMenuItemClick} className={isActive('/career') ? 'active' : ''}>Careers</Link>
                </li>
                <li className={`mobile-menu-item ${isActive('/contact') ? 'active' : ''}`}>
                  <Link to="/contact" onClick={handleMobileMenuItemClick} className={isActive('/contact') ? 'active' : ''}>Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} />
        </>
      )}
    </>
  );
};

export default Menu;