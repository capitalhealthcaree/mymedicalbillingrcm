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
        pageTitle="IMS - Intelligent Medical Billing Software Service"
        homePageUrl="/"
        homePageText="Home"
        activePageText="IMS - Intelligent Medical Billing Software Service"
        imgClass="bg-2"
      />

      <div className="services-area pt-70 pb-20">
        <div className="container">
          <div
            className="section-title"
            style={{ maxWidth: "1288px", textAlign: "justify" }}
          >
            <p>
              IMS is a health information management system consisting of
              Electronic Health Records (EHRs), Practice Management, Office
              Management, and Medical Billing.Software that adapts to practices
              of all sizes and types offers electronic prescribing, practice
              reporting, a patient portal, and communication tools. A
              cloud-based or on-premises platform is available with modules for
              more than 40 specialties. A single, comprehensive software
              package, IMS provides practice management, billing, and office
              management functions.IMS eliminates the need for practices to have
              multiple programs, as other systems require them to have multiple
              programs as well.
            </p>
            <h2>Intelligent Medical Billing Software - Why Choose IMS?</h2>
            <p>
              A medical practice management system such as IMS - Intelligent
              Medical Software is available for purchase.Using this system, you
              can manage claims, process payments, schedule appointments, etc.
              Using the portal, patients can access their medical histories and
              records. In conjunction with an integrated practice workflow, it
              is capable of optimizing practice reporting and cloud-based
              prescription management.Moreover, By providing clinical forms and
              unique templates, this EHR software facilitates the working
              process. Generally, IMS software is used for billing in
              specialized fields such as pain management, internal medicine,
              rheumatology, and mental health
            </p>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <div
                className="section-title"
                style={{ maxWidth: "1288px", textAlign: "justify" }}
              >
                <h3>Billing Services with Intelligent Medical Software</h3>

                <span>
                  <span>
                    A leading intelligent medical billing company, Advance
                    Healthcare is one of the best in the industry. We have
                    recognized the gaps and lapses within medical billing, and
                    have therefore hired highly qualified professionals to
                    provide intelligent medical billing services. We offer the
                    following intelligent medical billing services:
                  </span>
                  <ul>
                    <li>
                      <span className="fw-bold">
                        Practice Requirement Compliance
                      </span>
                      : Regulations must be followed by practices in order to
                      ensure that claims are honored. Rather than managing this
                      on your own, outsource billing to Advance Healthcare and
                      let our expert billers assist you in meeting compliance
                      regulations.
                    </li>
                    <li>
                      <span className="fw-bold">
                        Consolidated Management of Images & Documents
                      </span>
                      : As a leading provider of IMS billing services, we
                      centralize all paperwork so that there is no gap within
                      the system that could negatively impact care delivery. We
                      offer intelligent medical billing software that integrates
                      images, documents, referrals, and more. With our
                      solutions, healthcare facilities are able to consolidate
                      and manage their documents in an easy-to-use format
                    </li>
                    <li>
                      <span className="fw-bold">
                        e-prescriptions Generation
                      </span>
                      : As a result of the pandemic, virtual patient
                      consultations gained popularity and are now an integral
                      part of conventional medical care. We are therefore able
                      to assist you if you require electronic prescriptions so
                      that patient records will not be mixed up. We prevent
                      errors by using e-prescriptions, for example, delivering
                      medication to the wrong patient when using
                      e-prescriptions. The use of intelligent software is
                      designed to ensure that patient records are not lost or
                      misplaced.
                    </li>
                    <li>
                      <span className="fw-bold">
                        Unified Database Deployment
                      </span>
                      : In the past, managing a database was a burden, prone to
                      data entry errors and other conflicts. The IMS integration
                      provides a unified database for resolving most conflicts.
                      Moreover, from one location, you are able to manage all
                      your EHR data.
                    </li>
                    <li>
                      <span className="fw-bold">
                        {" "}
                        Health Maintenance via Integrated Clinical Devices
                      </span>
                      : It is important to demonstrate your capacity to provide
                      post-hospitalization care outside the hospital in order to
                      establish trust and keep patients from having to go
                      elsewhere in the future. By utilizing the software to
                      maintain medical records, patient advice can be sent
                      periodically, making the patient feel as if they are being
                      handed over during the hospitalization.
                    </li>
                    <li>
                      <span className="fw-bold">
                        Template-driven Claim Support for Healthcare Facilities
                      </span>
                      : To avoid claim rejection, you must be aware of any
                      changes in the prescribed billing template during the
                      billing process. When you encounter this conflict in
                      submission, IMS can help you resolve it. Furthermore, we
                      strive to reduce format gaps in order to meet the latest
                      standards.
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
