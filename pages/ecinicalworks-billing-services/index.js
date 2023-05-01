import React, { useState } from "react";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/_App/Footer";
import DatePicker from "react-datepicker";
import FunFactStyleTwo from "../../components/Common/FunFactStyleTwo";
import DoctorsStyleOne from "../../components/Common/DoctorsStyleOne";

const RCM = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Integrative eClinicalWorks Billing Services"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Integrative eClinicalWorks Billing Services"
        imgClass="bg-2"
      />

      <div className="services-area pt-70 pb-20">
        <div className="container">
          <div
            className="section-title"
            style={{ maxWidth: "1288px", textAlign: "justify" }}
          >
            <p>
              As a leading provider of medical billing solutions to medical
              practices, MedBillingExperts makes the most of the multifaceted
              features of the eClinicalWorks billing software. The medical
              billing services offered by eClinicalworks are based on a wealth
              of experience in the field. We enable you to submit your claims
              within 24 hours of implementing our premium medical billing
              services into your healthcare practice.Furthermore, we are fully
              compliant with HIPAA and ARRA since our service is hosted on one
              unified platform. Clinics, hospitals, and multispecialty practices
              can benefit from our fast, accurate, and cost-effective
              eClinicalWorks billing services.
            </p>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <div
                className="section-title"
                style={{ maxWidth: "1288px", textAlign: "justify" }}
              >
                <h3>Is Eclinicalworks Software Right For You?</h3>

                <span>
                  <span>
                    Healthcare organizations can benefit from Advance Healthcare
                    billing services using eClinicalWorks software. The
                    following are some of the key reasons for choosing us:
                  </span>
                  <ul>
                    <li>
                      <span className="fw-bold"> Flexible Pricing Options</span>
                      : Depending on the client's budget and business needs, we
                      offer flexible pricing packages.
                    </li>
                    <li>
                      <span className="fw-bold">Hipaa Compliant Services</span>:
                      The HIPAA Act protects all patient data. Initiating
                      healthcare projects always requires a HIPAA agreement. We
                      only use patient data for billing and nothing else.
                    </li>
                    <li>
                      <span className="fw-bold">
                        World-Class infrastructure
                      </span>
                      : For quality healthcare services to be provided, the
                      appropriate infrastructure must be in place. With the
                      latest medical billing technologies and tools at our
                      disposal, our workspaces are world-class.
                    </li>
                  </ul>
                </span>
                <h3>An Assigned Project Manager</h3>

                <span>
                  <span>
                    With us as your billing partner, you will be assigned a
                    dedicated project manager who will be responsible for all
                    billing-related matters. In addition to keeping you informed
                    of project developments, a dedicated project manager will
                    resolve any issues as soon as they arise.
                  </span>
                  <ul>
                    <li>
                      <span className="fw-bold">
                        {" "}
                        High-Quality Healthcare Solutions
                      </span>
                      : Medical billing services must maintain the highest
                      quality level and avoid errors at all costs. Our goal is
                      to provide the highest quality services within a short
                      period of time.
                    </li>
                    <li>
                      <span className="fw-bold">
                        Experienced Healthcare Professionals
                      </span>
                      : With the use of the latest medical billing software, we
                      strive to provide the best services to our clients. With a
                      team of professionals who hail from prestigious
                      institutions around the world, we are capable of meeting
                      the needs of any patient.
                    </li>
                    <li>
                      <span className="fw-bold">Short Turnaround Time</span>:
                      Across the globe, our medical billing experts are located
                      in a variety of delivery centers. By doing this, we are
                      able to provide quality medical billing services within a
                      short period of time, sometimes as little as 12-24 hours.
                    </li>
                    <li>
                      <span className="fw-bold">Ability To Scale Easily</span>:
                      In order to meet the needs of our clients, we can scale up
                      our medical billing services as necessary. Our project can
                      be easily scaled up if we possess the necessary skills,
                      resources, and bandwidth.
                    </li>
                    <li>
                      <span className="fw-bold">24/7 support</span>: All members
                      of our team, including sales representatives, project
                      managers, and call center representatives, are available
                      to assist you in any way they can. You may also contact
                      them if you have any questions. Throughout the week, our
                      client support team is available to assist clients.
                    </li>
                  </ul>
                </span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="appointment-here-form">
                <span className="top-title">Make An Appointment</span>
                <h2>We Are Here For You</h2>

                <form>
                  <div className="row">
                    <div className="col-lg-6">
                      <label>Your Name</label>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="Name"
                          placeholder="Enter Your Name"
                        />
                        <i className="flaticon-account"></i>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <label>Your Email</label>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="Email"
                          placeholder="Enter Your Email"
                        />
                        <i className="flaticon-email"></i>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <label>Your Phone</label>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="Phone"
                          placeholder="Enter Your Phone"
                        />
                        <i className="flaticon-smartphone"></i>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <label>Select Service</label>
                      <div className="form-group">
                        <select className="form-control">
                          <option value="0">Select Service</option>
                          <option value="1">Another option</option>
                          <option value="2">A option</option>
                          <option value="3">Potato</option>
                        </select>
                        <i className="flaticon-heart"></i>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <label>Appointment Date</label>
                      <div className="form-group">
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          className="form-control"
                        />
                        <i className="flaticon-appointment"></i>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <label>Time</label>
                      <div className="form-group">
                        <select className="form-control">
                          <option value="0">Seclect Time</option>
                          <option value="1">Another option</option>
                          <option value="2">A option</option>
                          <option value="3">Potato</option>
                        </select>
                        <i className="flaticon-clock"></i>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <label>Message</label>
                      <div className="form-group">
                        <textarea
                          name="message"
                          className="form-control"
                          id="Message"
                          cols="30"
                          rows="8"
                          placeholder="Your Message"
                        ></textarea>
                        <i className="flaticon-edit"></i>
                      </div>
                    </div>

                    <div className="col-12">
                      <button type="submit" className="default-btn">
                        Send Request
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FunFactStyleTwo />
      <DoctorsStyleOne />
      <Footer />
    </>
  );
};

export default RCM;
