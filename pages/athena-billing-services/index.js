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
        pageTitle="Outsource Athena Billing Services"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Outsource Athena Billing Services"
        imgClass="bg-2"
      />

      <div className="services-area pt-70 pb-20">
        <div className="container">
          <div
            className="section-title"
            style={{ maxWidth: "1288px", textAlign: "justify" }}
          >
            <p>
              As one of the most widely used billing software programs, Athena
              is an advanced tool that can handle all aspects of medical
              billing. Despite its advanced features, the operations it involves
              need to be handled with efficiency in order to ensure an
              error-free billing process. Healthcare service providers may incur
              substantial losses as a result of these errors.As a result, you
              should hire a billing expert who has extensive experience with
              Athena software. The majority of healthcare providers hire
              in-house professionals who are trained to handle this type of
              assignment. Nevertheless, this will increase the company's costs
              in a significant manner. Therefore, Advance Healthcare is the most
              effective way to reduce operating costs and increase efficiency.
              Advanced Healthcare utilizes Athena software to provide effective
              billing services to hundreds of clients worldwide. Furthermore, we
              provide Athena billing services through a highly experienced team
              and cutting-edge infrastructure.
            </p>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <div
                className="section-title"
                style={{ maxWidth: "1288px", textAlign: "justify" }}
              >
                <h2>Athena's Medical Billing Services</h2>

                <span>
                  <span className="fw-bolder">
                    The expertise we have in Athena Billing Services lets us
                    streamline medical billing requirements. These include:
                  </span>
                  <ul>
                    <li>
                      Make sure your insurance claims are clean and sent in a
                      timely manner
                    </li>
                    <li>
                      You should ensure that insurance carriers respond in a
                      timely manner so that your cash flow does not suffer
                    </li>
                    <li>
                      Resolve improperly paid accounts by getting in touch with
                      payers, processing payer correspondence, billing again,
                      working denials, and appealing
                    </li>
                    <li>Reduce outstanding AR by using analytics tools</li>
                  </ul>
                </span>
                <span>
                  <span className="fw-bolder">
                    The following services are offered as part of our
                    partnership with Athena Billing Services in addition to the
                    services mentioned above:
                  </span>
                  <ul>
                    <li>
                      Providing guidance to different departments regarding
                      pre-billing holds and denials
                    </li>
                    <li>
                      Identification of process gaps and recommendations for
                      improvement
                    </li>
                    <li>
                      Working in collaboration with the RCM team, the Operations
                      team, and the IT team to meet the imperative need to
                      increase revenue and reduce outstanding accounts payable
                    </li>
                    <li>
                      Manage operations and market initiatives on behalf of
                      managers
                    </li>
                    <li>
                      As part of the day-to-day operations, oversee the
                      follow-up of unresolved items
                    </li>
                    <li>
                      Contribute to the development of effective collection
                      methods by training resources
                    </li>
                  </ul>
                </span>

                <span>
                  <h3>Athenacollector Expert Different Reasons To Call!</h3>
                  <ul>
                    <li>
                      We adhere to industry standards and protocols for
                      integration
                    </li>
                    <li>
                      Integration support is provided both unidirectionally and
                      bidirectionally by our experts
                    </li>
                    <li>
                      If you have an internal IT team, we are able to work
                      closely with them in order to configure the most effective
                      security framework for your healthcare organization.
                    </li>
                    <li>
                      We offer leading-edge API adapters and practice-specific
                      workflow configurations to help you increase operational
                      efficiency and bottom line benefits
                    </li>
                    <li>
                      The technical team at our company has developed a
                      specialized interface incorporating cutting-edge
                      encryption technologies that enables advanced integration
                      between multiple systems.
                    </li>
                    <li>
                      Please feel free to contact us at any time if you require
                      assistance with PMS integration.
                    </li>
                    <li>
                      Our firm has experience working with many different
                      practice management systems, including WRS Health, Insta
                      HMS, ProviderSuite, and AccuMed.
                    </li>{" "}
                    <li>
                      We have experience with Ensemble, OPENlink, and Rhapsody
                      integration engines among our technical teams
                    </li>{" "}
                    <li>
                      Our experience in IHE integration profiles and technical
                      frameworks is extensive.{" "}
                    </li>{" "}
                    <li>
                      Let us help you resolve your PMS integration challenges
                      and data migration hurdles.
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
