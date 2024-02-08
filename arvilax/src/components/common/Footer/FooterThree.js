import React from 'react';
import { Link } from 'react-router-dom';

const FooterThree = () => {
  return (
    <footer>
      <div className="tp-footer__area black-bg">
        <div className="tp-footer">
          {/* <!-- main-footer start  --> */}
          <div className="tp-footer__main">
            <div className="container">
              <div className="tp-footer-border pt-100 pb-70">
                <div className="pb-30 pb-70">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <div className="footer-logo mb-30">
                        <Link to="/" href="#"><img src="/assets/img/logo/logo.png" alt="" /></Link>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 text-end">
                      <div className="footer-form-2 mb-30">
                        <form>
                          <input type="email" placeholder="Enter your mail" />
                          <button type="submit">Subscribe <i
                            className="fal fa-paper-plane"></i></button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className="tp-footer__widget tp-footer__2 pb-30">
                      <h3 className="tp-footer__widget-title text-white">Our Locations</h3>
                      <ul>
                        <li><a href="#">London</a></li>
                        <li><a href="#">America</a></li>
                        <li><a href="#">Costa Rica</a></li>
                        <li><a href="#">Germany</a></li>
                        <li><a href="#">India</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="tp-footer__widget tp-footer__2 pb-30">
                      <h3 className="tp-footer__widget-title text-white">Our Services</h3>
                      <ul>
                        <li><a href="#">Web Design</a></li>
                        <li><a href="#">Branding</a></li>
                        <li><a href="#">Digital strategy</a></li>
                        <li><a href="#">Business Development</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 ">
                    <div className="tp-footer__widget tp-footer__2  pb-30">
                      <h3 className="tp-footer__widget-title text-white">Quick Links</h3>
                      <ul>
                        <li><a href="/faq">FAQ</a></li>
                        <li><a href="/about">About us</a></li>
                        <li><a href="/contact">Contact</a></li>
                      </ul>
                    </div>
                  </div>
                  {/*
                  <div className="col-lg-3 col-md-6">
                    <div className="tp-footer__widget tp-footer__2  pb-30">
                      <h3 className="tp-footer__widget-title text-white">Contact</h3>
                      <ul>
                        <li><a href="#">537 Jacques-Cartier St, Longueuil, QC J4L 4A5, CA</a></li>
                        <li><a href="tel:+15142955315">(+1) 514-295-5315</a></li>
                        <li><a href="mailto:contact@bloomrise.ca">contact@bloomrise.ca</a></li>
                        <li><span> Office Hours: 7AM - 9PM</span></li>
                        <li><span> Monday - Friday</span></li>
                      </ul>
                    </div>
                  </div>
                  */}
                </div>
              </div>
            </div>
          </div>
          {/* <!-- main footer end  --> */}
        </div>
      </div>

      {/* <!-- footer copy right --> */}
      <div className="top-footer-copyright pt-30 pb-30 black-bg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-copyrigh-text text-center text-white">
                <span>© {new Date().getFullYear()} BloomRise - Business and Software Consulting . All Rights Reserved..</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- footer copyright end  --> */}
    </footer>
  );
};

export default FooterThree;