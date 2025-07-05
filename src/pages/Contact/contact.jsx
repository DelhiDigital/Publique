import React from 'react';
import './contact.css';
import ConnectNowSection from '../Home/Connectnowsection/connectnowsection.jsx';
import ContactBanner from './ContactBanner/contactBanner.jsx';



const ContactPage = () => {
    return (
        <>
            <ContactBanner />
            <div className="contactPage__container">
                <h1 className="contactPage__heading">Reach Out and Visit</h1>

                <div className="contactPage__content">

                    <div className="contactPage__info">
                        <h2 style={{ textAlign: "center" }}>Contact</h2>
                        <div className="contactPage__details">

                            {/* Phone Number */}
                            <div className="contactPage__row">
                                <span className="contactPage__icon">📞</span>
                                <a href="tel:02249700111" className="contactPage__link">+91-22-49700111</a>
                            </div>

                            {/* Website */}
                            <div className="contactPage__row">
                                <span className="contactPage__icon">🌐</span>
                                <a
                                    href="https://publiqua.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contactPage__link"
                                >
                                    www.publiqua.com
                                </a>
                            </div>

                            {/* Email */}
                            <div className="contactPage__row">
                                <span className="contactPage__icon">✉️</span>
                                <a
                                    href="mailto:info@publiqua.com"
                                    className="contactPage__link"
                                >
                                    info@publiqua.com
                                </a>
                            </div>

                            {/* Address */}
                            <div className="contactPage__row">
                                <span className="contactPage__icon">📍</span>
                                <p className="contactPage__text">
                                    42,saiudual haq, 4rth Floor,<br />
                                    mehrauli Road, delhi, new delhi india<br />
                                    110030
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="contactPage__map">
                        <a
                            // href='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1559.7707650739133!2d72.85529157809809!3d19.117088039746406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c832096f0c6b%3A0xed3f909fbc847a77!2s24%2C%20Suren%20Rd%2C%20Chakala%2C%20Gundavali%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra%20400093!5e0!3m2!1sen!2sin!4v1744620466343!5m2!1sen!2sin' target="_blank"
                            href='#'
                            rel="noopener noreferrer"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.577761328493!2d77.200830674447!3d28.51968867572647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b07026ba363%3A0xd4c5b999d660acd4!2sDelhi%20Digital%20Co.!5e1!3m2!1sen!2sin!4v1747963353578!5m2!1sen!2sin" width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Our Location"

                            ></iframe>
                        </a>
                    </div>
                </div>
            </div>
{/* 
            <section className="panIndia__section">
                <div className="panIndia__wrapper">
                    <div className="panIndia__content">
                        <h2 className="panIndia__title">Our Pan India Presence</h2>
                        <p className="panIndia__text">
                            With offices at strategic locations, we are equipped to assist clients on time, every time!
                            Our widespread network enables us to provide personalized support, ensuring we are always within reach.
                            No matter where our clients are located, we are committed to delivering timely solutions with unmatched efficiency.
                        </p>
                    </div>

                    <div className="panIndia__map">
                        <img src="/assets/indianMap.jpg" alt="Lexicon Offices Across India" />
                    </div>
                </div>
            </section> */}

            <div id='form'>
                <ConnectNowSection />
            </div>
        </>
    );
};

export default ContactPage;
