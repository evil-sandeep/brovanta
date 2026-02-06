import React from 'react';
import { motion } from 'framer-motion';
import abhinasImg from '../assets/abhinas.jpg';
import './Director.css';

const Director = () => {
    return (
        <section className="director-section">
            <div className="container director-container">
                <motion.div
                    className="director-image-wrapper"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Placeholder image - Replace with actual image of Abinash Rout */}
                    <img
                        src={abhinasImg}
                        alt="Abinash Rout"
                        className="director-img"
                    />
                </motion.div>

                <motion.div
                    className="director-content"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="director-title">About the Director – Abinash Rout</h2>

                    <div className="director-bio">
                        <p>
                            Abinash Rout, hailing from a humble middle-class family in Kendujhar, Odisha, is a dynamic young entrepreneur with a passion for creativity and innovation. After completing his graduation, he set out on a journey to Mumbai — the city of dreams — with a clear vision and unwavering determination. Immersing himself in the creative world, Abinash built strong connections through social media and began working part-time as an assistant in filmmaking to support his ambitions. His journey has been one of resilience, marked by both challenges and milestones, shaping him into the visionary he is today.
                        </p>
                        <p>
                            Driven by the desire to create something of his own, Abinash founded Brovanta (OPC) Private Limited, a startup aimed at providing A to Z digital solutions. Under his leadership, Brovanta has expanded into diverse sectors including news media, e-commerce, digital production, and web & app development. Despite setbacks, his perseverance has led to meaningful achievements, and today, he continues to lead the company with purpose and innovation. Abinash Rout stands as a shining example of how dedication, passion, and vision can turn dreams into reality.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Director;
