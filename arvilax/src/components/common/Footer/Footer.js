import React from "react";

const Footer = () => {
  return (
    <>
      {/* <!-- footer area start --> */}
      <footer>
        <div className="tp-footer__area black-bg">
          <div className="tp-footer">
            {/* <!-- main-footer start  --> */}
            <div className="tp-footer__main">
              <div className="container">
                <div className="tp-footer-border pt-60 pb-30">
                  <div className="row">
                    <div className="col-lg-3 col-md-6">
                      <div className="tp-footer__widget  pb-30">
                        <h3 className="tp-footer__widget-title">
                          Our Locations
                        </h3>
                        <ul>
                          <li>
                            <a href="#">London</a>
                          </li>
                          <li>
                            <a href="#">America</a>
                          </li>
                          <li>
                            <a href="#">Costa Rica</a>
                          </li>
                          <li>
                            <a href="#">Germany</a>
                          </li>
                          <li>
                            <a href="#">India</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="tp-footer__widget pb-30">
                        <h3 className="tp-footer__widget-title">Our Services</h3>
                        <ul>
                          <li><a href="#">Web Design</a></li>
                          <li><a href="#">Branding</a></li>
                          <li><a href="#">Digital strategy</a></li>
                          <li><a href="#">Business Development</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 ">
                      <div className="tp-footer__widget  pb-30">
                        <h3 className="tp-footer__widget-title">Quick Links</h3>
                        <ul>
                          <li>
                            <a href="#">Our Team</a>
                          </li>
                          <li>
                            <a href="#">Faq</a>
                          </li>
                          <li>
                            <a href="#">Portfolio</a>
                          </li>
                          <li>
                            <a href="#">Service</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-6">
                      <div className="tp-footer__widget  pb-30">
                        <h3 className="tp-footer__widget-title">Contact</h3>
                        <ul>
                        <li><a href="tel:+15142955315">(+1) 514-295-5315</a></li>
                        <li><a href="mailto:contact@bloomrise.ca">contact@bloomrise.ca</a></li>
                        <li><span> Office Hours: 7AM - 9PM</span></li>
                        <li><span> Monday - Friday</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- main footer end  --> */}
          </div>
        </div>

        {/* <!-- footer copy right --> */}
        <div className="top-footer-copyright pt-30 black-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-12">
                <div className="tp-copyrigh-text mb-30">
                <span>© {new Date().getFullYear()} BloomRise - Business and Software Consulting</span>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="tp-footer-social-icon mb-30 text-md-end">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- footer copyright end  --> */}
      </footer>
      {/* <!-- footer area end --> */}
    </>
  );
};

export default Footer;
