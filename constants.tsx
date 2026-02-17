
import { SystemItem, ProductItem, IndustryItem } from './types';

export const SYSTEMS: SystemItem[] = [
  {
    id: 'wtp',
    title: 'Water Treatment Plants (WTP)',
    description: 'Comprehensive purification for municipal and industrial water supplies using flash mixing, flocculation, and filtration.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mwp',
    title: 'Mineral Water Plants (MWP)',
    description: 'Turnkey solutions for packaged drinking water, ensuring safe and mineral-balanced water production.',
    image: 'https://images.unsplash.com/photo-1560177112-fbfd5fde9566?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ro',
    title: 'Reverse Osmosis Plants (RO)',
    description: 'High-performance RO systems for salt-free pure water from saline/brackish sources. 15-20 Kgs/cm² pressure.',
    image: 'https://images.unsplash.com/photo-1621330396173-e41b1017bc0c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'uf',
    title: 'Ultra Filtration Plants (UF)',
    description: 'Advanced membrane filtration to remove suspended solids, bacteria, and viruses for superior water clarity.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'wwtp',
    title: 'Waste Water Treatment (WWTP)',
    description: 'Eco-friendly solutions for treating degradable wastewater from industries and residential colonies.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'wwrp',
    title: 'Waste Water Recycling (WWRP)',
    description: 'Reclamation facilities treating effluent for reuse in irrigation and industrial processes. Zero liquid discharge options.',
    image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'swdp',
    title: 'Seawater Desalination (SWDP)',
    description: 'High-efficiency RO desalination for coastal regions, removing dissolved salts for fresh water needs.',
    image: 'https://images.unsplash.com/photo-1464817739973-0128fe79aa1b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'upwp',
    title: 'Ultra Pure Water Plants (UPWP)',
    description: 'High resistivity water systems for Pharma, Semiconductor, and Chemical industries using RO + EDI technologies.',
    image: 'https://images.unsplash.com/photo-1516937941348-c09645f31e88?auto=format&fit=crop&q=80&w=800'
  }
];

export const PRODUCTS: ProductItem[] = [
  { name: 'Pressure Sand / Carbon Filter', category: 'Filtration' },
  { name: 'Water Softener / Iron Remover', category: 'Treatment' },
  { name: 'DM & MB Plants', category: 'De-ionization' },
  { name: 'Micron & Bag Filter Housing', category: 'Filtration' },
  { name: 'Dosing Systems / Heavy Pumps', category: 'Equipment' },
  { name: 'Domestic & Commercial RO', category: 'RO Plant' },
  { name: 'UV Sterilizer / Ozone Gen', category: 'Disinfection' },
  { name: 'FRP Vessels / Membrane Housing', category: 'Vessels' },
  { name: 'Membranes (RO, UF, NF, MF)', category: 'Membranes' },
  { name: 'Flow Meters / Pressure Gauges', category: 'Instrumentation' },
  { name: 'SS / FRP / MS Tanks', category: 'Storage' },
  { name: 'Water Testing Equipment', category: 'Lab' },
  { name: 'Swimming Pool Equipment', category: 'Pool' }
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
