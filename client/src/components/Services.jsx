import React, { useState } from 'react';
import { Newspaper, ShoppingBag, Video, PlayCircle, Code, ArrowRight, X, Coffee, Tv } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Services.css';

const services = [
    {
        title: "Brovanta Industry (Software & IT)",
        desc: "We deliver tailored web, app, and IT solutions designed to accelerate growth and enable digital transformation.",
        icon: <Newspaper size={32} color="white" />,
        isNew: false,
        details: [
            "We deliver tailored web, app, and IT solutions that help businesses grow, adapt, and succeed in the digital era. Our process begins with a deep understanding of your objectives, ensuring every solution aligns perfectly with your vision and market needs.",
            "From scalable websites and user-friendly mobile applications to secure IT systems and digital platforms, we combine smart strategy with modern technology. Our solutions are built for performance, reliability, and seamless user experience.",
            "By focusing on innovation and real-world execution, we enable digital transformation that improves efficiency, strengthens customer engagement, and supports sustainable long-term growth."
        ]
    },
    {
        title: "Petflix Junction",
        desc: "Where love meets care—Petflix Junction offers expert pet grooming services to keep your furry friends clean, confident, and happy.",
        icon: <ShoppingBag size={32} color="white" />,
        isSoon: true,
        details: [
            "Where love meets care, Petflix Junction is dedicated to providing expert pet grooming services that prioritize your pet’s comfort, hygiene, and happiness. We understand that pets are family, and every grooming session is handled with patience, compassion, and professional attention to detail.",
            "Our trained groomers use high-quality products and safe grooming techniques to ensure your furry friends stay clean, healthy, and confident. From refreshing baths and stylish trims to nail care and coat maintenance, every service is customized to suit your pet’s unique needs and personality.",
            "At Petflix Junction, we aim to create a calm, stress-free environment where pets feel relaxed and cared for. Our mission is to enhance your pet’s overall well-being while giving them a look you’ll love. Because when pets feel good, they shine with confidence and joy."
        ]
    },
    {
        title: "Zoomax Studio",
        desc: "We house a full-scale production studio built for events, brand shoots, and creative media, blending imagination with flawless execution.",
        icon: <Video size={32} color="white" />,
        isNew: false,
        details: [
            " We house a full-scale, in-house production studio designed to support events, brand shoots, and a wide range of creative media requirements. Our space is equipped with modern technology and professional-grade infrastructure to handle projects of every scale with efficiency and precision.",
            "From concept development to final execution, our team blends imagination with technical expertise to create visually compelling and impactful content. Whether it’s live event coverage, commercial brand shoots, or creative storytelling, we focus on delivering high-quality results that align perfectly with your vision.",
            "With a strong emphasis on creativity, consistency, and flawless execution, our production studio serves as a complete creative hub. We don’t just produce content—we craft experiences that elevate brands, engage audiences, and leave a lasting impression."
        ]
    },
    {
        title: " Zoom Chronicle",
        desc: "A living media platform curating fresh stories, trending topics, and digital content—capturing modern culture through a new lens.",
        icon: <PlayCircle size={32} color="white" />,
        isSoon: true,
        details: [
            "A living media platform built to reflect the pulse of today’s world, we curate fresh stories, trending topics, and engaging digital content that matters to a modern audience. Our focus is on relevance, authenticity, and storytelling that connects with real people and real experiences.",

            "We cover culture, lifestyle, creativity, innovation, and emerging voices, presenting content that informs, inspires, and sparks conversation. From breaking trends to in-depth features, our platform continuously evolves to stay aligned with the fast-changing digital landscape.",

            "More than just a media outlet, we are a creative lens on modern culture. By blending timely narratives with a forward-thinking digital approach, we aim to shape perspectives, amplify voices, and create a space where stories live, grow, and resonate."
        ]
    },
    {
        title: "Brovanta Style",
        desc: "Launching by the end of 2026—our upcoming e-commerce platform brings a curated collection of fashion and lifestyle essentials",
        icon: <ShoppingBag size={32} color="white" />,
        isNew: false,
        details: [
            " Launching by the end of 2026, our upcoming e-commerce platform is designed to redefine the way you shop for fashion and lifestyle essentials. Built with a modern, user-friendly experience in mind, the platform will focus on quality, style, and convenience, bringing together products that truly match today’s evolving tastes.",

            "Our carefully curated collection will feature trend-forward fashion, everyday lifestyle products, and must-have essentials from trusted brands and emerging creators. Each product will be selected with attention to design, comfort, and value, ensuring a premium yet accessible shopping experience for every customer.",

            "More than just a marketplace, the platform aims to become a lifestyle destination. With seamless navigation, secure payments, and reliable delivery, we are committed to making online shopping simple, inspiring, and enjoyable—setting a new standard for digital commerce in the years to come."
        ]
    },
    {
        title: "The K Garh Cafe ",
        desc: "The K Garh Cafe has officially launched its cloud kitchen, serving fresh and flavorful meals. A beautifully designed café will be opening soon to welcome you.",
        icon: <Coffee size={32} color="white" />,
        isNew: false,
        details: [
            "The K Garh Cafe has officially launched its cloud kitchen, bringing a delightful range of fresh, flavorful, and carefully crafted meals straight to your doorstep. With a strong focus on quality ingredients, hygiene, and taste, every dish is prepared to offer a satisfying and memorable food experience. Whether you’re craving comfort food or something new, our cloud kitchen is designed to serve delicious meals with consistent quality.",

            "Behind every order is a passionate culinary team dedicated to blending great flavors with modern cooking techniques. From thoughtful menu planning to timely delivery, The K Garh Cafe aims to make everyday dining convenient without compromising on taste or freshness. Each meal reflects our commitment to excellence and customer satisfaction.",

            "Very soon, The K Garh Cafe will also open a beautifully designed dine-in café, creating a warm and welcoming space for food lovers. This upcoming café will offer a cozy ambiance where guests can relax, connect, and enjoy their favorite dishes, making it a perfect spot for casual meet-ups and memorable moments."
        ]
    },
    {
        title: "Khulhad Tv",
        desc: "Launching soon—an all-new OTT platform bringing original entertainment, live shows, and engaging content directly to your screen.",
        icon: <Tv size={32} color="white" />,
        isNew: false,
        details: [
            "Launching soon, our all-new OTT platform is set to redefine digital entertainment by delivering a rich mix of original content, exclusive shows, and immersive storytelling experiences. Designed for today’s audience, the platform focuses on quality, creativity, and content that truly connects.",

            "From compelling originals and live shows to engaging programs across multiple genres, our platform brings entertainment directly to your screen—anytime, anywhere. With seamless streaming, high-definition visuals, and user-friendly navigation, viewers can enjoy uninterrupted entertainment tailored to their interests.",

            "More than just a streaming service, this OTT platform is a creative space for fresh voices, bold ideas, and innovative formats. Get ready to experience entertainment that informs, inspires, and entertains—launching soon to transform how you watch and engage with content."
        ]
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);

    return (
        <section id="services" className="services-section">
            <div className="container">
                <div className="services-header">
                    <motion.span
                        className="section-subtitle"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Our Expertise
                    </motion.span>
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Services & Strategic Ventures
                    </motion.h2>
                </div>

                <motion.div
                    className="services-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card"
                            variants={cardVariants}
                        >
                            {/* {service.isSoon && <span className="badge-soon">Coming Soon</span>} */}

                            <div className="service-icon-wrapper">
                                {service.icon}
                            </div>

                            <h3 className="service-title">{service.title}</h3>

                            <p className="service-description">
                                {service.desc}
                            </p>

                            <button className="service-btn" onClick={() => setSelectedService(service)}>
                                Explore <ArrowRight size={16} style={{ marginLeft: '4px', verticalAlign: 'middle' }} />
                            </button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <AnimatePresence>
                {selectedService && (
                    <motion.div
                        className="service-detail-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedService(null)}
                    >
                        <motion.div
                            className="service-detail-card"
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="detail-close-btn" onClick={() => setSelectedService(null)}>
                                <X size={24} />
                            </button>

                            <div className="detail-header">
                                <div className="detail-icon-wrapper">
                                    {selectedService.icon}
                                </div>
                                <h2 className="detail-title">{selectedService.title}</h2>
                            </div>

                            <div className="detail-content">
                                {selectedService.details && selectedService.details.map((paragraph, pIndex) => (
                                    <p key={pIndex}>
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            <div className="detail-footer">
                                <button className="btn-primary" onClick={() => setSelectedService(null)}>
                                    Contact Us for Details
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Services;


