import React, { useEffect, useState } from 'react';
import './home.css';
import Nav from '../navigationbar/nav';
import Footer from '../navigationbar/footer/footer';
import { Clock, CloudSun, Users, Landmark } from 'lucide-react';


const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const cardImages = [
    'https://cdn.wegic.ai/assets/onepage/ai/image/c93e98b7-67df-4854-9043-af606d5ceafc.jpeg',
    'https://cdn.wegic.ai/assets/onepage/ai/image/5b071d1b-c6c6-4fae-8835-6d0c6cae2cf6.jpeg',
    'https://cdn.wegic.ai/assets/onepage/ai/image/fb9f087f-f677-45a3-845d-15be9b112708.jpeg',
    'https://cdn.wegic.ai/assets/onepage/ai/image/b8b654d5-a9d6-455f-9554-447192a46257.jpeg',
  ];

  const services = [
    { title: 'Historical Significance', imgSrc: 'https://www.logodee.com/wp-content/uploads/2021/10/26.jpg' },
    { title: 'Cultural Festivals', imgSrc: 'https://images-platform.99static.com//SxCErt1zjd1ib35vyLqHFqlI9H0=/148x123:1085x1060/fit-in/590x590/99designs-contests-attachments/80/80253/attachment_80253079' },
    { title: 'Natural Beauty', imgSrc: 'https://st2.depositphotos.com/2100659/9816/v/450/depositphotos_98163818-stock-illustration-media-generation-vector-logo-concept.jpg' },
    { title: 'Wonders', imgSrc: 'https://t4.ftcdn.net/jpg/01/15/27/23/360_F_115272368_Y27Y8hrcfULkLnn5XIw406EN4XHp8j0W.jpg' }
  ];

  return (
    <>
      <Nav />
  
    <div className="hlp-home">
      <header className="hlp-header">
        <div className="hlp-cover-image">
          <div className="hlp-content-wrapper">
            <div className="hlp-text-content">
              <h1 className={`hlp-title ${isVisible ? 'hlp-visible' : ''}`}>
              Experience the Enchantment of Kandy
              </h1>
              <p className={`hlp-subtitle ${isVisible ? 'hlp-visible' : ''}`}>
                Join us in exploring the rich culture, stunning landscapes, and historical landmarks of Kandy, Sri Lanka. Dive into a journey of discovery and wonder.
              </p>
              <ul className={`hlp-features ${isVisible ? 'hlp-visible' : ''}`}>
                <li><i className="fas fa-map-marked-alt"></i> Personalized Tours</li>
                <li><i className="fas fa-shield-alt"></i> Safe Travel</li>
                <li><i className="fas fa-globe-americas"></i> Global Reach</li>
              </ul>
            </div>
            <div className="hlp-moving-cards-container">
              <div className="hlp-moving-cards">
                {[...cardImages, ...cardImages].map((image, index) => (
                  <div key={index} className="hlp-card">
                    <img src={image} alt={`Card ${(index % 4) + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="hlp-about-us">
        <h2  style={{textAlign:'center' ,color:'white'}}  className="hlp-section-title">Unveil the Wonders</h2>
        <p style={{color:'white'}} className="hlp-about-text">
        Kandy is a vibrant city nestled in the central highlands of Sri Lanka, known for its rich cultural heritage, scenic beauty, and historical significance. As the last royal capital of the island, Kandy retains much of its regal charm, with the stunning Temple of the Sacred Tooth Relic serving as a focal point for both locals and tourists. The city's bustling streets are lined with colonial-era buildings, local markets, and traditional crafts, offering a glimpse into its deep-rooted traditions. Surrounded by misty hills and emerald-green tea plantations, Kandy offers breathtaking views and peaceful escapes into nature, whether it’s a stroll around the picturesque Kandy Lake or a hike through the nearby Knuckles Mountain Range. Visitors can explore the city's many cultural landmarks, including the Royal Botanical Gardens in Peradeniya and the grand Esala Perahera festival, which showcases a magnificent procession of elephants, dancers, and drummers. Kandy's timeless appeal lies in its ability to harmoniously blend its historical significance, religious devotion, and natural beauty, making it a must-visit destination for those seeking an authentic Sri Lankan experience.        </p>
      </section>

      <section className="hlp-our-services">
        <h2 style={{textAlign:'center'}} className="hlp-section-title">Unveil the Wonders</h2>
        <div className="hlp-services-grid">
      {services.map((service, index) => (
        <div className="hlp-service-item" key={index}>
          <img
            src={service.imgSrc}
            alt={service.title}
            className="hlp-service-image"
          />
          <h3 className="hlp-service-title">{service.title}</h3>
        </div>
      ))}
    </div>
      </section>

 {/* This is a JSX comment */}

      <div className="kandy-insights-container">
      <h1 className="kandy-insights-title">Current Kandy Insights</h1>
      <p className="kandy-insights-description">Stay updated with the latest stats about Kandy, including the current time and weather.</p>
      
      <div className="kandy-insights-grid">
        <div className="kandy-insights-box kandy-insights-box-time">
          <Clock className="kandy-insights-icon" />
          <h2 className="kandy-insights-box-title">Time</h2>
          <p className="kandy-insights-box-value">18:13</p>
        </div>
        
        <div className="kandy-insights-box kandy-insights-box-weather">
          <CloudSun className="kandy-insights-icon" />
          <h2 className="kandy-insights-box-title">Weather</h2>
          <p className="kandy-insights-box-value">27°C, Partly Cloudy</p>
        </div>
        
        <div className="kandy-insights-box kandy-insights-box-population">
          <Users className="kandy-insights-icon" />
          <h2 className="kandy-insights-box-title">Population</h2>
          <p className="kandy-insights-box-value">125,000+</p>
        </div>
        
        <div className="kandy-insights-box kandy-insights-box-attractions">
          <Landmark className="kandy-insights-icon" />
          <h2 className="kandy-insights-box-title">Tourist Attractions</h2>
          <p className="kandy-insights-box-value">50+</p>
        </div>
      </div>
    </div>

 {/* This is a JSX comment */}
 <div style={{marginTop:'10%'}}   className="kandyCTN">
      <div className="kandyContent">
        <h1 className="kandyTitle">Cultural and Historical Significance</h1>
        <p className="kandyDesc">
          Kandy is renowned for its rich cultural heritage and historical significance. The city is home to the Temple of the Tooth, one of the most sacred Buddhist sites, and hosts the grand Esala Perahera festival.
        </p>
        <div className="kandyFeatures">
          <div className="kandyFeat">
            <i className="fas fa-home"></i>
            <h2>Temple of the Tooth</h2>
            <p>A sacred Buddhist temple that houses the relic of the tooth of the Buddha.</p>
          </div>
          <div className="kandyFeat">
            <i className="fas fa-leaf"></i>
            <h2>Royal Botanical Gardens</h2>
            <p>A lush garden featuring a wide variety of plants and flowers.</p>
          </div>
          <div className="kandyFeat">
            <i className="fas fa-mask"></i>
            <h2>Esala Perahera</h2>
            <p>An annual cultural festival showcasing traditional music, dance, and pageantry.</p>
          </div>
        </div>
      </div>
      <div className="kandyImg">
        <img src="https://cdn.wegic.ai/assets/onepage/ai/image/2df58b0a-b20b-4c5d-ac8d-b66419dae5e4.jpeg" alt="Kandy Cultural Site" />
      </div>
    </div>
   



 {/* This is a JSX comment */}
    <div  style={{marginTop:'10%'}} className="kandy-cultural-significance">
      <h1 className="title">Cultural and Historical Significance</h1>
      <p className="description">
        Kandy is renowned for its rich cultural heritage and historical significance. The city is home to the Temple of the Tooth, one of the most sacred Buddhist sites, and hosts the grand Esala Perahera festival.
      </p>
      <div className="landmarks">
        <div className="landmark">
          <i className="fas fa-home"></i>
          <h2>Temple of the Tooth</h2>
          <p>A sacred Buddhist temple that houses the relic of the tooth of the Buddha.</p>
        </div>
        <div className="landmark">
          <i className="fas fa-bell"></i>
          <h2>Royal Botanical Gardens</h2>
          <p>A lush garden featuring a wide variety of plants and flowers.</p>
        </div>
        <div className="landmark">
          <i className="fas fa-mask"></i>
          <h2>Esala Perahera</h2>
          <p>An annual cultural festival showcasing traditional music, dance, and pageantry.</p>
        </div>
      </div>
    </div>

    </div>
    <Footer />
    </>
  );
};

export default Home;