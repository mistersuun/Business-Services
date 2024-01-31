import React from "react";
import Contact from "../../common/Contact/Contact";
import Menu from "../../common/Menu/Menu";
import ServiceDetailsAbout from "./ServiceDetailsAbout";
import ServiceDetailsBanner from "./ServiceDetailsBanner";
import FooterTwo from "../../common/Footer/FooterTwo";

const ServiceDetails = () => {
  return (
    <>
      <Menu header_style_2={true} />
      <ServiceDetailsBanner />
      <ServiceDetailsAbout />
      <Contact />
      <FooterTwo />
    </>
  );
};

export default ServiceDetails;
