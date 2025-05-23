import "./ServicesSectionWithIcons.css"
import { Handshake, NotepadText, BadgeIndianRupee, Framer, BookUser, Calendar } from "lucide-react"

const services = [
  {
    name: "Public Relations & Strategic Communications",
    icon: <Handshake size={32} />,
    link: "/services/PublicRelations&StrategicCommunications",
  },
  {
    name: "Content Creation & Copywriting",
    icon: <NotepadText size={32} />,
    link: "/services/ContentCreation&Copywriting",
  },
  { name: "Marketing & Advertising", icon: <BadgeIndianRupee size={32} />, link: "/services/Marketing&Advertising" },
  { name: "Design & Branding", icon: <Framer size={32} />, link: "/services/Design&Branding" },
  {
    name: "Influencer & Social Media Strategy",
    icon: <BookUser size={32} />,
    link: "/services/Influencer&SocialMediaStrategy",
  },
  { name: "Event Management", icon: <Calendar size={32} />, link: "/services/EventManagement" },
]

const ServicesSectionWithIcons = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        {services.map((service, index) => (
          <a href={service.link} key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.name}</h3>
          </a>
        ))}
      </div>
    </section>
  )
}

export default ServicesSectionWithIcons
