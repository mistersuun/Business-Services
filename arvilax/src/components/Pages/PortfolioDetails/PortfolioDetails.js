import React from "react";
import Menu from "../../common/Menu/Menu";
import PortfolioDetailsBanner from "./PortfolioDetailsBanner";
import PortfolioDetailsSingle from "./PortfolioDetailsSingle";
import FooterTwo from "../../common/Footer/FooterTwo";

const PortfolioDetails = () => {
  return (
    <>
      <Menu header_style_2={true} />
      <PortfolioDetailsBanner />
      <PortfolioDetailsSingle />
      <FooterTwo />
    </>
  );
};

export default PortfolioDetails;
