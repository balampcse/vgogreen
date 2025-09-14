
import type { Service, PortfolioItem, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About Us', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICES_DATA: Service[] = [
  {
    icon: 'code',
    title: 'Custom Web Development',
    description: 'Scalable and secure web applications built with modern technologies, focusing on energy-efficient code and infrastructure.',
  },
  {
    icon: 'mobile',
    title: 'Mobile App Innovation',
    description: 'Intuitive and high-performance native and cross-platform mobile apps that provide seamless user experiences.',
  },
  {
    icon: 'cloud',
    title: 'Cloud & DevOps',
    description: 'Optimize your infrastructure with our green cloud solutions, ensuring high availability, scalability, and a lower carbon footprint.',
  },
  {
    icon: 'design',
    title: 'UI/UX Design',
    description: 'Human-centered design that is both beautiful and functional, creating engaging digital products that users love.',
  },
  {
    icon: 'ai',
    title: 'AI & Machine Learning',
    description: 'Leverage the power of AI to build intelligent systems, automate processes, and derive actionable insights from data.',
  },
  {
    icon: 'leaf',
    title: 'Green Tech Consulting',
    description: 'Partner with us to make your technology stack more sustainable. We provide audits and strategies to reduce your digital carbon footprint.',
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
    {
        image: 'https://picsum.photos/seed/project1/600/400',
        title: 'EcoDash Analytics',
        category: 'Web Application'
    },
    {
        image: 'https://picsum.photos/seed/project2/600/400',
        title: 'GreenThumb Mobile',
        category: 'Mobile App'
    },
    {
        image: 'https://picsum.photos/seed/project3/600/400',
        title: 'SustainaCloud Platform',
        category: 'Cloud Solution'
    },
    {
        image: 'https://picsum.photos/seed/project4/600/400',
        title: 'Renewable Resource Visualizer',
        category: 'Data Science'
    }
];
