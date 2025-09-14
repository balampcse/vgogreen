
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://picsum.photos/seed/office/800/600" 
              alt="Our team in a modern, green office"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Our Mission: Code for a Better Planet
            </h2>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              At V go Green, we believe technology should be a force for good. Our mission is to build exceptional software that not only drives business success but also contributes to a more sustainable future.
            </p>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              We integrate eco-friendly practices into every stage of our development lifecycle, from energy-efficient coding standards to promoting green cloud hosting. We are committed to innovation, integrity, and environmental responsibility.
            </p>
            <div className="flex space-x-8 mt-8">
                <div className="text-center">
                    <p className="text-3xl font-bold text-green-600">100+</p>
                    <p className="text-gray-500">Projects Done</p>
                </div>
                <div className="text-center">
                    <p className="text-3xl font-bold text-green-600">50+</p>
                    <p className="text-gray-500">Happy Clients</p>
                </div>
                <div className="text-center">
                    <p className="text-3xl font-bold text-green-600">15+</p>
                    <p className="text-gray-500">Team Experts</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
