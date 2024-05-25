// src/CardSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Card.css'; // Import the CSS file for styling

const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cards = [
    {

        btn1: `DIGITAL MARKETING`,
        btn2: `UX,VISUAL DESIGN & BRANDING`,
        btn3: `WEB DESIGN & DEVELOPMENT `,
    
        image: 'https://www.windmillstrategy.com/wp-content/uploads/2022/09/Global-Tranz.png',
        title: 'B2B logistic and transplant website redesign gives better foundation for quality content creation ',
      description: 'Transportaion and logistic supply chain company Globaltranz needed a website that could generate leads via improved content strategy and flexbility.',
    },
    {

      btn1: `DIGITAL MARKETING`,
    
        btn2: `UX,VISUAL DESIGN & BRANDING`,
        btn3: `WEB DESIGN & DEVELOPMENT `,
    
        image: 'https://www.windmillstrategy.com/wp-content/uploads/2022/09/Imbio.png',
        title: 'Medical imaging  daostics software company website redesign ',
      description: 'Medical imaging  daostics software company lnbio wanted a new website that met their growth needs, improved theri navigationn,and highlighted new partners hipa.',
    },
    {
        btn1: `DIGITAL MARKETING`,
        btn2: `UX,VISUAL DESIGN & BRANDING`,
        btn3: `WEB DESIGN & DEVELOPMENT `,
        image: 'https://www.windmillstrategy.com/wp-content/uploads/2022/09/ETI.png',
        title: 'Increased lead quality  for an electronic contract manufacture  ',
      description: 'ETI , an electronic contrast manufacture ,needed refreshed branding ,a redesigned website , and ongoing digital marketing efforts to integrate an acquistion and generate higher quality leads.',
    },
    {
       
        btn1: `DIGITAL MARKETING`,

          btn2: `UX,VISUAL DESIGN & BRANDING`,
        btn3: `WEB DESIGN & DEVELOPMENT `,
        title: 'ncreased lead quality   and quantity for specially B2B industrial fastners company ',
        image: 'https://www.windmillstrategy.com/wp-content/uploads/2022/09/HALCO.png',
        description: 'Halsco USA needed an information-rich ,flexible website ,and onging SEO and digital marketing to supportsales ,to manufacture ,seeking specialyy enginnered hoop and loop materials.  ',
      },

      {
        btn1: `DIGITAL MARKETING`,
        btn2: `UX,VISUAL DESIGN & BRANDING`,
        btn3:`WEB DESIGN & DEVELOPMENT`,
        
          image: 'https://www.windmillstrategy.com/wp-content/uploads/2024/02/B2B-Industry-WebDesign-ClientName-Featured-Small.jpg',
          title: 'B2B  accessibility solutions provider website redegin meets need for improved organization and WCAG 2.1 AA companies ',
        description: 'Accessibility solutions provider TPGi wanted a new website that merged their two disparete bolgs and brought them into the future with an updated SEO-friendly design.  ',
      
    
    },
      {
        btn1: `DIGITAL MARKETING`,
        btn2: `UX,VISUAL DESIGN & BRANDING`,
        btn3:`WEB DESIGN & DEVELOPMENT`,

          image: ' https://www.windmillstrategy.com/wp-content/uploads/2021/01/B2B_Industrial_Automation_Manufacturing_digital_marketing_Featured-e1707318123360.png',
          
          title: 'Increased in lead from updatedcmanufacturing digital marketing strategy ',
        description: 'A leading  decision precision filteration company needed to modernize its digital marketing strategy and over haul its paid search compaign ',
     
    
    },

      {
        btn1: `DIGITAL MARKETING`,
        btn2: `UX,VISUAL DESIGN & BRANDING`,
        btn3: `WEB DESIGN & DEVELOPMENT `,
          image: 'https://www.windmillstrategy.com/wp-content/uploads/2024/02/B2B-Industry-WebDesign-ClientName-Featured-Small.jpg',
          title: 'Website redesign with UX visual design focus supports brand image while improving functionality  ',
        description: 'An innovative OEM of  coustic and thermal amanagnment system automative industry  for the  automative industry needed a design-forward website to show case its brand image.',
      },
    {
      btn1: `DIGITAL MARKETING`,
    
        btn2: `UX,VISUAL DESIGN & BRANDING`,
        btn3: `WEB DESIGN & DEVELOPMENT `,
        image: 'https://www.windmillstrategy.com/wp-content/uploads/2024/03/B2B-Industry-WebDesign-Path-Evolved-Featured.jpg',
        title: 'Proprieatory AI technology and business growth lead to a redesigned and evolving industrial automation & robotics website ',
      description: 'An artificial intelience company specialixing in inteliigent industrial robots needed to evolve its web presense to align with the evolution of its prosperity AI technology and business growth.',
    },

  ];


  return (
    <div className="card-slider ">
  
      <Slider {...settings}>
      
        {cards.map((card, index) => (
          <div key={index} className="card h-[645px] mt-14 ">
            <img src={card.image} alt={card.title} className="card-image" />

            <div className="text-start btn">
            
            <button className="bg-gray-300   text-[12px] px-5 py-1 rounded-full">
            {card.btn1}
            </button>
            <button className="bg-gray-300 text-[12px] mt-2 mb-2  py-1 px-5 rounded-full ">
            {card.btn2}
            </button>
            <button className="bg-gray-300 text-[12px] px-5 py-1  rounded-full ">
            {card.btn3}
            </button>
            </div>
            <h2 className="font-bold text-start card-title">{card.title}</h2>
            <p className="text-start card-description">{card.description}</p>
            <div className='text-base py-2 text-start'>
          <a className='font-bold   text-orange-600' href="">VIEW FULL CASE STUDY</a>
            </div>
          </div>
         
        ))}
      </Slider>
      <div>
      <button className='font-bold py-2  rounded-xl mt-14 bg-orange-600 px-2'>VIEW ALL CASE STUDIES</button>
      </div>
    </div>
  );
};

export default CardSlider;
