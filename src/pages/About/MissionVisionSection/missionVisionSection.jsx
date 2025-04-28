import './missionVisionSection.css';

 
const missionVisionSection = () => {
  return (
    <div className="missionVisionSection-container">
      {/* About Company */}
      <section id="about-our-company" className="missionVisionSection-section missionVisionSection-split-background">
        <div className="missionVisionSection-image-container">
          <img src="/assets/About1.jpg" alt="About" />
        </div>
        <div className="missionVisionSection-content">
          <h1>Our Story</h1>
          <p>
            At <strong>Publiqua</strong>, we believe in the power of storytelling to shape perceptions, 
            drive engagement, and inspire action. We are a strategic communications consulting firm built
            on the principle of intentional storytelling  rooted in insight, shaped by creativity, and 
            driven by results. Our work begins with deep listening. We take the time to understand your 
            brand, your goals, your challenges and then design communications strategies that  speak 
            to your audience with clarity and impact.
            
          </p>
          <p>
          From navigating complex PR landscapes to building digital narratives that inspire action, we approach every project with a consultative mindset and a commitment to excellence.
          What sets us apart is our ability to think boldly and execute with precision. We don’t just push messages  we build meaning. Every brand we partner with receives a strategy as distinct as their own voice.
          At Publiqua, your vision is our blueprint.
          Your ambition fuels our creativity.
          And your success is the story we’re proud to help tell.
          </p>
        </div>
      </section>

      

      {/* What We Do */}
      {/* <section id="what-we-do" className="missionVisionSection-section missionVisionSection-split-background">
        <div className="missionVisionSection-content">
          <h2>WHAT WE DO</h2>
          <p>
            At <strong>Yoglyf</strong>, we design, develop, and invest in world-class wellness retreats in prime destinations. 
            Our expertise covers every stage of retreat development, from vision to completion, ensuring exceptional 
            quality and innovation. By integrating sustainable practices with exclusive investment opportunities, 
            we create transformative spaces that promote well-being while delivering lasting value and growth.
          </p>
        </div>
        <div className="missionVisionSection-image-container" style={{ borderRadius: "50%" }}>
          <img src="/assets/hero_1.webp" alt="Our Vision" />
        </div>
      </section> */}

      {/* Our Values */}
      <section id="our-values" className="missionVisionSection-section missionVisionSection-split-background">
        
        <div className="missionVisionSection-content">
          <h1>Our Values</h1>
          <p>
          At <strong>Publiqua</strong>, our values shape everything we do from the strategies we build to the 
          relationships we nurture. We believe in going beyond the brief, grounding every idea 
          in insight and purpose. Creativity drives us, but only when it’s authentic and aligned
          with your goals. We approach every project with precision, treating the smallest details
          with as much care as the big picture. Collaboration is at the heart of our process we don’t
          just work for our clients, we work with them. Above all, we are guided by impact. 
          Because for us, success isn’t just about what we create it’s about what it changes.
          </p>
        </div>
        <div className="missionVisionSection-image-container">
          <img src="/assets/About2.jpg" alt="Our Mission" />
        </div>
      </section>
    </div>
  );
};

export default missionVisionSection;
