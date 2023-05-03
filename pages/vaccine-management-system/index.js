import React from "react";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/_App/Footer";
import Common1 from "../../components/Services/Common1";
import SimpleDemoForm from "../../components/SimpleDemoForm";
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

const ReferralManagement = () => {
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
              <SimpleDemoForm />
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
