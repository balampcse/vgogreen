
import React from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import type { PortfolioItem } from '../types';

const PortfolioCard: React.FC<{ item: PortfolioItem }> = ({ item }) => (
    <div className="group relative overflow-hidden rounded-lg shadow-lg">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300 flex flex-col justify-end p-6">
            <h3 className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
            <p className="text-green-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.category}</p>
        </div>
    </div>
);

const Portfolio: React.FC = () => {
    return (
        <section id="portfolio" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Recent Work</h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                        A glimpse into the innovative and sustainable solutions we've delivered.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    {PORTFOLIO_ITEMS.map((item) => (
                        <PortfolioCard key={item.title} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
