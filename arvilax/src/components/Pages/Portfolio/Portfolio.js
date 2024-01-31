import React from "react";
import Menu from "../../common/Menu/Menu";
import PortfolioBanner from "./PortfolioBanner";
import PortfolioItems from "./PortfolioItems";
import FooterTwo from "../../common/Footer/FooterTwo";

const Portfolio = () => {
  return (
    <>
      <Menu header_style_2={true} />
      <PortfolioBanner />
      <PortfolioItems />
      <FooterTwo />
    </>
  );
};

export default Portfolio;
