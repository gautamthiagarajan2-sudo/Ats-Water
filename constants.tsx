
import { SystemItem, ProductItem, IndustryItem } from './types';

export const SYSTEMS: SystemItem[] = [
  {
    id: 'wtp',
    title: 'Water Treatment Plants (WTP)',
    description: 'Comprehensive purification for municipal and industrial water supplies using Chemical Treatment by Flash Mixing and Flocculation, Pressure Sand Filtration, Activated Carbon Filtration, Dual Media Filtration, and Softening Plants.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mwp',
    title: 'Mineral Water Plants (MWP)',
    description: 'Turnkey Bottled Water Plants designed as per BIS AND WHO guidelines. Complete plant manufactured from Stainless Steel 316 with total PLC automation. Capacities from 1000 LPH to 50,000 LPH.',
    image: 'https://images.unsplash.com/photo-1559839914-17aae19cec71?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ro',
    title: 'Reverse Osmosis Plants (RO)',
    description: 'High-performance RO systems separating salt-free pure water from saline/brackish sources at 15-20 Kgs/cm² pressure. Membranes separate water into product stream and brine stream containing most salts.',
    image: 'https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'uf',
    title: 'Ultra Filtration Plants (UF)',
    description: 'Advanced membrane filtration using MF, UF, NF technologies to remove suspended solids, bacteria, viruses, and colloidal particles for superior water clarity and safety.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'wwtp',
    title: 'Sewage/Effluent Treatment (STP/ETP)',
    description: 'Eco-friendly solutions featuring Pre-Treatment (screening, grit removal), Primary Treatment (sedimentation, flotation), Secondary Treatment (biological, oxidation), and Tertiary Treatment for polishing.',
    image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'wwrp',
    title: 'Waste Water Recycling (WWRP)',
    description: 'Zero Liquid Discharge (ZLD) facilities treating effluent for reuse in irrigation and industrial processes. Technologies include membrane filtration, UV disinfection, and Advanced Oxidation Processes.',
    image: 'https://images.unsplash.com/photo-1504198458649-3128b932f49b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'swdp',
    title: 'Seawater Desalination (SWDP)',
    description: 'High-efficiency, energy-saving desalination plants for coastal regions using advanced RO processes. Equipment optimized for harsh marine environments with independent R&D of membrane components.',
    image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'upwp',
    title: 'Ultra Pure Water Plants (UPWP)',
    description: 'High resistivity water for Pharma, Semiconductor, and Chemical industries. Technologies: Primary filtration, softening, UF, RO, EDI, UV, Ozone. Achieving required resistivity levels with controlled microbial contamination.',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde05?auto=format&fit=crop&q=80&w=800'
  }
];

export const PRODUCTS: ProductItem[] = [
  { name: 'Pressure Sand / Carbon Filter', category: 'Filtration', desc: 'Multi-grade Quartz media for 10-micron clarity. Activated carbon adsorbs chlorine, organic compounds, color & odor.' },
  { name: 'Water Softener / Iron Remover', category: 'Treatment', desc: 'Reduces hardness to less than 50 ppm using softener resin. MS vessel with internal epoxy painting.' },
  { name: 'DM & MB Plants', category: 'De-ionization', desc: 'Reduces TDS to less than 10 ppm. Two-bed system with cation & anion exchange resins. MB for high purity polishing.' },
  { name: 'Micron & Bag Filter Housing', category: 'Filtration', desc: '5-10 micron PP cartridges protect RO membranes. SS/UPVC/PP housing with dished end and pressure gauge.' },
  { name: 'Dosing Systems / HP Pumps', category: 'Equipment', desc: 'Precision chemical dosing for water treatment processes with high-pressure pump systems.' },
  { name: 'Domestic & Commercial RO', category: 'RO Plant', desc: 'Fully SS Frame RO systems for brackish water purification at 15-20 Kgs/cm² pressure.' },
  { name: 'UV Sterilizer / Ozone Gen', category: 'Disinfection', desc: 'UV: 30,000 microwatts for absolute sterilization. Ozone: Corona type generator, no chemicals required.' },
  { name: 'FRP Vessels / Membrane Housing', category: 'Vessels', desc: 'Fiber Reinforced Plastic pressure vessels for filtration and membrane containment.' },
  { name: 'Membranes (RO, UF, NF, MF)', category: 'Membranes', desc: 'High-quality membranes for various filtration needs from microfiltration to reverse osmosis.' },
  { name: 'Flow Meters / Pressure Gauges', category: 'Instrumentation', desc: 'Precision instruments for monitoring and controlling water treatment processes.' },
  { name: 'SS / FRP / MS Tanks', category: 'Storage', desc: 'Mirror polished SS tanks without internal joints to avoid bacterial growth. Sealed from air contamination.' },
  { name: 'Water Testing Equipment', category: 'Lab', desc: 'Advanced analytical equipment to certify water purity per BIS and global industrial standards.' },
  { name: 'Swimming Pool Equipment', category: 'Pool', desc: 'Complete pool filtration, disinfection, and maintenance equipment solutions.' }
];

export const INDUSTRIES: IndustryItem[] = [
  { name: 'Automobiles', image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&q=80&w=400' },
  { name: 'Pharma', image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=400' },
  { name: 'Textiles', image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&q=80&w=400' },
  { name: 'Power Plants', image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=400' },
  { name: 'Food & Bev', image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&q=80&w=400' },
  { name: 'Hospitals', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400' },
  { name: 'Hotels', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=400' },
  { name: 'Chemicals', image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=400' }
];

export const COMPANY_INFO = {
  name: 'ATS Water Technologies',
  phone: '+91 98400 73207',
  phone2: '+91 44 4201 9863',
  email: 'atswater@yahoo.in',
  website: 'www.atswater.in',
  corporateAddress: 'No.100, Plot No.4C, Jeevarathinam 3rd Street, KSR Nagar, (VGN Shanthi Nagar), Ambattur, Chennai – 600053',
  factoryAddress: 'No.48/1, Vellala Street, 3rd Main Road (Near Telephone Exchange), Ambattur Industrial Estate, Chennai - 600058',
  mission: 'To provide ultimate solutions and professional technical support in the field of Water & Wastewater Treatment by adopting high-end technologies to our customers, enabling them to meet their environmental compliances & needs.',
  vision: 'To provide affordable solutions for all forms of pollution thus creating a sustainable environment.',
  qualityPolicy: 'Committed towards long-term customer relationship & satisfaction by providing cost-effective & sustainable solutions for Water & Wastewater Treatment systems by continually upgrading the Innovative Technologies. Team work and continual improvement will be the driving force for our existence.'
};
