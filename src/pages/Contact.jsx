import React from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import "./Contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your message has been sent successfully.");

    e.target.reset();
  };

  return (
    <div className="contact-page">

      {/* ================= HERO ================= */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <p className="contact-small-title">GET IN TOUCH</p>

          <h1>
            Let's Talk About
            <span> Delicious Recipes</span>
          </h1>

          <p className="contact-hero-description">
            Have a question, recipe suggestion, or just want to say hello?
            We'd love to hear from you. Send us a message and our team will
            get back to you soon.
          </p>
        </div>

        <div className="contact-hero-image">
          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80"
            alt="Delicious food"
          />

          <div className="contact-image-card">
            <strong>2000+</strong>
            <span>Delicious Recipes</span>
          </div>
        </div>
      </section>

      {/* ================= CONTACT INFO ================= */}
      <section className="contact-info-section">

        <div className="contact-info-card">
          <div className="contact-icon">
            <Mail size={25} />
          </div>

          <h3>Email Us</h3>

          <p>support@tastyrecipe.com</p>
          <p>hello@tastyrecipe.com</p>
        </div>

        <div className="contact-info-card">
          <div className="contact-icon">
            <Phone size={25} />
          </div>

          <h3>Call Us</h3>

          <p>+91 98765 43210</p>
          <p>+91 98765 12345</p>
        </div>

        <div className="contact-info-card">
          <div className="contact-icon">
            <MapPin size={25} />
          </div>

          <h3>Visit Us</h3>

          <p>Ahmedabad, Gujarat</p>
          <p>India</p>
        </div>

        <div className="contact-info-card">
          <div className="contact-icon">
            <Clock size={25} />
          </div>

          <h3>Working Hours</h3>

          <p>Monday - Friday</p>
          <p>9:00 AM - 6:00 PM</p>
        </div>

      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="contact-form-section">

        <div className="contact-form-wrapper">

          {/* LEFT SIDE */}
          <div className="contact-form-left">

            <p className="contact-small-title">CONTACT US</p>

            <h2>
              Send Us a
              <span> Message</span>
            </h2>

            <p>
              Whether you have a question about our recipes, want to share
              feedback, or have an amazing recipe to suggest, fill out the
              form and let us know.
            </p>

            <div className="contact-food-image">
              <img
                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80"
                alt="Fresh ingredients"
              />
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="contact-form-container">

            <form onSubmit={handleSubmit}>

              <div className="form-row">

                <div className="form-group">
                  <label>Full Name</label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email Address</label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

              </div>

              <div className="form-group">
                <label>Subject</label>

                <input
                  type="text"
                  name="subject"
                  placeholder="Enter subject"
                  required
                />
              </div>

              <div className="form-group">
                <label>Message</label>

                <textarea
                  name="message"
                  rows="6"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="send-message-btn">
                Send Message
                <Send size={18} />
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="contact-bottom">

        <div>
          <h2>Have a Delicious Recipe?</h2>

          <p>
            Share your favorite recipe with our food-loving community.
          </p>
        </div>

        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          Explore Recipes
        </button>

      </section>

    </div>
  );
};

export default Contact;