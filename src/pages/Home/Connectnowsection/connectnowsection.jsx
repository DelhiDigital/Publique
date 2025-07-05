import { useState } from "react"
import "./connectnowsection.css"

const ConnectNowSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const openPopup = () => {
    setIsPopupOpen(true)
  }

  const closePopup = () => {
    setIsPopupOpen(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted")
    closePopup()
  }

  return (
    <>
      <section className="connect-section">
        <div className="connect-container">
          <div className="connect-content">
            <h2 className="connect-title">Let's work together</h2>
            <p className="Homeconnect-description">
              For more information, we are happy to provide consultation and help design your brand communication.
            </p>
          </div>
          <div className="Homeconnect-button-wrapper">
            <button className="Homeconnect-button" onClick={openPopup}>
              Contact Now
            </button>
          </div>
        </div>
        <div className="gradient-overlay"></div>
      </section>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <div className="popup-header">
              <h3 className="popup-title">Fill the details</h3>
              <button className="popup-close" onClick={closePopup}>
                ×
              </button>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Full name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" placeholder="Phone Number" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="email@company.com" required />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service</label>
                  <input type="text" id="service" name="service" placeholder="Service" />
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="project">About your project</label>
                <textarea
                  id="project"
                  name="project"
                  rows="4"
                  placeholder="Tell us a bit about your project"
                ></textarea>
              </div>

              <div className="form-bottom">
                <div className="recaptcha-container">
                  <div className="recaptcha-checkbox">
                    <input type="checkbox" id="recaptcha" required />
                    <label htmlFor="recaptcha">I'm not a robot</label>
                    <div className="recaptcha-logo">reCAPTCHA</div>
                  </div>
                </div>

                <button type="submit" className="submit-button">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default ConnectNowSection
