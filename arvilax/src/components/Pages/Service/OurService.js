import React from "react";
import { ServiceItem } from "../../HomeTwo/Services";
import serviceData from "../../../data/serviceData.json";

const OurService = () => {
  const serviceArray = serviceData;

  return (
    <>
      <div className="tp-service-ara grey-bg-4 pt-140 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-section-wrapper text-center mb-70">
                <span className="tp-section-subtitle mb-30">OUR SERVICES</span>
                <h2 className="tp-section-title">Explore Our Services</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {serviceArray.map((service, index) => (
              <ServiceItem
                key={index}
                icon={service.icon}
                title={service.title}
                desc={service.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurService;
