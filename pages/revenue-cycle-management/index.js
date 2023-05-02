import React, { useState } from "react";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/_App/Footer";
import DatePicker from "react-datepicker";
import RCMFeature from "../../components/Services/RCM";
import FunFactStyleTwo from "../../components/Common/FunFactStyleTwo";
import DoctorsStyleOne from "../../components/Common/DoctorsStyleOne";

const RCM = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Revenue Cycle Management"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Revenue Cycle Management"
        imgClass="bg-2"
      />

      <div className="services-area pt-70 pb-20">
        <div className="container">
          <div
            className="section-title"
            style={{ maxWidth: "1288px", textAlign: "justify" }}
          >
            <p>
              Each year, healthcare providers perform approximately 50 million
              procedures on patients. To collect revenue for these services,
              health systems must work closely with patients, doctors, and
              insurance companies. Healthcare organizations collect revenue
              through Revenue Cycle Management Company. Revenue cycle management
              services is key to a healthcare provider's long-term success. As a
              result, they will be able to provide patient care more effectively
              and more economically. In health care facilities, revenue cycle
              management software tracks patient care episodes from registration
              to payment. Combined administrative and clinical data includes
              names, insurance companies, and other personal information of
              patients. An imperative part of RCM is communicating with
              insurance companies. In most cases, physicians' offices and
              hospitals check the patient's insurance coverage when scheduling
              an appointment. ICD-10 codes are used when a healthcare provider
              categorizes a patient's treatment for a given condition after the
              patient pays any applicable copayment. After sending the care
              summary to insurance companies, hospitals and facilities decide
              how much will be covered by insurance and how much will be billed
              to patients.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <h3>Patient Appointment & Registration</h3>
                <p>
                  It is essential that a scheduling and appointment management
                  system be as efficient as possible in order to provide high
                  quality healthcare.
                </p>

                {/* <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link> */}
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <h3>Patient Eligibility</h3>
                <p>
                  A healthcare practice must verify the patient's insurance
                  coverage for medical services and determine the patient's
                  responsibility for payment.
                </p>

                {/* <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link> */}
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <h3>Provider Credentials</h3>
                <p>
                  A [clinician] must obtain, verify, and assess their
                  qualifications in order to provide care or services for a
                  health organization.
                </p>

                {/* <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link> */}
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <h3>AR Follow Up</h3>
                <p>
                  Refunding healthcare providers' owed amounts as soon as
                  possible while ensuring their practices run smoothly
                  and successfully.
                </p>

                {/* <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link> */}
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <h3>Patient Collection</h3>
                <p>
                  Healthcare providers and patients alike must address new
                  challenges as a result of changes in the United States
                  healthcare system.
                </p>

                {/* <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link> */}
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <h3>Payment Posting</h3>
                <p>
                  A solo practitioner or healthcare organization's revenue cycle
                  management would not be complete without posting payment
                </p>

                {/* <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link> */}
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <h3>Charge Capture</h3>
                <p>
                  A charge capture and reconciliation policy that clearly
                  defines roles and responsibilities makes it easy to assess
                  performance and figure out how to improve.
                </p>

                {/* <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link> */}
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <h3>Denial Management</h3>
                <p>
                  To make sure your claim gets compensated this time around,
                  monitoring the denial management process is crucial.
                </p>

                {/* <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link> */}
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <h3>Rejection Management</h3>
                <p>
                  We analyze rejections and move forward with rejection
                  management services that are effective. One or more errors are
                  fixed on rejected claims.
                </p>

                {/* <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link> */}
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <h3>Medical Coding</h3>
                <p>
                  Our customers provide clinical documentation and detailed work
                  instructions for medical coding. Based on clinical
                  documentation, medical coders perform medical coding.
                </p>

                {/* <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link> */}
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <h3>Billing & Claim Submission</h3>
                <p>
                  Insurance claims start the medical billing process. Once the
                  insurance company clears the dues, it determines how much
                  reimbursement the healthcare provider gets.
                </p>

                {/* <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link> */}
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6">
              <div
                className="section-title"
                style={{ maxWidth: "1288px", textAlign: "justify" }}
              >
                <h2>Factors That Can Affect RCM</h2>
                <span>
                  <p>
                    The provider has little control over the payment when a
                    claim has been denied or reviewed. There may be long delays
                    in the processing of billing and claims for provider
                    payments due to the increased efforts to combat healthcare
                    fraud and abuse. The provider may, however, be able to
                    control some internal factors. In order to improve their
                    RCM, providers should focus on improving productivity,
                    patient volume, and collecting fees. There are several
                    factors that can disrupt the RCM process, including:
                  </p>
                </span>

                <h3>
                  <i
                    className="flaticon-tick"
                    style={{ color: "#0CB8B6", marginRight: "10px" }}
                  ></i>
                  Collecting Patient Payments
                </h3>

                <p>
                  It is becoming increasingly apparent that patients are
                  responsible for paying for their healthcare costs. Payments
                  collected during or before a patient's service eliminate the
                  risk of non-payments completely. Patients often have
                  difficulty affording high deductibles and are unaware of their
                  financial responsibilities, making this difficult. In order to
                  prevent the denial of a claim, patients should pre-register to
                  receive information about their medical history and insurance
                  information.
                </p>
                <h3>
                  <i
                    className="flaticon-tick"
                    style={{ color: "#0CB8B6", marginRight: "10px" }}
                  ></i>
                  Fragmented Administrative Process
                </h3>

                <p>
                  There are often differences in priorities between the front
                  and back offices. It is possible that the denial of a claim
                  could result from the failure to share information.A better
                  communication process during the time of patient intake
                  regarding coverage eligibility may assist with payer
                  coordination, and claims reimbursement, as well as improve the
                  collection of payment.
                </p>
                <h3>
                  <i
                    className="flaticon-tick"
                    style={{ color: "#0CB8B6", marginRight: "10px" }}
                  ></i>
                  Eligibility Issues
                </h3>

                <p>
                  In order to achieve a successful outcome, it is crucial to
                  communicate with health insurance companies.Unless claims are
                  managed, they may remain pending, be rejected, or be denied.
                  Tracking claims can be useful in determining whether specific
                  procedures or codes are causing recurrences.
                </p>
                <h3>
                  <i
                    className="flaticon-tick"
                    style={{ color: "#0CB8B6", marginRight: "10px" }}
                  ></i>
                  Lack Of Digital Workflow
                </h3>
                <p>
                  A lack of streamlined workflow may result in poor quality data
                  and problems with the revenue cycle in the future. It is
                  possible to simplify RCM and streamline report processing
                  through the implementation of a strong healthcare IT
                  infrastructure.In addition to seamless communication, an
                  electronic workflow eliminates lost paper documents.
                </p>
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
      <RCMFeature />
      <FunFactStyleTwo />
      <DoctorsStyleOne />
      <Footer />
    </>
  );
};

export default RCM;
