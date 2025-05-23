import './missionVisionSection.css';

 
const missionVisionSection = () => {
  return (
    <div className="missionVisionSection-container">
      {/* About Company */}
      <section id="about-our-company" className="missionVisionSection-section missionVisionSection-split-background">
        <div className="missionVisionSection-image-container">
          <img src="/assets/About1.webp" alt="About" />
        </div>
        <div className="missionVisionSection-content">
          <h1><strong>Our Story</strong></h1>
          <p>
            At <strong>Publiqua</strong>, we believe in the power of <strong>storytelling</strong> to shape <strong>perceptions</strong>, 
            drive <strong>engagement</strong>, and inspire <strong>action</strong>. We are a <strong>strategic communications consulting firm</strong> built
            on the principle of <strong>intentional storytelling</strong>—rooted in <strong>insight</strong>, shaped by <strong>creativity</strong>, and 
            driven by <strong>results</strong>. Our work begins with <strong>deep listening</strong>. We take the time to understand your 
            <strong>brand</strong>, your <strong>goals</strong>, your <strong>challenges</strong>, and then design <strong>communications strategies</strong> that speak 
            to your <strong>audience</strong> with <strong>clarity</strong> and <strong>impact</strong>.
          </p>
          <p>
            From navigating <strong>complex PR landscapes</strong> to building <strong>digital narratives</strong> that inspire <strong>action</strong>, we approach every project with a <strong>consultative mindset</strong> and a commitment to <strong>excellence</strong>.
            What sets us apart is our ability to think <strong>boldly</strong> and execute with <strong>precision</strong>. We don’t just push <strong>messages</strong>—we build <strong>meaning</strong>. Every brand we partner with receives a <strong>strategy</strong> as distinct as their own <strong>voice</strong>.
            At <strong>Publiqua</strong>, your <strong>vision</strong> is our <strong>blueprint</strong>.
            Your <strong>ambition</strong> fuels our <strong>creativity</strong>.
            And your <strong>success</strong> is the <strong>story</strong> we’re proud to help tell.
          </p>
        </div>
      </section>
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
            At <strong>Publiqua</strong>, our <strong>values</strong> are the foundation of every <strong>strategy</strong> we craft and every <strong>relationship</strong> we build. We are committed to going <strong>beyond the brief</strong>, ensuring every idea is anchored in <strong>insight</strong> and <strong>purpose</strong>. <strong>Creativity</strong> is our driving force—always authentic, always aligned with your <strong>goals</strong>. We approach every project with <strong>precision</strong>, treating every detail with the same care as the big picture. <strong>Collaboration</strong> is at the heart of our process; we don’t just work for our clients, we work <strong>with</strong> them. Above all, we are guided by <strong>impact</strong>—because for us, <strong>success</strong> is measured not only by what we create, but by the <strong>change</strong> we inspire.
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
