import React from "react";

const AboutCompany = () => {
  return (
    <>
      <div className="about-details-page pt-140 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-details-info pr-65">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-25">
                    About our Company
                  </span>
                  <h2 className="tp-pt-size mb-40">
                    Our business boasts top of the line services
                  </h2>
                </div>
                <div className="about-tb-content">
                  <nav>
                    <div className="nav mb-30" id="nav-tab" role="tablist">
                      <button
                        className="nav-links active"
                        id="mission"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-mission"
                        type="button"
                        role="tab"
                        aria-controls="nav-mission"
                        aria-selected="true"
                      >
                        Our Mission
                      </button>

                      <button
                        className="nav-links"
                        id="nav-vission-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-vission"
                        type="button"
                        role="tab"
                        aria-controls="nav-vission"
                        aria-selected="false"
                      >
                        Our Vision
                      </button>
                      <button
                        className="nav-links"
                        id="nav-value-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-value"
                        type="button"
                        role="tab"
                        aria-controls="nav-value"
                        aria-selected="false"
                      >
                        Our Values
                      </button>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-mission"
                      role="tabpanel"
                      aria-labelledby="nav-mission"
                    >
                      <p>
                        At BinaryTech, our mission is to empower businesses with the
                        tools and strategies they need to succeed in the ever-evolving
                        digital landscape. We are committed to creating powerful, memorable
                        brand identities that resonate with audiences and to delivering
                        software solutions that drive growth and efficiency. Our core
                        belief is that your success is our success, and this principle
                        guides every aspect of our work. Whether it's revamping your online
                        presence, managing your projects, or developing cutting-edge software,
                        we approach every project with dedication and a relentless pursuit of
                        excellence. We are here to provide the digital solutions that will propel
                        your business forward.
                      </p>

                      <p>
                        Our mission is underpinned by a passion for innovation, a commitment to customer
                        satisfaction, and a dedication to staying at the forefront of industry trends. We
                        understand that in today's fast-paced world, adaptability and creative problem-solving
                        are key. BinaryTech is your trusted partner in achieving your digital goals. We look 
                        forward to collaborating with you, understanding your unique needs, and crafting
                        solutions that will not only meet your objectives but also exceed your expectations.
                        Your success is our ultimate measure of achievement, and we're ready to embark on this
                        journey with you.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-vission"
                      role="tabpanel"
                      aria-labelledby="nav-vission-tab"
                    >
                      <p>
                        At BinaryTech, our vision is to be a trailblazer in the world of digital transformation.
                        We aspire to be the go-to partner for businesses seeking to harness the full potential of
                        the digital age. We envision a future where every business, regardless of its size, can have
                        a powerful online presence and access top-tier software solutions. Our commitment to innovation,
                        efficiency, and excellence drives us to continually explore new horizons in branding, project
                        management, and software development. We strive to create a world where technology empowers
                        businesses, enhances customer experiences, and ensures long-term success.
                      </p>

                      <p>
                        Our vision centers around pioneering new standards in quality and customer satisfaction. We
                        aim to be at the forefront of emerging technologies and industry best practices, while also
                        remaining deeply customer-centric. By adhering to these principles, BinaryTech envisions a
                        future where businesses can confidently navigate the digital landscape, embrace change, and
                        thrive. We're dedicated to the ongoing pursuit of our vision, pushing boundaries to provide
                        our clients with the best solutions and strategies to secure their place as leaders in their
                        respective industries.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-value"
                      role="tabpanel"
                      aria-labelledby="nav-value-tab"
                    >
                    <span><b>1. Innovation</b></span>
                      <p>
                        We are driven by a relentless pursuit of innovation. We believe that the digital world is constantly
                        evolving, and to stay ahead, we embrace creativity, new technologies, and out-of-the-box thinking.
                        We are committed to delivering fresh, forward-thinking solutions that set our clients apart in their
                        respective industries.
                      </p>

                      <span><b>2. Customer-Centric Approach</b></span>
                      <p>
                        Our clients are at the heart of everything we do. We place a high value on building strong, lasting
                        relationships with our clients. Our solutions are tailored to meet their unique needs and goals. We
                        listen, understand, and collaborate closely to ensure their satisfaction and success.
                      </p>

                      <span><b>3. Excellence</b></span>
                      <p>
                        We hold ourselves to the highest standards of quality and excellence in every project we undertake.
                        From branding to project management and software development, our dedication to achieving outstanding
                        results is unwavering. We strive for continuous improvement and to consistently exceed our clients'
                        expectations. Our commitment to excellence is the foundation upon which we build trust and long-term
                        partnerships.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-end">
              <div className="tp-about-img-box p-relative d-inline-block mb-30">
                <div className="about-page-img">
                  <img src="assets/img/about/about-page.png" alt="" />
                </div>
                <div className="dots-img">
                  <img src="assets/img/about/dot.jpg" alt="" />
                </div>
                <div className="about-info-box d-flex flex-column justify-content-center text-center">
                  <h3 className="box-title">8</h3>
                  <h4 className="box-subtitle">
                    Years of <br />
                    Experience
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCompany;
