
export interface NavLink {
  name: string;
  href: string;
}

export interface Service {
  icon: 'code' | 'mobile' | 'cloud' | 'design' | 'ai' | 'leaf';
  title: string;
  description: string;
}

export interface PortfolioItem {
    image: string;
    title: string;
    category: string;
}
