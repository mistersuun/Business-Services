import React from "react";
import Brands from "../../common/Brands/Brands";
import Menu from "../../common/Menu/Menu";
import Testimonial from "../../common/Testimonial/Testimonial";
//import Services from "../../HomeTwo/Services";
import AboutBanner from "./AboutBanner";
import AboutCompany from "./AboutCompany";
import AboutFeature from "./AboutFeature";
import FooterTwo from "../../common/Footer/FooterTwo";

const About = () => {
  return (
    <>
      <Menu header_style_2={true} />
      <AboutBanner />
      <AboutCompany />
      <AboutFeature />
      <Testimonial />
      <Brands />
      <FooterTwo />
    </>
  );
};

export default About;
