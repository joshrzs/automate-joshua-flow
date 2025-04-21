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
        slidesPerView={2} // Default for mobile view
        spaceBetween={20}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 2 }, // Mobile view
          480: { slidesPerView: 3 }, // Mobile view
          640: { slidesPerView: 4 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 6 },
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
