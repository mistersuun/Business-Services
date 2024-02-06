import React, { useState } from "react";
import VideoPopup from "../../common/Modals/VideoPopup";
import serviceData from "../../../data/serviceData.json";

const ServiceDetailsAbout = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const title = urlParams.get("title");
  const service = serviceData.find(
    (item) => item.title.toLowerCase() === title.toLowerCase()
  );
  const [isVideoOpen,setIsVideoOpen] = useState(false);
  return (
    <>
      <div className="tp-service-page pt-140 pb-140">
        <div className="container">
          <div className="row pb-30">
            <div className="col-lg-6 mb-30">
              <div className="tp-sv-inner-img w-img">
                <img src="/assets/img/service/service-blog-1.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 mb-30">
              <div className="tp-sv-inner-img w-img">
                <img src="/assets/img/service/service-blog-2.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-sv__content">
                <h3 className="tp-sv__title">{service.title}</h3>
                <p>
                  {service.text1}
                </p>

                <p>
                {service.text2}
                </p>

                <h4 className="tp-sv__subtitle">
                  {service.subtitle}
                </h4>
                <p>
                {service.text3}
                </p>
                <p>
                  {service.text4}
                </p>

                <p>
                  {service.text5}
                </p>

                <div className="tp-sv__video">
                  <div
                    className="tp_sv__video-bg"
                    // data-background="/assets/img/service/service-blog-bg.jpg"
                    style={{
                      backgroundImage: `url("/assets/img/service/service-blog-bg.jpg")`,
                    }}
                  >
                    <div className="pt-180 pb-180 text-center p-relative">
                      <span>
                        <button
                          onClick={()=> setIsVideoOpen(true)}
                          className="sv-video sv-popup-video"
                        >
                          <i className="fas fa-play"></i>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"HXgWqv9x7l0"}
      />
      {/* video modal end */}
    </>
  );
};

export default ServiceDetailsAbout;
