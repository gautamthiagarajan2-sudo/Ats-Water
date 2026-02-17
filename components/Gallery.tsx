import React from 'react';
import { motion } from 'framer-motion';

const images = [
    'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1560177112-fbfd5fde9566?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1621330396173-e41b1017bc0c?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1464817739973-0128fe79aa1b?auto=format&fit=crop&q=80&w=800'
];

const Gallery: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-teal-600 font-bold text-sm tracking-[0.3em] uppercase mb-4"
                >
                    Project Showcase
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Our Gallery</h2>
                <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                    A glimpse into our state-of-the-art installations and completed projects across various industries.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {images.map((src, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative aspect-video rounded-3xl overflow-hidden shadow-lg cursor-pointer"
                    >
                        <img
                            src={src}
                            alt={`Gallery Image ${idx + 1}`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
