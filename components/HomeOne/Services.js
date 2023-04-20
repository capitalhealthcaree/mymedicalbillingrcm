import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="services-area bg pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="top-title">Our Services</span>
            <h2>Our Healthcare Service</h2>
            <p>
              Services refer to intangible products or activities offered by
              businesses or individuals to meet customer needs or demands.
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <div className="single-services">
                {/* <span className="flaticon-man"></span> */}
                <h3>All-in-One Platform</h3>
                <p>
                  An all-in-one platform offers a comprehensive suite of tools
                  and services to streamline workflows and boost productivity.
                </p>

                <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link>

                {/* <div className="services-shape">
                  <img src="/img/services-card-shape.png" alt="Image" />
                </div> */}
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <div className="single-services">
                {/* <span className="flaticon-man"></span> */}
                <h3>Medical Billing Service</h3>
                <p>
                  Medical billing service handles billing, coding, and claim
                  submission for healthcare providers to ensure timely
                  reimbursement.
                </p>

                <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link>

                {/* <div className="services-shape">
                  <img src="/img/services-card-shape.png" alt="Image" />
                </div> */}
              </div>
            </div>{" "}
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <div className="single-services">
                {/* <span className="flaticon-man"></span> */}
                <h3>Practice Management</h3>
                <p>
                  Practice management software streamlines administrative tasks
                  for healthcare providers, including scheduling, billing, and
                  patient management.
                </p>

                <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link>

                {/* <div className="services-shape">
                  <img src="/img/services-card-shape.png" alt="Image" />
                </div> */}
              </div>
            </div>{" "}
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <div className="single-services">
                {/* <span className="flaticon-man"></span> */}
                <h3>Revenue Cycle Management</h3>
                <p>
                  Revenue cycle management optimizes the financial performance
                  of healthcare organizations by managing the patient billing
                  and payment process.
                </p>

                <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link>

                {/* <div className="services-shape">
                  <img src="/img/services-card-shape.png" alt="Image" />
                </div> */}
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <div className="single-services">
                {/* <span className="flaticon-liver"></span> */}
                <h3>Referral Management</h3>
                <p>
                  Referral management streamlines the process of referring
                  patients between healthcare providers, improving communication
                  and patient outcomes.
                </p>

                <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link>

                {/* <div className="services-shape">
                  <img src="/img/services-card-shape.png" alt="Image" />
                </div> */}
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <div className="single-services">
                {/* <span className="flaticon-kidney"></span> */}
                <h3>Credentialing Services</h3>
                <p>
                  Credentialing services verify the qualifications and
                  professional credentials of healthcare providers to ensure
                  compliance with industry standards.
                </p>

                <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link>

                {/* <div className="services-shape">
                  <img src="/img/services-card-shape.png" alt="Image" />
                </div> */}
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1200"
            >
              <div className="single-services">
                {/* <span className="flaticon-heart"></span> */}
                <h3>Medical Supplies</h3>
                <p>
                  Medical supplies include a range of products such as gloves,
                  masks, syringes, and other equipment used in healthcare
                  settings.
                </p>

                <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link>

                {/* <div className="services-shape">
                  <img src="/img/services-card-shape.png" alt="Image" />
                </div> */}
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1200"
            >
              <div className="single-services">
                {/* <span className="flaticon-brain"></span> */}
                <h3>Specialty EHR</h3>
                <p>
                  Specialty EHRs are electronic health record systems designed
                  to meet the specific needs of particular medical specialties.
                </p>

                <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link>

                {/* <div className="services-shape">
                  <img src="/img/services-card-shape.png" alt="Image" />
                </div> */}
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1200"
            >
              <div className="single-services">
                {/* <span className="flaticon-walker"></span> */}
                <h3>Durable Medical Equipment (DME)</h3>
                <p>
                  Durable medical equipment (DME) includes medical devices and
                  equipment that are designed for long-term use, such as
                  wheelchairs and oxygen tanks.
                </p>

                <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link>

                {/* <div className="services-shape">
                  <img src="/img/services-card-shape.png" alt="Image" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
