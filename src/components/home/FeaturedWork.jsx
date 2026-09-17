import React from 'react';
import './FeaturedWork.css';

const projects = [
  { id: 1, title: 'Shop Signage', location: 'Tiruppur', category: '3D LED Board' },
  { id: 2, title: 'ACP Elevation', location: 'Coimbatore', category: 'Elevation' },
  { id: 3, title: 'Corporate Branding', location: 'Tiruppur', category: 'Custom Logo' },
  { id: 4, title: 'Retail Board', location: 'Erode', category: 'UV Printing' },
  { id: 5, title: 'Event Banner', location: 'Tiruppur', category: 'Flex Printing' },
  { id: 6, title: 'Illuminated Letters', location: 'Salem', category: 'Trimcap' }
];

const FeaturedWork = () => {
  return (
    <section className="featured-work section-padding" id="work">
      <div className="container">
        <h2 className="heading-section">
          SELECTED<br/>
          <span className="text-accent">WORK.</span>
        </h2>
        
        <div className="work-grid">
          {projects.map((project, idx) => (
            <div className="work-grid-item interactive" key={project.id}>
              <div className="work-img-container">
                <div className="work-img-placeholder">
                  <div className="placeholder-text">PROJECT {String(idx + 1).padStart(2, '0')}</div>
                </div>
              </div>
              <div className="work-info">
                <h3>{project.title}</h3>
                <div className="work-meta">
                  <span>{project.category}</span>
                  <span>{project.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
