import React from 'react';
import '../Home/ExpertiesSection/ExpertiesSection.css'; // Assuming you have a CSS file for styling
import OurExpertiseBanner from './OurExpertiseBanner/OurExpertiseBanner';

const ExpertiseSection = () => {
  const expertiseData = [
   {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          <polygon points="12 7 14 11 18 12 15 15 16 19 12 17 8 19 9 15 6 12 10 11 12 7"></polygon>
        </svg>
      ),
      title: "Media Relations",
      description: "Builds relationships with journalists and media outlets."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          <path d="M14 9l2 2-6 6-2-2 6-6z"></path>
        </svg>
      ),
      title: "Crisis Communications",
      description: "Manages communication during emergencies or crises."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 2v4"></path>
          <path d="M16 2v4"></path>
          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
          <path d="M3 10h18"></path>
          <path d="M8 14h.01"></path>
          <path d="M12 14h.01"></path>
          <path d="M16 14h.01"></path>
          <path d="M8 18h.01"></path>
          <path d="M12 18h.01"></path>
          <path d="M16 18h.01"></path>
        </svg>
      ),
      title: "Digital PR",
      description: "Utilizes online platforms for reputation management and brand awareness."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
          <path d="m7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      ),
      title: "Event PR",
      description: "Promotes events and manages related communications."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M12 1v6m0 6v6"></path>
          <path d="m21 12-6-3-6 3-6-3"></path>
        </svg>
      ),
      title: "Influencer PR",
      description: "Partners with influencers for brand promotion."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      ),
      title: "Reputation Management",
      description: "Monitors and maintains a positive public image."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 1v6m0 6v6"></path>
          <path d="m21 12-6-3-6 3-6-3"></path>
        </svg>
      ),
      title: "Social Media PR",
      description: "Manages social media presence and engagement."
    }
  ];

  return (
    <>
    <OurExpertiseBanner />
    <section className="expertise-section">
      <h2 className="expertise-title">Our Expertise</h2>
      <div className="expertise-container">
        {expertiseData.map((item, index) => (
          <div className="expertise-card" key={index}>
            <div className="expertise-icon">
              {item.icon}
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href="/contact" className="expertise-link">Explore More</a>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default ExpertiseSection;