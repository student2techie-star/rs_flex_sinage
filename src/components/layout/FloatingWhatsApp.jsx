import React from 'react';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  const phoneNumber = "919500390998";
  const defaultMessage = "Hi! I'm interested in your signage and printing services.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="floating-whatsapp"
      aria-label="Chat with us on WhatsApp"
    >
      <div className="whatsapp-icon-container">
        {/* Official WhatsApp SVG Logo */}
        <svg 
          viewBox="0 0 32 32" 
          className="whatsapp-icon" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.002 0c-8.837 0-16.002 7.165-16.002 16.002 0 2.912 0.79 5.637 2.155 8.012l-2.155 7.986 8.167-2.14c2.327 1.258 4.982 1.97 7.835 1.97 8.837 0 16.002-7.165 16.002-16.002s-7.165-16.002-16.002-16.002zM16.002 29.136c-2.457 0-4.757-0.637-6.79-1.742l-0.485-0.287-5.045 1.322 1.342-4.92-0.316-0.502c-1.215-1.927-1.915-4.212-1.915-6.672 0-7.302 5.94-13.242 13.242-13.242s13.242 5.94 13.242 13.242-5.94 13.242-13.242 13.242zM23.279 21.042c-0.398-0.2-2.357-1.165-2.721-1.298-0.365-0.133-0.631-0.2-0.897 0.2s-1.028 1.298-1.261 1.563c-0.232 0.266-0.465 0.298-0.863 0.098-0.398-0.2-1.682-0.62-3.205-1.978-1.185-1.057-1.985-2.363-2.217-2.763-0.232-0.398-0.024-0.614 0.174-0.812 0.179-0.179 0.398-0.465 0.597-0.697 0.199-0.232 0.266-0.398 0.398-0.663 0.133-0.266 0.066-0.498-0.033-0.697-0.098-0.2-0.897-2.157-1.229-2.954-0.323-0.776-0.65-0.671-0.897-0.684-0.232-0.012-0.498-0.014-0.763-0.014s-0.697 0.098-1.063 0.498c-0.365 0.398-1.395 1.362-1.395 3.322s1.428 3.854 1.627 4.12c0.199 0.266 2.808 4.286 6.797 6.012 0.949 0.411 1.69 0.658 2.27 0.842 0.952 0.302 1.819 0.259 2.502 0.157 0.767-0.114 2.357-0.963 2.69-1.894 0.332-0.93 0.332-1.726 0.232-1.894-0.098-0.165-0.365-0.266-0.763-0.465z" fill="currentColor"></path>
        </svg>
      </div>
      <div className="whatsapp-tooltip">Chat with us!</div>
    </a>
  );
};

export default FloatingWhatsApp;
