import React from "react";
import Brands from "../../common/Brands/Brands";
import Contact from "../../common/Contact/Contact";
import Menu from "../../common/Menu/Menu";
import Testimonial from "../../common/Testimonial/Testimonial";
import OurService from "./OurService";
import ServiceAbout from "./ServiceAbout";
import ServiceBanner from "./ServiceBanner";
import FooterTwo from "../../common/Footer/FooterTwo";

const Service = () => {
  return (
    <>
      <Menu header_style_2={true} />
      <ServiceBanner />
      <OurService />
      <ServiceAbout />
      <Contact />
      <Testimonial />
      <Brands />
      <FooterTwo />
    </>
  );
};

export default Service;
