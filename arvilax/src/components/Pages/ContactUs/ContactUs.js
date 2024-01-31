import React from "react";
import Menu from "../../common/Menu/Menu";
import ContactInfo from "./ContactInfo";
import ContactUsBanner from "./ContactUsBanner";
import FooterTwo from "../../common/Footer/FooterTwo";

const ContactUs = () => {
  return (
    <>
      <Menu header_style_2={true} />
      <ContactUsBanner />
      <ContactInfo />
      <FooterTwo />
    </>
  );
};

export default ContactUs;
