export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  category: 'digital' | 'creative' | 'growth' | 'strategy';
  icon: string;
}

export interface ValueItem {
  name: string;
  description: string;
  icon: string;
}

export interface PillarItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  metrics: string;
}

