import React, { useState } from "react";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/_App/Footer";
import DatePicker from "react-datepicker";
import RCMFeature from "../../components/Services/RCM";
import Common1 from "../../components/Services/Common1";
import Common2 from "../../components/Services/Common2";

import FunFactStyleTwo from "../../components/Common/FunFactStyleTwo";
import DoctorsStyleOne from "../../components/Common/DoctorsStyleOne";
const data1 = {
  heading: "Why Choose Us",
  paragraph:
    "In order to ensure that you choose us over our competitors, we provide superior IT solutions.",
  dataList: [
    {
      h: "All purpose Dashboard",
      p: "Using our customized dashboard, you can track live updates regarding patient progress, vaccine administration, inventory levels, and supply chain activities.",
    },
    {
      h: "Mobile And Web App",
      p: "As part of the product, you will receive a customized mobile and web app designed to enhance your patient's experience.",
    },
    {
      h: "Access Data",
      p: "The cloud hosting facilities make it possible for users to access files and data anywhere in the world and at any time.",
    },
    {
      h: "Data Analytics",
      p: "Real-time data collection, verification, and analysis are necessary to facilitate better decision-making.",
    },
    {
      h: "Infrastructure",
      p: "We offer budget-friendly setup and customization services for our products.",
    },
    {
      h: "Product Set-Up",
      p: "Customized product installation is available on-site and remotely.",
    },
  ],
};
const data2 = {
  imgPath: "/img/referral-management/referral.png",
  alt: "Referral Management",
  heading: "Choosing A Referral Management System",
  paragraph:
    "Before choosing a referral management system, it is important to take into account the advantages listed above. The following points should be considered when choosing a referral management system:",
  dataList: [
    {
      li: "A user-friendly and easy-to-navigate website is essential. This budget should be adjusted based on the amount of data and the number of users.",
    },
    {
      li: "Organizations must ensure communication between specialists and consultants",
    },
    {
      li: "Keeping track of referrals both in terms of time and process is important.",
    },
    {
      li: "Patient profiles should include detailed information about the patient",
    },
    {
      li: "Ideally, a system needs to be easy to implement and easy to adopt.",
    },
    {
      li: "Scalability is necessary to handle large amounts of data.",
    },
    {
      li: "Control access to data with a hierarchical user system.",
    },
    {
      li: "To handle referrals, use multiple channels.",
    },
  ],
};
const ReferralManagement = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Vaccine Management System"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Vaccine Management System"
        imgClass="bg-2"
      />

      <div className="services-area pt-70 pb-20">
        <div className="container">
          <div
            className="section-title"
            style={{ maxWidth: "1288px", textAlign: "justify" }}
          >
            <p>
              Vaccine Management System enables doctors to manage, administer,
              and outreach vaccinations at scale in an intuitive, efficient, and
              secure manner. Facilitating the smooth management of patient
              registration, rapid testing, outreach, scheduling administration,
              billing, registry reporting, and outcomes monitoring for
              healthcare organizations. By utilizing a vaccination management
              system, Advanced Healthcare strives to improve the efficiency and
              effectiveness of healthcare organizations. Our goal is to equip
              them with technology to ensure that they are able to provide the
              highest quality of care while saving their staff members time.
            </p>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6">
              <div
                className="section-title"
                style={{ maxWidth: "1288px", textAlign: "justify" }}
              >
                <h2>Features And Benefits</h2>
                <span>
                  <p>
                    Each step of the immunization process is tracked via our
                    off-shore IT solutions for health organizations.
                  </p>
                </span>
                <h3>
                  <i
                    className="flaticon-tick"
                    style={{ color: "#0CB8B6", marginRight: "10px" }}
                  ></i>
                  Notifications By Sms And Email
                </h3>
                <p>
                  Using SMS and email, remind patients and employees of
                  scheduled appointments and meetings.
                </p>
                <h3>
                  <i
                    className="flaticon-tick"
                    style={{ color: "#0CB8B6", marginRight: "10px" }}
                  ></i>
                  Maintaining Data Security
                </h3>
                <p>
                  Data storage on responsible servers ensures information and
                  data are not lost.
                </p>

                <h3>
                  <i
                    className="flaticon-tick"
                    style={{ color: "#0CB8B6", marginRight: "10px" }}
                  ></i>
                  The Easy Way To Contact
                </h3>

                <p>
                  With this all-in-one solution, you can schedule appointments
                  automatically and respond to the receiver's FAQs.
                </p>
                <h3>
                  <i
                    className="flaticon-tick"
                    style={{ color: "#0CB8B6", marginRight: "10px" }}
                  ></i>
                  Billing For Vaccinations
                </h3>
                <p>
                  In order to streamline the billing process for vaccine
                  recipients, it may be necessary to scan the barcodes on
                  vaccine bottles.
                </p>
                <h3>
                  <i
                    className="flaticon-tick"
                    style={{ color: "#0CB8B6", marginRight: "10px" }}
                  ></i>
                  All-In-One Dashboard
                </h3>

                <p>
                  With a single dashboard, you can monitor recipients'
                  vaccination progress from their appointments to their final
                  vaccination.
                </p>

                <h3>
                  <i
                    className="flaticon-tick"
                    style={{ color: "#0CB8B6", marginRight: "10px" }}
                  ></i>
                  On Time Reports
                </h3>

                <p>
                  Provides instantaneous information about how many vaccine
                  doses have been administered.
                </p>
                <h3>
                  <i
                    className="flaticon-tick"
                    style={{ color: "#0CB8B6", marginRight: "10px" }}
                  ></i>
                  Sending Alerts
                </h3>
                <p>
                  A notification is sent when a recipient misses the scheduled
                  vaccination. Assign a senior executive to handle this matter
                  automatically.
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
      <Common1 data={data1} />
      <FunFactStyleTwo />
      <DoctorsStyleOne />
      <Footer />
    </>
  );
};

export default ReferralManagement;
