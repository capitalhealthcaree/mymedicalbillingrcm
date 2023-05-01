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
        pageTitle="Office Ally Medical Billing Services"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Office Ally Medical Billing Services"
        imgClass="bg-2"
      />

      <div className="services-area pt-70 pb-20">
        <div className="container">
          <div
            className="section-title"
            style={{ maxWidth: "1288px", textAlign: "justify" }}
          >
            <p>
              Electronic health records (EHRs) play an essential role in the
              health care system in the United States. Through its use, patient
              information can be obtained in an instant and in a secure manner.
              Physicians can therefore gain a broader perspective of a patient's
              treatment by clicking a mouse. Using an electronic health record
              (EHR) has significantly improved patient care, increased
              efficiency, and reduced costs.
            </p>
            <p>
              With the help of Office Ally software, we have helped several
              US-based healthcare providers manage their EHR requirements. We
              are a renowned firm providing Office Ally EHR services and have a
              team of experts who are specialized in utilizing this software to
              provide a variety of healthcare services to our clients. Dedicated
              to providing quality health care support to patients, they work
              tirelessly to make it possible for you to concentrate on your core
              competencies.
            </p>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <div
                className="section-title"
                style={{ maxWidth: "1288px", textAlign: "justify" }}
              >
                <h3>How Do Physicians Like Office Ally Ehr?</h3>

                <span>
                  <span>
                    Among the most popular web-based EHR solutions available
                    today, Office Ally is one of the most popular. In addition
                    to minimizing paperwork, it also organizes information
                    neatly and simply. The purpose of this is to streamline
                    workflow effectively. The software can be customized. In
                    addition, there are the following reasons:
                  </span>
                  <ul>
                    <li>
                      <span className="fw-bold">Accessibility</span>: The
                      application is web-based, so you can log in and out from
                      any location at any time. By doing so, physicians are able
                      to access information on the go.
                    </li>
                    <li>
                      <span className="fw-bold">Improved Patient Care</span>:
                      With quick search fields and the ability to store enormous
                      amounts of patient data, physicians will be able to devote
                      more time to patient care as a result of easier access to
                      patient data.
                    </li>
                    <li>
                      <span className="fw-bold">
                        Easy Sharing of Information
                      </span>
                      : Using Office Ally, you can easily share information with
                      other providers. As a result, collaboration is enhanced
                      and patient care is of a higher standard.
                    </li>
                    <li>
                      <span className="fw-bold">Real-time Information</span>:
                      Changes can be reported in real time by the software. As a
                      result, all stakeholders are kept informed at the same
                      time. A system such as this can be very beneficial for
                      employees since they will always be aware of what they
                      should do next.
                    </li>
                    <li>
                      <span className="fw-bold">CompleteIntegration</span>: EHR
                      software from Office Ally can be fully integrated with
                      other products from Office Ally. Several hundred payers
                      can be connected to the system, common phrases can be
                      stored automatically, and the system can be customized
                      based on the practice's needs. If you need to bring in
                      more software to streamline your needs, this eliminates
                      syncing issues.
                    </li>
                  </ul>
                </span>
                <h3>
                  What is the Benefit of Choosing Advanced Healthcare Solutions
                  for Office Ally Billing Software Services?
                </h3>

                <span>
                  <span>
                    With the assistance of Office Ally EHR software Advance
                    Healthcare Solutions provides a well-defined workflow based
                    on their industry experience. We provide a wide range of
                    medical billing and coding services to meet your needs,
                    including:
                  </span>
                  <ul>
                    <li>
                      <span className="fw-bold">Timely Implementation</span>:
                      Our company provides assistance in the installation of the
                      Office Ally EHR software in order to enable medical
                      practices to begin using it immediately.
                    </li>
                    <li>
                      <span className="fw-bold">
                        Customizable Application Interface
                      </span>
                      : Users can customize the application interface to suit
                      their needs by taking advantage of its flexibility.
                    </li>
                    <li>
                      <span className="fw-bold">Updated Reports</span>: The
                      web-based application provides a more efficient way to
                      process reports, since the records are kept up to date.
                    </li>
                    <li>
                      <span className="fw-bold">Super Billing Flexibility</span>
                      : Due to the customizable nature of this cloud-based
                      platform, we are able to help users collect only the most
                      relevant data.
                    </li>
                    <li>
                      <span className="fw-bold">A Well-Defined Workflow</span>:
                      By reducing the time and paperwork necessary to convey
                      test requests from doctors' offices to laboratories,
                      Office Ally minimizes the gap between laboratories and
                      doctors.
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
