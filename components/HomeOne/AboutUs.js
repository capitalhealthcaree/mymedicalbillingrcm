import React from "react";
import Link from "next/link";

const AboutUs = () => {
  return (
    <>
      <div className="about-area pb-130">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <img src="/img/about/about1.jpg" alt="Image" />

                <div className="shape-1">
                  <img src="/img/about/about-shape-1.png" alt="Image" />
                </div>

                <div className="shape-2">
                  <img src="/img/about/about-shape-2.png" alt="Image" />
                </div>

                <div className="shape-3">
                  <img src="/img/about/about-shape-3.png" alt="Image" />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <span className="top-title">About Us</span>
                <h2>Smart Medical Billing Services For Improved Cash Flow</h2>
                <p>
                  Advanced Healthcare Solutions is a leading supplier of
                  innovative health information systems and services that change
                  the way administrative and clinical operations and medical
                  records work in healthcare RCM organizations of all sizes.
                </p>

                <ul>
                  <li>
                    <i className="flaticon-tick"></i>
                    We are a leading medical billing company with years of
                    experience
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>Our team of experts
                    provides comprehensive medical billing and coding services
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    We use advanced technology and software to streamline
                    workflows
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    We prioritize open communication and collaboration with our
                    clients
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    We are dedicated to providing exceptional customer service
                    and support
                  </li>
                </ul>

                <Link href="/about" className="default-btn">
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
