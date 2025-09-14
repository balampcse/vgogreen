
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/seed/naturetech/1920/1080)' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
          Building Sustainable Software Solutions
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 font-light drop-shadow-md">
          We craft high-performance, eco-conscious digital experiences for a greener tomorrow.
        </p>
        <a href="#services" className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
          Explore Our Services
        </a>
      </div>
    </section>
  );
};

export default Hero;
