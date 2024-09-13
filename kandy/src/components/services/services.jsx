import React from 'react';
import './services.css'
import Nav from '../navigationbar/nav';
import Footer from '../navigationbar/footer/footer';

const ServicesPage = () => {
  const services = [
    { id: 1, name: 'kandy', description: 'Create stunning websites', image: 'https://whc.unesco.org/uploads/thumbs/site_0450_0020-1200-630-20151105154018.jpg' },
    { id: 2, name: 'kandy', description: 'Build powerful mobile apps', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0-1nOvm_Oad4OsTByF3mOd4vr1KIqKibyeA&s' },
    { id: 3, name: 'kandy', description: 'Improve your search rankings', image: 'https://www.srilankainstyle.com/storage/app/media/uploaded-files/7-reasons-to-visit-kandy-in-sri-lanka-slider-1.jpg' },
    { id: 4, name: 'kandy', description: 'Engaging content for your audience', image: 'https://t3.ftcdn.net/jpg/03/09/55/12/360_F_309551222_SPlNjW87clBgksIZWKeU1SiUTjK0gu7y.jpg' },
    { id: 5, name: 'kandy', description: 'Eye-catching visuals', image: 'https://cdn.pixabay.com/photo/2013/11/03/11/58/temple-204803_1280.jpg' },
    { id: 6, name: 'kandy', description: 'Boost your online presence', image: 'https://srilankadriverguides.com/wp-content/uploads/2020/03/Kandy.jpg' },
    { id: 7, name: 'kandy', description: 'Set up your online store', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHkBUffBb99VkokiJ_P5LrvnZWptFqadq7lQ&s' },
    { id: 8, name: 'kandy', description: 'Professional video content', image: 'https://littlewanderbook.com/wp-content/uploads/2020/02/Kandy-Sri-Lanka-3.jpg' },
    { id: 9, name: 'kandy', description: 'Reach your customers directly', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI-raVwhHOng6v7rdWd5FTbsvgCKbI5Dz2_A&s' },
    { id: 10, name: 'kandy', description: 'Create intuitive user experiences', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDxf30FmuVDjolcmD_n0q9LOaElsspEPpw2A&s' },
    { id: 11, name: 'kandy', description: 'Insights from your data', image: 'https://www.lanka-excursions-holidays.com/uploads/4/0/2/1/40216937/nelligala-dscf1966-450_orig.jpg' },
    { id: 12, name: 'kandy', description: 'Scalable cloud solutions', image: 'https://www.torntackies.com/wp-content/uploads/2020/06/Places-to-visit-in-Kandy-Sri-Lanka.jpg' },
    { id: 13, name: 'kandy', description: 'Protect your digital assets', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK1bVFOlIxargua2uxhpXqQLayNWsrtFYf9A&s' },
    { id: 14, name: 'kandy', description: 'Implement AI in your business', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr-iAkmsGCJgh_qR9qn0OTXOfDpfvJjc65Ow&s' },
    { id: 15, name: 'kandy', description: 'Secure, decentralized solutions', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWxLGzQwL7dWfFRTJ7HumHXkKiH_Q9O60biw&s' },
    { id: 16, name: 'kandy', description: 'Connect your devices', image: 'https://www.destguides.com/dynamic-files/itinerary/2424/background-image.jpg' },
    { id: 17, name: 'kandy', description: 'Immersive experiences', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlzPf1XegwcUvuSCJaKDhsRYIgDz9onRjqjA&s' },
    { id: 18, name: 'kandy', description: '24/7 support for your clients', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsG7Gk59HxgSGzQQveWV1sLxarP2BwgCuUVg&s' },
    { id: 19, name: 'kandy', description: 'Efficient project delivery', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmDJdwk2PcIY9k_1sMf3B2KpVqFKVxnFAg7Q&s' },
    { id: 20, name: 'kandy', description: 'Expert tech advice', image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/d7/c5/a7.jpg' },
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