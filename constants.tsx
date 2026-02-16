
import { SystemItem, ProductItem, IndustryItem } from './types';

export const SYSTEMS: SystemItem[] = [
  {
    id: 'mbr-stp',
    title: 'Packaged MBR STP Plant',
    description: 'Eco & Std Models (1 to 5 KLD). Advanced Membrane Bioreactor technology for superior treated water quality.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'frp-stp',
    title: 'FRP Package Type STP',
    description: '5 KLD to 100 KLD. Pre-fabricated, easy installation, manual/auto/remote sensing options.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'zld-plants',
    title: 'Zero Liquid Discharge (ZLD)',
    description: 'Multi-stage RO & Evaporator systems to ensure 100% water recovery and environmental compliance.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'pdw',
    title: 'ISI Packaged Drinking Water',
    description: 'Capacities from 1m³ to 50m³/hr. Complete turnkey ISI setup with BIS compliance.',
    image: 'https://images.unsplash.com/photo-1560177112-fbfd5fde9566?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'desal',
    title: 'Sea Water Desalination',
    description: 'Plant capacity from 1m³ to 100m³/hr. High-efficiency RO systems for coastal regions.',
    image: 'https://images.unsplash.com/photo-1464817739973-0128fe79aa1b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'etp',
    title: 'Effluent Treatment Plant',
    description: 'Specialized industrial solutions for Pharma, Textiles, and Food & Beverage sectors.',
    image: 'https://images.unsplash.com/photo-1621330396173-e41b1017bc0c?auto=format&fit=crop&q=80&w=800'
  }
];

export const PRODUCTS: ProductItem[] = [
  { name: 'Pressure Sand / Carbon Filter', category: 'Filtration' },
  { name: 'Water Softener & Iron Remover', category: 'Treatment' },
  { name: 'DM & MB Plants', category: 'De-ionization' },
  { name: 'Micron & Bag Filters', category: 'Filtration' },
  { name: 'UV Sterilizer & Ozone Gen', category: 'Disinfection' },
  { name: 'FRP Vessels & SS Tanks', category: 'Equipment' },
  { name: 'Membranes (RO, UF, NF, MF)', category: 'Membranes' },
  { name: 'Pumps & Dosing Systems', category: 'Equipment' }
];

export const INDUSTRIES: IndustryItem[] = [
  { name: 'Automobiles', image: 'https://images.unsplash.com/photo-1486497395400-7ecb723460d2?auto=format&fit=crop&q=80&w=400' },
  { name: 'Pharma', image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?auto=format&fit=crop&q=80&w=400' },
  { name: 'Textiles', image: 'https://images.unsplash.com/photo-1558583055-d7ac00b1adca?auto=format&fit=crop&q=80&w=400' },
  { name: 'Power Plants', image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=400' },
  { name: 'Food & Bev', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=400' },
  { name: 'Hospitals', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400' },
  { name: 'Hotels', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=400' },
  { name: 'Commercial', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400' }
];
