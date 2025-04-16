import React from 'react';
import './ServicesSectionWithIcons.css';
import { Network, Server, Shield, Cog, PenTool, Speaker } from 'lucide-react';

const services = [
  { name: "Public Relations & Strategic Communications", icon: <Network size={40} color="white" />, link: "/services/PublicRelations&StrategicCommunications" },
  { name: "Content Creation & Copywriting", icon: <Server size={40} color="white" />, link: "/services/ContentCreation&Copywriting" },
  { name: "Marketing & Advertising", icon: <Shield size={40} color="white" />, link: "/services/Marketing&Advertising" },
  { name: "Design & Branding", icon: <Cog size={40} color="white" />, link: "/services/Design&Branding" },
  { name: "Influencer & Social Media Strategy", icon: <PenTool size={40} color="white" />, link: "/services/Influencer&SocialMediaStrategy" },
  { name: "Event Management", icon: <Speaker size={40} color="white" />, link: "/services/EventManagement" }
];

const ServicesSectionWithIcons = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        {services.map((service, index) => (
          <a href={service.link} key={index} className="service-card">
            <div className="icon-circle">
              {service.icon} {/* Render the icon directly here */}
            </div>
            <h3>{service.name}</h3>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ServicesSectionWithIcons;
