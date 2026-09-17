import React from 'react';
import './MapSection.css';

const MapSection = () => {
  return (
    <section className="map-section">
      <div className="map-container">
        {/* Using a standard Google Maps embed pointing to Tiruppur */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15664.128795555138!2d77.34863835!3d11.109503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907b22a6114a1%3A0xc3b8a360a8b9826a!2sThennampalayam%2C%20Tiruppur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1715367809312!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="RS Flex & Signage Location"
        ></iframe>
        
        <div className="map-overlay-info">
          <h3 className="text-accent">VISIT US</h3>
          <p>
            Palladam Main Road,<br />
            Thennampalayam,<br />
            Tiruppur, Tamil Nadu 641604
          </p>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
