import React from "react";
import { Link } from "react-router-dom";

const ServiceDetailsBanner = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const title = urlParams.get("title");

  return (
    <>
      <section
        className="breadcrumb__area include-bg breadcrumb__overlay service_banner"
        // data-background="assets/img/breadcrumb/breadcrumb-bg-2.jpg"
        style={{
          backgroundImage: `url("assets/img/breadcrumb/breadcrumb-bg-2.jpg")`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content text-center p-relative z-index-1">
                <h3 className="breadcrumb__title">Services</h3>
                <div className="breadcrumb__list">
                  <span>
                    <Link to="/">Service</Link>
                  </span>
                  <span className="dvdr">:</span>
                  <span>{title}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsBanner;
