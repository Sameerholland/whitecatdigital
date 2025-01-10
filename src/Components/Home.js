import React, { useEffect, useState } from 'react';
import CarouselOne from '../Crousels/Courselone';
import '../Css/Home.css'
import celebration from '../media/images/celebration.png'
import model1 from "../media/images/model1.jpg";
import model2 from "../media/images/model2.jpg";
import model3 from "../media/images/model3.jpg";
import model4 from "../media/images/model4.jpg";
import DownloadApp from './Subcomponents/DownloadApp';
import ContactPage from './Subcomponents/ContactPage';
import Services from './Subcomponents/Services';



const Home = () => {
  const [celebCount, setCelebCount] = useState(0);
    const [eventCount, setEventCount] = useState(0);
    const [cityCount, setCityCount] = useState(0);
  
    const targetCeleb = 400;
    const targetEvent = 800; // Example target for events
    const targetCity = 200; // Example target for cities
  
    useEffect(() => {
      
  
      // Reset counts when slide becomes active
      setCelebCount(0);
      setEventCount(0);
      setCityCount(0);
  
      const celebInterval = setInterval(() => {
        setCelebCount((prev) => {
          if (prev < targetCeleb) {
            return prev + 1;
          } else {
            clearInterval(celebInterval);
            return prev;
          }
        });
      }, 10);
  
      const eventInterval = setInterval(() => {
        setEventCount((prev) => {
          if (prev < targetEvent) {
            return prev + 2; // Faster counting for events
          } else {
            clearInterval(eventInterval);
            return prev;
          }
        });
      }, 10);
  
      const cityInterval = setInterval(() => {
        setCityCount((prev) => {
          if (prev < targetCity) {
            return prev + 1;
          } else {
            clearInterval(cityInterval);
            return prev;
          }
        });
      }, 20); // Slower counting for cities
  
      return () => {
        clearInterval(celebInterval);
        clearInterval(eventInterval);
        clearInterval(cityInterval);
      };
    }, []);

  return (
    <div id="home">
      <CarouselOne />
      <div className='home-aboutus'>
        <p className='home-aboutus-heading'>ABOUT US</p>
        <div className='home-aboutus-contanier'>
          <div className='home-aboutus-contanierimg'>
            <img src={celebration} className='home-aboutus-contanierimg-img'/>

          </div>
          <div className='home-aboutus-contanierlists'>
            <ol>
              <li><b>Expert Development Services:</b> Specializes in creating high-quality websites and mobile applications tailored to meet diverse business needs.</li>
              <li><b> Designs:</b>Modern Delivers visually appealing and user-friendly interfaces that enhance user engagement and brand identity.</li>
              <li>
              <b>Cutting-Edge Technology:</b> Utilizes the latest tools and technologies to ensure robust performance and scalability across platforms.
              </li>
              <li><b>Customized Solutions:</b> Offers personalized development strategies for startups and established businesses to achieve their digital goals.</li>
              <li><b>Dedicated Support: </b>Ensures seamless project execution with ongoing support and maintenance to keep your digital assets performing at their best.</li>
            </ol>
            <button className='home-aboutus-contanierbutton'>Know More</button>
          </div>
        </div>

      </div>
      <div className='home-services'>
        <p className='home-services-heading'>OUR SERVICES</p>
        <Services/>

      </div>
      <div>
        <DownloadApp/>
      </div>
      <div>
      <div className="portfolio-container1">
      <div className="portfolio-stat">
        <p className="portfolio-count">{celebCount}+</p>
        <p className="portfolio-label">Active Celebrities </p>
      </div>
      <div className="portfolio-stat">
        <p className="portfolio-count">{eventCount}+</p>
        <p className="portfolio-label">Events Completed</p>
      </div>
      <div className="portfolio-stat">
        <p className="portfolio-count">{cityCount}+</p>
        <p className="portfolio-label">Across Cities</p>
      </div>
    </div>
    <ContactPage/>
    <div>
    
      </div>
      </div>
    </div>
  );
};

export default Home;
