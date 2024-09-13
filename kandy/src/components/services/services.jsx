import React from 'react';
import './services.css'
import Nav from '../navigationbar/nav';
import Footer from '../navigationbar/footer/footer';

const ServicesPage = () => {
  const services = [
    { id: 1, name: 'Guided Jeep Safari', description: 'Explore Kandy’s wilderness with expert guides leading the way.', image: 'https://whc.unesco.org/uploads/thumbs/site_0450_0020-1200-630-20151105154018.jpg' },
    { id: 2, name: 'Wildlife Photography Tours', description: 'Capture stunning wildlife moments with professional photographers.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0-1nOvm_Oad4OsTByF3mOd4vr1KIqKibyeA&s' },
    { id: 3, name: 'Birdwatching Excursions', description: 'Discover Kandy’s diverse bird species on specialized tours.', image: 'https://www.srilankainstyle.com/storage/app/media/uploaded-files/7-reasons-to-visit-kandy-in-sri-lanka-slider-1.jpg' },
    { id: 4, name: 'Night Safaris', description: 'Experience the thrill of Kandys wildlife under the stars.', image: 'https://t3.ftcdn.net/jpg/03/09/55/12/360_F_309551222_SPlNjW87clBgksIZWKeU1SiUTjK0gu7y.jpg' },
    { id: 5, name: 'Hiking Adventures', description: 'Embark on guided hikes through Kandy’s scenic trails.', image: 'https://cdn.pixabay.com/photo/2013/11/03/11/58/temple-204803_1280.jpg' },
    { id: 6, name: 'Elephant Watching Tours', description: 'Get up close with Kandy’s majestic elephants in their natural habitat.', image: 'https://srilankadriverguides.com/wp-content/uploads/2020/03/Kandy.jpg' },
    { id: 7, name: 'Waterfall Sightseeing', description: 'Visit hidden waterfalls nestled in Kandy’s lush landscapes.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHkBUffBb99VkokiJ_P5LrvnZWptFqadq7lQ&s' },
    { id: 8, name: 'Cultural Village Tours', description: 'Explore the local villages and learn about the culture and traditions.', image: 'https://littlewanderbook.com/wp-content/uploads/2020/02/Kandy-Sri-Lanka-3.jpg' },
    { id: 9, name: 'Luxury Safari Packages', description: ' Enjoy a premium safari experience with luxury amenities.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI-raVwhHOng6v7rdWd5FTbsvgCKbI5Dz2_A&s' },
    { id: 10, name: 'Family Safari Trips', description: 'Tailored safari experiences perfect for families and children.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDxf30FmuVDjolcmD_n0q9LOaElsspEPpw2A&s' },
    { id: 11, name: 'Picnic Safaris', description: 'Combine adventure with a scenic picnic in the heart of nature.', image: 'https://www.lanka-excursions-holidays.com/uploads/4/0/2/1/40216937/nelligala-dscf1966-450_orig.jpg' },
    { id: 12, name: 'Bird Sanctuary Tours', description: 'Visit local bird sanctuaries and observe rare species.', image: 'https://www.torntackies.com/wp-content/uploads/2020/06/Places-to-visit-in-Kandy-Sri-Lanka.jpg' },
    { id: 13, name: 'Botanical Garden Safaris', description: 'A serene journey through Kandy’s beautiful botanical gardens.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK1bVFOlIxargua2uxhpXqQLayNWsrtFYf9A&s' },
    { id: 14, name: 'Historical Site Safaris', description: 'Discover ancient temples and monuments on your safari route.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr-iAkmsGCJgh_qR9qn0OTXOfDpfvJjc65Ow&s' },
    { id: 15, name: 'River Rafting Adventures', description: 'Add some thrill with an exhilarating rafting experience.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWxLGzQwL7dWfFRTJ7HumHXkKiH_Q9O60biw&s' },
    { id: 16, name: 'Eco-Friendly Safaris', description: 'Explore Kandy with minimal environmental impact using eco-friendly vehicles.', image: 'https://www.destguides.com/dynamic-files/itinerary/2424/background-image.jpg' },
    { id: 17, name: 'Camping Safaris', description: 'Spend the night in the wilderness with our fully equipped camping services.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlzPf1XegwcUvuSCJaKDhsRYIgDz9onRjqjA&s' },
    { id: 18, name: 'Off-Road Adventures', description: 'Tackle rugged terrains with our off-road safari vehicles', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsG7Gk59HxgSGzQQveWV1sLxarP2BwgCuUVg&s' },
    { id: 19, name: 'Private Safari Tours', description: 'Enjoy an exclusive and personalized safari experience.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmDJdwk2PcIY9k_1sMf3B2KpVqFKVxnFAg7Q&s' },
    { id: 20, name: 'Animal Conservation Tours', description: 'Learn about and contribute to the conservation efforts in Kandy.', image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/d7/c5/a7.jpg' },
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