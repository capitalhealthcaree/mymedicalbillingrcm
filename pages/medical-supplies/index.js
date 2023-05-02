import React, { useState } from "react";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/_App/Footer";
import DatePicker from "react-datepicker";
import Common2 from "../../components/Services/Common2";
import FunFactStyleTwo from "../../components/Common/FunFactStyleTwo";
import DoctorsStyleOne from "../../components/Common/DoctorsStyleOne";

const data2 = {
  imgPath: "/img/referral-management/medical-supplies.png",
  alt: "Medical Supplies",
  heading: "Points To Remember",
  paragraph: "",
  dataList: [
    {
      li: "You should ensure that your billable date of service corresponds to the date you disbursed the medical supplies for your patient. The patient signed a receipt for medical supplies that same day. In my opinion, it is inappropriate to bill based on the date of the prescription of medical supplies .",
    },
    {
      li: "Please ensure you report the correct place of service and the correct medical supplies billing service modifier(s)",
    },
    {
      li: "You should keep a copy of the receipt for the medical supplies signed by your patient",
    },
    {
      li: "Ensure that you are reporting the appropriate HCPCS code for the medical supplies",
    },

    {
      li: "Patient profiles should include detailed information about the patient",
    },

    {
      li: "Ensure that medical supplies are necessary",
    },
  ],
};
const ReferralManagement = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Medical Supplies"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Medical Supplies"
        imgClass="bg-2"
      />

      <div className="services-area pt-70 pb-20">
        <div className="container">
          <div
            className="section-title"
            style={{ maxWidth: "1288px", textAlign: "justify" }}
          >
            <p>
              Depending on the supply item, Medicare will consider some supplies
              routine and not separately billable; while others are covered,
              billable, but packaged and not separately billed. HCPCS codes
              describe medical equipment and supplies, so insurers know what to
              expect. Your insurer receives claims with these codes. Afterwards,
              your insurer calculates your payments based on the code. Codes for
              HCPCS can show:
            </p>
            <ul>
              <li>Wearing braces, wheelchairs, or other medical gear</li>
              <li>Gauze, gloves, needles, syringes, etc</li>
              <li>Spectacles or hearing aids</li>
              <li>Transport by ambulance</li>
              <li>Drugs injected</li>
            </ul>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <div
                className="section-title"
                style={{ maxWidth: "1288px", textAlign: "justify" }}
              >
                <span>
                  <h3>What is HCPCS?</h3>
                  <p>
                    To provide you with additional information, the insurer may
                    add a two-digit modifier to the code. A physician, a durable
                    medical equipment manufacturer, or another provider may bill
                    HCPCS codes. Hospitals and ambulatory surgical centers offer
                    direct billing services.
                  </p>
                  <ul>
                    <li>
                      To provide you with additional information, the insurer
                      may add a two-digit modifier to the code. A physician, a
                      durable medical equipment manufacturer, or another
                      provider may bill HCPCS codes. Hospitals and ambulatory
                      surgical centers offer direct billing services.
                    </li>
                    <li>
                      An HCPCS code begins with a letter followed by four
                      digits.
                    </li>
                    <li>
                      Your physician can provide you with information regarding
                      the supplies you will need during and after the
                      procedure.Check the HCPCS codes that are applicable.
                    </li>
                    <li>
                      In order to determine the cost of these supplies in your
                      area, you can use the FH® Medical Cost Lookup.
                    </li>
                    <li>
                      Review the plan description or contact your insurance
                      provider to determine what is covered by your policy.
                    </li>
                    <li>
                      Have you been unable to obtain care through your insurance
                      network, or are you seeking care outside of it? If you are
                      experiencing these problems, you might want to consider
                      renting instead of purchasing equipment.
                    </li>
                    <li>
                      After your procedure, you should review your bills and
                      EOBs. If you discover an incorrect code, please contact
                      the provider.
                    </li>
                    <li>
                      In regards to your insurance claim, you should contact
                      your insurance company again as soon as possible.
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
      <Common2 data={data2} />

      <FunFactStyleTwo />
      <DoctorsStyleOne />
      <Footer />
    </>
  );
};

export default ReferralManagement;
