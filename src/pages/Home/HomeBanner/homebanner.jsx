import "./homebanner.css"

const HomeBanner = () => {
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <div className="image-section hero-image">
          {/* <img src="/images/hero-blocks.png"  className="hero-image" /> */}
        </div>

        <div className="testimonial-section">
          <div className="quote-mark quote-start">&ldquo;</div>
          <p className="testimonial-text">
            <strong>Shaped by Purpose. Driven by Responsibility.</strong>
At <strong>PUBLIQUA</strong> PR, our journey is defined by accountability, meaningful outcomes, and an unwavering commitment to purpose.
          </p>
          <div className="quote-mark quote-end">&rdquo;</div>
          <div className="author-info">
            <h3 className="author-name">PRIYNKA ARORA</h3>
            <p className="author-title">FOUNDER & DIRECTOR</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner
