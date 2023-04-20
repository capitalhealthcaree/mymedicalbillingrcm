import React from "react";
import Link from "next/link";

const Facilities = () => {
  return (
    <>
      <div className="second-facility-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <div className="second-facility-item">
                <img src="/img/facility-img/facility-icon1.png" alt="Image" />
                <h3>Medical Billing Services</h3>
                <p>
                  Medical billing services involve submitting and following up
                  on insurance claims, coding medical procedures, and
                  reconciling discrepancies. They can provide assistance with
                  patient billing, revenue cycle management, and compliance.
                </p>

                <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <div className="second-facility-item">
                <img src="/img/facility-img/facility-icon7.png" alt="Image" />
                <h3> Medical Coding Services</h3>
                <p>
                  Medical coding services involve the use of standardized codes
                  to accurately translate healthcare diagnoses, procedures, and
                  medical services into a universal language for billing and
                  record-keeping purposes.
                </p>

                <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <div className="second-facility-item">
                <img src="/img/facility-img/facility-icon8.png" alt="Image" />
                <h3> Revenue Cycle Management</h3>
                <p>
                  Revenue cycle management (RCM) is the process of tracking and
                  managing the financial aspects of patient care, from
                  appointment scheduling and insurance verification to claims
                  processing and payment collection.
                </p>

                <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Facilities;
