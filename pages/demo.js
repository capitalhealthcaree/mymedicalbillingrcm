import React from "react";
import Common2 from "../components/Services/Common2";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import FunFactStyleTwo from "../components/Common/FunFactStyleTwo";
import AppointmentForm from "../components/HomeOne/AppointmentForm";
import DoctorsStyleOne from "../components/Common/DoctorsStyleOne";
import Footer from "../components/_App/Footer";
const data2 = {
  imgPath: "/img/referral-management/intelligence-billing-software.png",
  alt: "Referral Management",
  heading: " Who We Are",
  paragraph:
    "With Advanced Healthcare, hospitals, groups, and independent practices can take control of their healthcare. Our mission is to help healthcare providers develop a revenue cycle process that is high-performing and efficient. Furthermore, we can assist medical practices in maximizing their financial and clinical outcomes through our revenue cycle experts.Consequently, providers are able to achieve a healthy revenue cycle and receive reimbursements on time and in a timely manner. Additionally, we offer medical billing services for a wide range of specialties across 32 different specialties.As a healthcare IT company, we have developed state-of-the-art products that will enable efficient workflow in the healthcare industry. Furthermore, innovative products such as Advanced Healthcare Solutions EMR and Nephrolytx are proving to be helpful in developing financial success for medical practices. The practice management process can be automated for providers in order to create an efficient, hassle-free workflow. Our goal is to ensure healthcare practices thrive in today's value-based economy while keeping them compliant with the rules of the industry at the same time.",
  dataList: [],
};
const Appointment = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Demo Request"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Demo Request"
        imgClass="bg-1"
      />
      <Common2 data={data2} />
      <div className="client-area ptb-1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div
                className="single-client mr-0 ml-0"
                style={{ backgroundColor: "#D6FBFD" }}
              >
                <h2>Mission</h2>
                <p>
                  With the assistance of our healthcare IT products, we aim to
                  make healthcare providers' businesses successful and enable
                  them to utilize the most cutting-edge healthcare IT solutions.
                  Additionally, we provide medical billing and coding services
                  that facilitate the revenue cycle process for medical
                  practices of all sizes. Furthermore, Advanced Healthcare
                  ensures your practice is financially sustainable and generates
                  substantial revenue.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div
                className="single-client mr-0 ml-0"
                style={{ backgroundColor: "#D6FBFD" }}
              >
                <h2>Vision</h2>
                <p>
                  As a medical practice, you face many complex problems that
                  must be solved. Additionally, we envision a healthcare
                  industry that utilizes technology-enabled solutions to
                  streamline its operations. As such, Advanced Healthcare
                  Solutions is committed to enhancing physicians' revenue cycle
                  and helping them achieve financial success. As a healthcare
                  solutions provider, we ensure that the providers are fully
                  focused on delivering quality healthcare to patients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AppointmentForm />
      <FunFactStyleTwo />
      <DoctorsStyleOne />

      <Footer />
    </>
  );
};

export default Appointment;
