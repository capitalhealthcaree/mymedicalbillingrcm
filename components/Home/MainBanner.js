import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const MainBanner = () => {
  const router = useRouter();

  return (
    <>
      <div className="main-banner-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="banner-text">
                    <span
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                    >
                      END-TO-END MEDICAL BILLING SERVICES
                    </span>

                    <h1
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-duration="1200"
                    >
                      Medical Billing Experts You Can Trust
                    </h1>

                    <p
                      data-aos="fade-up"
                      data-aos-delay="300"
                      data-aos-duration="1200"
                    >
                      An integral part of Flatworld Solutions, Advanced
                      Healthcare Solutions is a healthcare business process
                      outsourcing (BPO) service provider that offers an
                      extensive portfolio of services to physicians, billing
                      companies, healthcare providers, and insurance companies.
                    </p>

                    <div
                      className="banner-btn"
                      data-aos="fade-up"
                      data-aos-delay="400"
                      data-aos-duration="1200"
                    >
                      <Link href="/demo" className="default-btn">
                        Request Demo
                      </Link>
                      <Link href="/contact" className="default-btn ms-4">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 pr-0"></div>
              </div>

              <div className="first-facility-area">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-sm-6">
                    <div
                      className="first-facility-item"
                      data-aos="fade-in"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                    >
                      <i className="flaticon-care"></i>
                      <h3>Special Services</h3>
                      <p>
                        Special Services may include unique or customized
                        offerings for clients.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6">
                    <div
                      className="first-facility-item"
                      data-aos="fade-in"
                      data-aos-delay="200"
                      data-aos-duration="1200"
                    >
                      <i className="flaticon-support"></i>
                      <h3>24/7 Customer Support</h3>
                      <p>
                        24/7 customer support offers assistance and service at
                        any time.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6">
                    <div
                      className="first-facility-item"
                      data-aos="fade-in"
                      data-aos-delay="300"
                      data-aos-duration="1200"
                    >
                      <i className="flaticon-online-learning"></i>
                      <h3>Integrated Technology</h3>
                      <p>
                        It combines multiple systems to streamline operations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
