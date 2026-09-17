import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import './Services.css';

const servicesList = [
  {
    id: '01',
    title: 'Flex Banner Printing',
    desc: 'High-quality flex banner printing for shops, promotions, events and outdoor advertising.'
  },
  {
    id: '02',
    title: '3D LED Sign Boards',
    desc: 'Custom illuminated signage designed to make businesses stand out day and night.'
  },
  {
    id: '03',
    title: 'ACP Elevation',
    desc: 'Modern aluminium composite panel elevations and commercial signage solutions.'
  },
  {
    id: '04',
    title: 'UV Printing',
    desc: 'High-quality UV printing for boards, branding materials and custom applications.'
  },
  {
    id: '05',
    title: 'UV Lighting Boards',
    desc: 'Custom illuminated boards combining branding and modern lighting.'
  },
  {
    id: '06',
    title: 'Trimcap Letters',
    desc: 'Premium trimcap lettering and custom dimensional branding.'
  },
  {
    id: '07',
    title: 'Custom Logo Branding',
    desc: 'Custom logo signs and branded installations designed around the customer\'s identity.'
  }
];

const Services = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  
  return (
    <section className="services section-padding" id="services">
      <div className="container">
        <h2 className="heading-section">
          WHAT WE<br/>
          <span className="text-accent">CREATE.</span>
        </h2>
        
        <div className="services-list">
          {servicesList.map((service, idx) => (
            <div 
              key={service.id} 
              className={`service-row interactive ${hoveredIdx === idx ? 'active' : ''}`}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div className="service-number">{service.id}</div>
              
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
              </div>
              
              <div className="service-icon">
                <ArrowRight size={32} />
              </div>
              
              {/* Optional: Add hover image reveal here if assets are available */}
              {/* <div className="service-hover-img" style={{ backgroundImage: 'url(...)' }}></div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
