import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import Marquee from '../components/home/Marquee';
import Services from '../components/home/Services';
import FeaturedWork from '../components/home/FeaturedWork';
import ContactCTA from '../components/home/ContactCTA';

import Process from '../components/home/Process';
import Statement from '../components/home/Statement';
import WhyChooseUs from '../components/home/WhyChooseUs';
import MapSection from '../components/home/MapSection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Best Flex Printing & LED Sign Boards in Tiruppur | RS Flex & Signage</title>
        <meta name="description" content="Looking for the best flex printing in Tiruppur? RS Flex & Signage offers premium 3D LED sign boards, ACP elevations, UV printing, and custom branding solutions." />
      </Helmet>
      
      <Hero />
      <Marquee />
      <Services />
      <FeaturedWork />
      <Process />
      <Statement />
      <WhyChooseUs />
      <ContactCTA />
      <MapSection />
    </>
  );
};

export default Home;
