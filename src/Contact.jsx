import React from 'react';
import './App.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop')" }}>
        <div className="contact-hero-overlay">
          <h1>Contact Us</h1>
          <p>We'd love to hear about your networking needs.</p>
        </div>
      </div>

      <div className="contact-page-container">
        <div className="contact-card-large">
          <form className="contact-form-grid" onSubmit={(e)=>e.preventDefault()}>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone" />
            <input type="text" placeholder="Company" />
            <textarea rows="6" placeholder="How can we help? Tell us about your space and goals." required />
            <div className="contact-actions">
              <button className="btn btn-primary" type="submit">Send Enquiry</button>
              <button className="btn btn-outline" type="button">Schedule a call</button>
            </div>
          </form>
        </div>
        <div className="contact-side-note">
          <div className="note-card">
            <div className="note-row"><span>📧</span> support@nexusvio.com</div>
            <div className="note-row"><span>📞</span> +1 (555) 010-5678</div>
            <div className="note-row"><span>📍</span> San Francisco, CA</div>
          </div>
        </div>
      </div>

      <div className="contact-map" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1502920917128-1aa500764ce7?q=80&w=2000&auto=format&fit=crop')" }} />
    </div>
  );
};

export default Contact;
