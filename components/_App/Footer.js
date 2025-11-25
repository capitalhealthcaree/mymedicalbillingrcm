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
                      <a
                        href="https://www.facebook.com/advancedhealthcaresol"
                        target="_blank"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    {/* <li>
                      <a href="https://www.twitter.com/" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li> */}
                    <li>
                      <a
                        href="https://www.linkedin.com/company/advanced-healthcare-sol"
                        target="_blank"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    {/* <li>
                      <a
                        href="https://www.facebyoutubeook.com/"
                        target="_blank"
                      >
                        <i className="bx bxl-youtube"></i>
                      </a>
                    </li> */}
                    <li>
                      <a
                        href="https://www.instagram.com/advanced_healthcare_solutions"
                        target="_blank"
                      >
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
                    <Link href="/durable-medical-equipment/">
                      Durable Medical Equipment (DME)
                    </Link>
                  </li>
                  <li>
                    <Link href="/revenue-cycle-management/">
                      Revenue Cycle Management
                    </Link>
                  </li>
                  <li>
                    <Link href="/credentialing-services/">
                      Credentialing Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/medical-billing-services/">
                      {" "}
                      Medical Billing Service
                    </Link>
                  </li>

                  <li>
                    <Link href="/practice-management/">
                      {" "}
                      Practice Management
                    </Link>
                  </li>

                  <li>
                    <Link href="/referral-management/">
                      Referral Management
                    </Link>
                  </li>

                  <li>
                    <Link href="/medical-supplies/">Medical Supplies</Link>
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
                  {" "}
                  <li>
                    <Link href="/intelligent-medical-billing-services/">
                      {" "}
                      IMS - Intelligent Billing Software
                    </Link>
                  </li>
                  <li>
                    <Link href="/ecinicalworks-billing-services/">
                      {" "}
                      eCinicalWorks Billing Software
                    </Link>
                  </li>
                  <li>
                    <Link href="/chirotouch-billing-services/">
                      ChiroTouch Billing Software
                    </Link>
                  </li>
                  <li>
                    <Link href="/office-ally-medical-billing-services/">
                      Medisoft Billing Software
                    </Link>
                  </li>
                  <li>
                    <Link href="/athena-billing-services/">
                      Athena Billing Software
                    </Link>
                  </li>
                  <li>
                    <Link href="/kareo-billing-services/">
                      Kareo Billing Software
                    </Link>
                  </li>
                  <li>
                    <Link href="/lytec-billing-services/">
                      {" "}
                      Lytec Billing Software
                    </Link>
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
                    <a href="tel:+14694546966">
                      <i className="bx bx-phone-call"></i>
                      <span>Hotline:</span>
                      Phone: +1 (469) 454-6966
                    </a>
                  </li>
                  <li>
                    <a href="mailto:director@mymedicalbillingrcm.com ">
                      <i className="bx bx-envelope"></i>
                      <span>Email:</span>
                      director@mymedicalbillingrcm.com
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-location-plus"></i>
                    <span>Address:</span>
                    2200 Physicians Boulevard, Suite B1 Ennis, TX 75119
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
              Copyright &copy; {currentYear} All Rights Reserved |{"  "}
              <a href="https://mymedicalbillingrcm.com" target="_blank">
                Advanced Healthcare Solutions
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
