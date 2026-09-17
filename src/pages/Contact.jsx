import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, MapPin, MessageCircle } from 'lucide-react';
import MapSection from '../components/home/MapSection';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '3D LED Sign Board',
    message: ''
  });

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    
    const { name, phone, service, message } = formData;
    
    // Construct the WhatsApp message with bold formatting
    const text = `*New Inquiry from Website*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Interested In:* ${service}%0A*Message:* ${message}`;
    
    // WhatsApp API URL (RS Flex phone number: 919500390998)
    const whatsappUrl = `https://wa.me/919500390998?text=${text}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | RS Flex & Signage in Tiruppur</title>
        <meta name="description" content="Get in touch with RS Flex & Signage for premium LED sign boards, flex printing, and custom branding in Tiruppur. Call us at +91 95003 90998." />
      </Helmet>

      <div className="page-header">
        <div className="container">
          <h1 className="heading-mega">
            LET'S <span className="text-accent">TALK.</span>
          </h1>
          <p className="page-subtext">We're ready to bring your brand to life. Reach out for quotes, inquiries, or just to say hello.</p>
        </div>
      </div>

      <section className="contact-details-section section-padding">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-panel">
              <h2 className="heading-section">CONTACT INFO</h2>
              
              <div className="info-list">
                <div className="info-item">
                  <div className="info-icon"><Phone size={24} /></div>
                  <div className="info-content">
                    <h3>Phone & WhatsApp</h3>
                    <a href="tel:+919500390998">+91 95003 90998</a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon"><MessageCircle size={24} /></div>
                  <div className="info-content">
                    <h3>Instagram</h3>
                    <a href="https://www.instagram.com/rs_flex_signage_/" target="_blank" rel="noopener noreferrer">@rs_flex_signage_</a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon"><MapPin size={24} /></div>
                  <div className="info-content">
                    <h3>Location</h3>
                    <p>Palladam Main Road,<br />Thennampalayam,<br />Tiruppur, Tamil Nadu 641604</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-panel">
              <h2 className="heading-section">SEND A MESSAGE</h2>
              <form className="contact-form" onSubmit={handleWhatsAppSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Your Name" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="Your Phone Number" 
                    required 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="service">Service Interested In</label>
                  <select 
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option>3D LED Sign Board</option>
                    <option>Flex Printing</option>
                    <option>ACP Elevation</option>
                    <option>UV Printing</option>
                    <option>Custom Branding</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-submit">
                  SEND VIA WHATSAPP
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <MapSection />
    </>
  );
};

export default Contact;
