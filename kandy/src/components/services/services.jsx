import React from 'react';
import './services.css'
import Nav from '../navigationbar/nav';
import Footer from '../navigationbar/footer/footer';

const ServicesPage = () => {
  const services = [
    { id: 1, name: 'Web Design', description: 'Create stunning websites', image: 'https://whc.unesco.org/uploads/thumbs/site_0450_0020-1200-630-20151105154018.jpg' },
    { id: 2, name: 'App Development', description: 'Build powerful mobile apps', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0-1nOvm_Oad4OsTByF3mOd4vr1KIqKibyeA&s' },
    { id: 3, name: 'SEO Optimization', description: 'Improve your search rankings', image: 'https://www.srilankainstyle.com/storage/app/media/uploaded-files/7-reasons-to-visit-kandy-in-sri-lanka-slider-1.jpg' },
    { id: 4, name: 'Content Writing', description: 'Engaging content for your audience', image: 'https://t3.ftcdn.net/jpg/03/09/55/12/360_F_309551222_SPlNjW87clBgksIZWKeU1SiUTjK0gu7y.jpg' },
    { id: 5, name: 'Graphic Design', description: 'Eye-catching visuals', image: '/api/placeholder/300/200' },
    { id: 6, name: 'Social Media Marketing', description: 'Boost your online presence', image: '/api/placeholder/300/200' },
    { id: 7, name: 'E-commerce Solutions', description: 'Set up your online store', image: '/api/placeholder/300/200' },
    { id: 8, name: 'Video Production', description: 'Professional video content', image: '/api/placeholder/300/200' },
    { id: 9, name: 'Email Marketing', description: 'Reach your customers directly', image: '/api/placeholder/300/200' },
    { id: 10, name: 'UI/UX Design', description: 'Create intuitive user experiences', image: '/api/placeholder/300/200' },
    { id: 11, name: 'Data Analytics', description: 'Insights from your data', image: '/api/placeholder/300/200' },
    { id: 12, name: 'Cloud Services', description: 'Scalable cloud solutions', image: '/api/placeholder/300/200' },
    { id: 13, name: 'Cybersecurity', description: 'Protect your digital assets', image: '/api/placeholder/300/200' },
    { id: 14, name: 'AI Integration', description: 'Implement AI in your business', image: '/api/placeholder/300/200' },
    { id: 15, name: 'Blockchain Development', description: 'Secure, decentralized solutions', image: '/api/placeholder/300/200' },
    { id: 16, name: 'IoT Solutions', description: 'Connect your devices', image: '/api/placeholder/300/200' },
    { id: 17, name: 'AR/VR Development', description: 'Immersive experiences', image: '/api/placeholder/300/200' },
    { id: 18, name: 'Customer Support', description: '24/7 support for your clients', image: '/api/placeholder/300/200' },
    { id: 19, name: 'Project Management', description: 'Efficient project delivery', image: '/api/placeholder/300/200' },
    { id: 20, name: 'IT Consulting', description: 'Expert tech advice', image: '/api/placeholder/300/200' },
  ];

  return (
    <>
    <Nav />
    <div className="services-page">
      <h1 className="services-title">Our Services</h1>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-card-inner">
              <div className="service-card-front">
                <img src={service.image} alt={service.name} className="service-image" />
                <h3 className="service-name">{service.name}</h3>
              </div>
              <div className="service-card-back">
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    
    </div>
<Footer />
    </>
  );
};

export default ServicesPage;