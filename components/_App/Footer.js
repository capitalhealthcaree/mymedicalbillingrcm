import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer-top-area f-bg pt-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-delay="100"
                data-aos-duration="1200"
              >
                <Link href="/">
                  <img src="/img/rcm-logo.png" alt="Image" />
                </Link>

                <p>
                  Advance Healthcare Solutions is a company specializing in
                  health care services with a particular focus on empowering
                  hospitals, group practices, and independent practices.
                </p>

                <div className="social-area">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebyoutubeook.com/"
                        target="_blank"
                      >
                        <i className="bx bxl-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-delay="200"
                data-aos-duration="1200"
              >
                <h3>Services</h3>
                <ul>
                  <li>
                    <Link href="#">Durable Medical Equipment (DME)</Link>
                  </li>
                  <li>
                    <Link href="#">Revenue Cycle Management</Link>
                  </li>
                  <li>
                    <Link href="#">Credentialing Services</Link>
                  </li>
                  <li>
                    <Link href="#"> Medical Billing Service</Link>
                  </li>

                  <li>
                    <Link href="#"> Practice Management</Link>
                  </li>

                  <li>
                    <Link href="#">Referral Management</Link>
                  </li>

                  <li>
                    <Link href="#">Medical Supplies</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-delay="200"
                data-aos-duration="1200"
              >
                <h3>Billing Softwares</h3>
                <ul>
                  <li>
                    <Link href="#">Medisoft Billing Software Office Ally</Link>
                  </li>
                  <li>
                    <Link href="#"> IMS - Intelligent Billing Software</Link>
                  </li>
                  <li>
                    <Link href="#"> eCinicalWorks Billing Software</Link>
                  </li>
                  <li>
                    <Link href="#">ChiroTouch Billing Software</Link>
                  </li>
                  <li>
                    <Link href="#">Athena Billing Software</Link>
                  </li>
                  <li>
                    <Link href="#">Kareo Billing Software</Link>
                  </li>
                  <li>
                    <Link href="#"> Lytec Billing Software</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget contact"
                data-aos="fade-in"
                data-aos-delay="400"
                data-aos-duration="1200"
              >
                <h3>Get In Touch</h3>
                <ul>
                  <li>
                    <a href="tel:+822456974">
                      <i className="bx bx-phone-call"></i>
                      <span>Hotline:</span>
                      Phone: +822456974
                    </a>
                  </li>
                  <li>
                    <a href="mailto:admin@mymedicalbillingrcm.com">
                      <i className="bx bx-envelope"></i>
                      <span>Email:</span>
                      admin@mymedicalbillingrcm.com
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-location-plus"></i>
                    <span>Address:</span>
                    123, Western Road, Melbourne Australia
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="footer-bottom-area">
        <div className="container">
          <div className="copy-right">
            <p>
              Copyright &copy; {currentYear} Advanced Healthcare. All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
