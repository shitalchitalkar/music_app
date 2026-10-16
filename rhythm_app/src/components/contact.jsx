import React from "react";
import "./contact.css";
import { FaInstagram, FaGoogle, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* Contact Information - Left Side */}
        <div className="contact-info">
          <span className="contact-tag">GET IN TOUCH</span>

          <h2>
            Let's Create
            <span> Something Musical.</span>
          </h2>

          <p>
            Have a question about our music classes, workshops,
            or live events? We'd love to hear from you.
          </p>

          <div className="contact-detail">
            <h4>📍 Visit Us</h4>
            <p>
              Parmar Square, B106, Kharadi South Main Road,
              above Habib saloon, opp. city pride theatre,
              Rakshak Nagar, Kharadi, Pune, Maharashtra 411014
            </p>
          </div>

          <div className="contact-detail">
            <h4>✉️ Email Us</h4>
            <p>hello@rhythm.com</p>
          </div>

          <div className="contact-detail">
            <h4>📞 Call Us</h4>
            <p>+91 98765 43210</p>
          </div>

          {/* Instagram - Below Call Us */}
          <div className="contact-socials">
            <a
              href="YOUR_INSTAGRAM_LINK"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="YOUR_WHATSAPP_LINK"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="whatsapp"
            >
              <FaWhatsapp />
            </a>

            <a
              href="YOUR_GOOGLE_LINK"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google"
            >
              <FaGoogle />
            </a>
          </div>
        </div>

        {/* Contact Form - Right Side */}
        <div className="contact-form-wrapper">
          <h3>Send us a message</h3>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                "Thank you! Your message has been submitted."
              );
            }}
          >
            <div className="form-row">
              <input
                type="text"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                required
              />
            </div>

            <input
              type="tel"
              placeholder="Phone Number"
            />

            <select defaultValue="" required>
              <option value="" disabled>
                Select an enquiry type
              </option>
              <option>Music Classes</option>
              <option>Workshops</option>
              <option>Corporate Events</option>
              <option>Other Enquiry</option>
            </select>

            <textarea
              placeholder="Tell us how we can help..."
              rows="5"
              required
            />

            <button type="submit">
              Send Message ↗
            </button>
          </form>
        </div>
      </div>

      {/* Google Maps - Below Both Columns */}
      <div className="contact-map">
        <div className="map-heading">
          <span className="contact-tag">FIND US HERE</span>

          <h3>Visit RHYTHM Music Centre</h3>

          <p>
            Come visit us and be a part of our musical journey.
          </p>
        </div>

        <iframe
          title="RHYTHM Music Academy Kharadi Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.520113661142!2d73.93918339999999!3d18.5505758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1d664368eb7%3A0x35ce695681a6413e!2sRhythm%20Music%20Academy%20Kharadi!5e0!3m2!1sen!2sin!4v1791875645359!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />

        <a
          className="map-directions"
          href="https://www.google.com/maps/dir/?api=1&destination=Rhythm+Music+Academy+Kharadi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Directions ↗
        </a>
      </div>
    </section>
  );
}

export default Contact;