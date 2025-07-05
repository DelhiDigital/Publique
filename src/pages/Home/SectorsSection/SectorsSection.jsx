import React, { useState } from 'react';
import './SectorsSection.css';

const SectorsSection = () => {
  const [showAll, setShowAll] = useState(false);

  const sectors = [
    {
  id: 1,
  title: "PHARMA & HEALTHCARE",
  description: "Solutions tailored for pharmaceutical companies and healthcare organizations to enhance growth, compliance, and patient engagement.",
  image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  color: "#0c5a4c",
  overlayColor: "rgba(51, 51, 51, 0.8)"
},
{
  id: 2,
  title: "CORPORATE",
  description: "Empowering corporate brands with strategic communication and stakeholder engagement for sustainable success.",
  image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  overlayColor: "rgba(51, 51, 51, 0.8)",
  hasArrow: true
},
{
  id: 3,
  title: "FOOD & BEVERAGES",
  description: "Helping food and beverage brands create irresistible identities and lasting connections with consumers.",
  image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  overlayColor: "rgba(51, 51, 51, 0.8)",
  hasArrow: true
},
{
  id: 4,
  title: "EDUCATION",
  description: "Enabling education brands and institutions to build trust, visibility, and impact through modern storytelling.",
  image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  overlayColor: "rgba(51, 51, 51, 0.8)",
  hasArrow: true
},
{
  id: 5,
  title: "AUTOMOBILE",
  description: "Accelerating brand visibility and consumer engagement for automotive innovators and manufacturers.",
  image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  overlayColor: "rgba(51, 51, 51, 0.8)",
  hasArrow: true
},
{
  id: 6,
  title: "STARTUPS",
  description: "Helping startups build credibility, attract investors, and grow through strategic brand communication.",
  image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  overlayColor: "rgba(51, 51, 51, 0.8)",
  hasArrow: true
},
{
  id: 7,
  title: "FINTECH",
  description: "Driving growth for fintech brands through tailored messaging, trust-building, and digital-first campaigns.",
  image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  overlayColor: "rgba(51, 51, 51, 0.8)",
  hasArrow: true
},
{
  id: 8,
  title: "FASHION & LIFESTYLE",
  description: "Creating bold narratives and trend-driven campaigns for fashion and lifestyle brands that inspire and convert.",
  image: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  overlayColor: "rgba(51, 51, 51, 0.8)",
  hasArrow: true
}

    // {
    //   id: 9,
    //   title: "Hospitality",
    //   description: "Creating exceptional guest experiences in the evolving hospitality industry.",
    //   image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    //   overlayColor: "rgba(51, 51, 51, 0.8)",
    //   hasArrow: true
    // },
    // {
    //   id: 10,
    //   title: "Real Estate",
    //   description: "Navigating market trends and opportunities in the dynamic real estate sector.",
    //   image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    //   overlayColor: "rgba(51, 51, 51, 0.8)",
    //   hasArrow: true
    // },
    // {
    //   id: 11,
    //   title: "Automobile",
    //   description: "Driving innovation in the rapidly evolving automotive industry.",
    //   image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    //   overlayColor: "rgba(51, 51, 51, 0.8)",
    //   hasArrow: true
    // },
    // {
    //   id: 12,
    //   title: "E-Commerce",
    //   description: "Optimizing digital retail experiences for today's online shoppers.",
    //   image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    //   overlayColor: "rgba(51, 51, 51, 0.8)",
    //   hasArrow: true
    // }
  ];

  const displayedSectors = showAll ? sectors : sectors.slice(0, 5);

  return (
    <section className="sector-module-section">
      <div className="sector-module-container">
        {/* Added section title */}
        <div className="sector-module-header">
          <h2 className="sector-module-main-title">Sectors </h2>
          <p className="sector-module-subtitle">Specialized expertise across diverse Sectors</p>
        </div>
        
        <div className="sector-module-grid">
          {displayedSectors.map((sector, index) => (
            <div 
              className={`sector-module-card ${index >= 3 && index < 5 ? 'sector-module-wide-card' : ''}`}
              key={sector.id}
              style={sector.color ? { backgroundColor: sector.color } : {}}
            >
              <div className="sector-module-image">
                <img 
                  src={sector.image || "/placeholder.svg"} 
                  alt={sector.title}
                  onError={(e) => {
                    // Fallback to a placeholder if image fails to load
                    e.target.src = `https://via.placeholder.com/800x600?text=${encodeURIComponent(sector.title)}`;
                  }}
                />
                <div className="sector-module-overlay"></div>
                <div 
                  className="sector-module-hover-overlay"
                  style={{ backgroundColor: sector.overlayColor || 'rgba(0, 0, 0, 0.7)' }}
                ></div>
              </div>
              
              <div className="sector-module-content">
                <h3 className="sector-module-title">
                  {sector.title}
                  {sector.hasArrow && <span className="sector-module-arrow-icon">›</span>}
                </h3>
                
                <div className="sector-module-description">
                  <p>{sector.description}</p>
                  {/* Added Read More button to all cards */}
                  {/* <a href="#" className="sector-module-learn-more">
                    Read More <span className="sector-module-circle-arrow">→</span>
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="sector-module-show-all-container">
          <button className="sector-module-show-all-button" onClick={() => setShowAll(!showAll)}>
            <span>See all Sectors</span>
            <span className={`sector-module-button-arrow ${showAll ? "up" : "down"}`}></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;