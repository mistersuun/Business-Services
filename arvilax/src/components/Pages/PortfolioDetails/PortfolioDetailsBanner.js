import React from "react";
import { Link } from "react-router-dom";
import portfolio_data from "../../../data/projectData.json";

const PortfolioDetailsBanner = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const title = urlParams.get("title");
  const project = portfolio_data.find(
    (item) => item.title.toLowerCase() === title.toLowerCase()
  );
  return (
    <>
      <section
        className="breadcrumb__area include-bg breadcrumb__overlay portfolio_banner_single"
        // data-background="assets/img/breadcrumb/breadcrumb-bg-2.jpg"
        style={{
          backgroundImage: `url("assets/img/breadcrumb/breadcrumb-bg-2.jpg")`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content text-center p-relative z-index-1">
                <h3 className="breadcrumb__title">Portfolio</h3>
                <div className="breadcrumb__list">
                  <span>
                    <Link to="/">Home</Link>
                  </span>
                  <span className="dvdr">:</span>
                  <span>{project.title}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioDetailsBanner;
