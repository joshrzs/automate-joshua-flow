import React from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const logos = [
  '/logos/zapier.png',
  '/logos/make.png',
  '/logos/ghl.png',
  '/logos/chatgpt.png',
  '/logos/shopify.png',
  '/logos/calendly.png',
  '/logos/mailchimp.png',
  '/logos/activecampaign.png',
  '/logos/hubspot.png',
  '/logos/clickfunnels.png',
  '/logos/slack.png',
  '/logos/discord.png',
  '/logos/typeform.png',
  '/logos/googleforms.png',
  '/logos/googlesheets.png',
  '/logos/airtable.png',
  '/logos/notion.png',
  '/logos/dropbox.png',
  '/logos/googledrive.png',
];

const LogoSlider = () => {
  return (
    <div className="w-full py-8">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={2} // Default to 2 on mobile
        spaceBetween={10} // Space between logos
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 }, // For very small screens
          480: { slidesPerView: 3, spaceBetween: 15 }, // For slightly larger mobile screens
          640: { slidesPerView: 4, spaceBetween: 20 }, // Tablets and small laptops
          768: { slidesPerView: 5, spaceBetween: 25 }, // Medium screens
          1024: { slidesPerView: 6, spaceBetween: 30 }, // Larger screens
        }}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <img
              src={logo}
              alt={`Logo ${index}`}
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogoSlider;

