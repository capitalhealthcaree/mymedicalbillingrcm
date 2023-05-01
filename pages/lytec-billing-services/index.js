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
        pageTitle="Lytec Medical Billing Services"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Lytec Medical Billing Services"
        imgClass="bg-2"
      />

      <div className="services-area pt-70 pb-20">
        <div className="container">
          <div
            className="section-title"
            style={{ maxWidth: "1288px", textAlign: "justify" }}
          >
            <p>
              Medical billing can be a challenging process for healthcare
              providers as it requires a high degree of accuracy and compliance
              with a set of rules. Getting this task completed in-house presents
              a significant challenge due to the extraordinary level of
              attention and focus it requires. It is possible to eliminate most
              errors in the process with medical billing software, which
              identifies and eliminates errors.
            </p>
            <p>
              Medical billing software from Lytec streamlines healthcare
              billing. Lytec medical billing software combines practice
              management features with an electronic health record (EMR) to help
              healthcare providers improve their financial performance and
              quality of care. In order to prevent unauthorized access to
              financial information, the popular software secures data.
            </p>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <div
                className="section-title"
                style={{ maxWidth: "1288px", textAlign: "justify" }}
              >
                <h3>Lytec Billing Software Benefits</h3>

                <span>
                  <span>
                    Healthcare providers in the United States rely on Lytec
                    practice management software to manage their practices.
                    Additionally, it has gained wide acceptance for its
                    usefulness in increasing office productivity. In addition to
                    covering all financial aspects of a practice, this software
                    has other advantages. Throughout its history, the
                    application has undergone a number of timely upgrades that
                    have improved its user-friendliness.In addition to these
                    benefits, this software provides the following:
                  </span>
                  <ul>
                    <li>Appointments can be made online 24 hours a day</li>
                    <li>Appointment reminder</li>
                    <li>
                      Letters and appeals to insurance companies can be
                      automated
                    </li>
                    <li>Real-time status of claims</li>
                  </ul>
                  <p>
                    The latest version allows billing professionals to adjust
                    credits, adjust between billings, and see the patient co-pay
                    in the unpaid transactions grid.
                  </p>
                  <h3>Our Billing Services Use Lytec Software</h3>
                  As a leading billing services provider, Advance Healthcare
                  utilizes Lytec billing software for its clients around the
                  world. Our services are comprehensive and include the
                  following as we are a top-billed service provider using Lytec
                  software
                  <ul>
                    <li>
                      <span className="fw-bold">Scheduling Services</span>: Our
                      billing services are offered through Lytec software, one
                      of the leading billing software companies. Our robust and
                      customized billing services allow clients to manage the
                      entire billing process. As well as billing insurance and
                      patients, processing electronic claims, and posting
                      automatic payments, we accept electronic payments as well.
                      Further, we offer you the ability to create and manage
                      multiple fee schedules in addition to customizing charge
                      entry rules and messages.
                    </li>
                    <li>
                      <span className="fw-bold">Billing Services</span>: Our
                      firm provides a full range of patient accounting services
                      as a leading provider of Lytec medical billing services.
                      Your accounts receivable management system, Lytec, ensures
                      efficiency and effectiveness. In addition, tracking
                      insurance reimbursements and managing collection lists are
                      also our services.
                    </li>
                    <li>
                      <span className="fw-bold">
                        Patient Accounting Services
                      </span>
                      : Our team of experts creates customized dashboards
                      according to your requirements, including specific
                      metrics. Furthermore, by utilizing our dashboard and
                      reporting services, you will be able to gain insights into
                      your claims management and streamline your billing
                      procedures.
                    </li>
                    <li>
                      <span className="fw-bold">
                        Reporting Services Using Lytec Software
                      </span>
                      : Furthermore, you will be able to access high-quality
                      reports as part of this service so that you can keep track
                      of the financial health of your practice. The firm
                      provides a wide range of services to its clients,
                      including practice analysis reports, daily journals,
                      transaction journals, and summaries of monthly and annual
                      activities. Reports on our products' aging are also
                      available.
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
