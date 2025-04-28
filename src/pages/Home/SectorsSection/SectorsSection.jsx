import React, { useState } from 'react';
import './SectorsSection.css';

const SectorsSection = () => {
  const [showAll, setShowAll] = useState(false);

  const sectors = [
    {
      id: 1,
      title: "Startups Development",
      description: "Driving growth and adoption while managing risks in rapid scaling markets.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      color: "#0c5a4c",
      overlayColor: "rgba(12, 90, 76, 0.85)"
    },
    {
      id: 2,
      title: "Healthcare",
      description: "Innovative solutions for healthcare providers and patients in a rapidly evolving industry.",
      // Updated Healthcare image URL
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      overlayColor: "rgba(72, 49, 157, 0.8)",
      hasArrow: true
    },
    {
      id: 3,
      title: "Consumer Brand",
      description: "Building memorable brand experiences that resonate with modern consumers.",
      image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      overlayColor: "rgba(0, 0, 0, 0.75)",
      hasArrow: true
    },
    {
      id: 4,
      title: "Leadership",
      description: "Developing effective leadership strategies for today's complex business environment.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      overlayColor: "rgba(51, 51, 51, 0.8)",
      hasArrow: true
    },
    {
      id: 5,
      title: "Workplace",
      description: "Creating productive and engaging workplace environments for the modern workforce.",
      image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      overlayColor: "rgba(12, 90, 76, 0.85)",
      hasArrow: true
    },
    {
      id: 6,
      title: "Public and Govt Affairs",
      description: "Strategic communication for public sector and government relations.",
      image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      overlayColor: "rgba(0, 48, 73, 0.8)",
      hasArrow: true
    },
    {
      id: 7,
      title: "Education",
      description: "Transforming educational experiences through innovative approaches and technologies.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      overlayColor: "rgba(153, 102, 0, 0.8)",
      hasArrow: true
    },
    {
      id: 8,
      title: "AI Technology",
      description: "Leveraging artificial intelligence to drive business transformation and innovation.",
      // Updated AI Technology image URL
      image: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      overlayColor: "rgba(72, 49, 157, 0.8)",
      hasArrow: true
    },
    {
      id: 9,
      title: "Hospitality",
      description: "Creating exceptional guest experiences in the evolving hospitality industry.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      overlayColor: "rgba(153, 51, 51, 0.8)",
      hasArrow: true
    },
    {
      id: 10,
      title: "Real Estate",
      description: "Navigating market trends and opportunities in the dynamic real estate sector.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      overlayColor: "rgba(51, 102, 153, 0.8)",
      hasArrow: true
    },
    {
      id: 11,
      title: "Automobile",
      description: "Driving innovation in the rapidly evolving automotive industry.",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      overlayColor: "rgba(204, 51, 0, 0.8)",
      hasArrow: true
    },
    {
      id: 12,
      title: "E-Commerce",
      description: "Optimizing digital retail experiences for today's online shoppers.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      overlayColor: "rgba(0, 102, 102, 0.8)",
      hasArrow: true
    }
  ];

  const displayedSectors = showAll ? sectors : sectors.slice(0, 5);

  return (
    <section className="sector-module-section">
      <div className="sector-module-container">
        {/* Added section title */}
        <div className="sector-module-header">
          <h2 className="sector-module-main-title">Across Industries </h2>
          <p className="sector-module-subtitle">Specialized expertise across diverse industries</p>
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
                  <a href="#" className="sector-module-learn-more">
                    Read More <span className="sector-module-circle-arrow">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="sector-module-show-all-container">
          <button className="sector-module-show-all-button" onClick={() => setShowAll(!showAll)}>
            <span>See all sectors</span>
            <span className={`sector-module-button-arrow ${showAll ? "up" : "down"}`}></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;