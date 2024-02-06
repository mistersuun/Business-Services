import React, { useState } from 'react';

const FooterTwo = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

  const subscribe = async () => {
    try {
      const response = await fetch('/.netlify/functions/subscribe', {
        method: 'POST',
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        setStatus('SUCCESS');
      } else {
        setStatus('UNSUCCESSFUL');
      }

      // Clear email and reset status after 2 seconds
      setTimeout(() => {
        setEmail('');
        setStatus(null);
      }, 2000);
    } catch (error) {
      console.error('Error subscribing to Mailchimp:', error);
      setStatus('UNSUCCESSFUL');

      // Clear email and reset status after 2 seconds
      setTimeout(() => {
        setEmail('');
        setStatus(null);
      }, 2000);
    }
  };

  return (
    <footer>
      <div className="tp-footer__area black-bg">
        <div className="tp-footer">
          {/* <!-- main-footer start  --> */}
          <div className="tp-footer__main">
            <div className="container">
              <div className="tp-footer-border pt-100 pb-70">
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className="tp-footer__widget tp-footer__2 footer-col-2-1 pb-30">
                      <div className="footer-logo mb-30">
                        <a href="#"><img src="/assets/img/logo/logo.png" alt="" /></a>
                      </div>
                      {/*<p>Tellus rutrum tellus pellentesque eu. Sagittis purus sit amet volutpat. Sed ullamcorper tellus rutrum tellus pellentesque eu.Purus sit amet . Sed ullamcorper retherlly. </p> */}
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="tp-footer__widget tp-footer__2 footer-col-2-2 pb-30">
                      <h3 className="tp-footer__widget-title text-white">Our Location</h3>
                      <ul >
                        <li><a style={{cursor: "default"}} >London</a></li>
                        <li><a style={{cursor: "default"}} >America</a></li>
                        <li><a style={{cursor: "default"}} >Costa Rica</a></li>
                        <li><a style={{cursor: "default"}} >Germany</a></li>
                        <li><a style={{cursor: "default"}} >India</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 ">
                    <div className="tp-footer__widget tp-footer__2 footer-col-2-4  pb-30">
                      <h3 className="tp-footer__widget-title text-white">Newsletter</h3>
                      <div className="footer-form-3 mb-30">
                        <form onSubmit={(e) => e.preventDefault()}>
                          <input
                            type="email"
                            placeholder="Enter your email"
                            value={status === 'SUCCESS' ? 'SUCCESS' : status === 'UNSUCCESSFUL' ? 'UNSUCCESSFUL' : email}
                            style={{ color: status === 'SUCCESS' ? 'green' : status === 'UNSUCCESSFUL' ? 'red' : 'grey' }}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <i className="fal fa-paper-plane"></i>
                          <button onClick={subscribe}>Subscribe</button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="tp-footer__widget tp-footer__2 footer-col-2-3 pb-30">
                      <h3 className="tp-footer__widget-title text-white">Quick Links</h3>
                      <ul>
                        <li><a href='/about'>About Us</a></li>
                        <li><a href='/services'>Services</a></li>
                        <li><a href='/portfolio'>Portfolio</a></li>
                        <li><a href='/contact'>Let's Bloom&Rise</a></li>
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
                <span>© {new Date().getFullYear()} Bloom&Rise - Business and Software Consulting</span>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="tp-footer-social-icon mb-30 text-md-end">
                
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- footer copyright end  --> */}
    </footer>
  );
};

export default FooterTwo;
