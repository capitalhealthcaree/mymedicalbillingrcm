import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Common1 from "../components/Services/Common1";
import Common2 from "../components/Services/Common2";
import Common3 from "../components/Services/Common3";
import ExistingEMR from "../components/Common/ExistingEMR";
import AppointmentForm from "../components/HomeOne/AppointmentForm";
import Footer from "../components/_App/Footer";

const data1 = {
  heading: "Our Values and Beliefs",
  paragraph: "",
  dataList: [
    {
      h: "Accountability & Integrity",
      p: "With integrity and accountability, we deliver our services according to a client's definition of excellence",
    },
    {
      h: "Continuous learning",
      p: "In order to meet the evolving regulatory and payer guidelines, we commit ourselves to continuous learning",
    },
    {
      h: "A team effort",
      p: "By supporting each member to perform their best, we believe in mutual teamwork and create unity.",
    },
    {
      h: "Intuitive",
      p: "Through the imaginative application of technology, complex processes can be made intuitive.",
    },
    {
      h: "Team of people",
      p: "Building a team of people that match our values and are the experts at what they do",
    },
    {
      h: "Culture",
      p: "The development of a culture and the making of decisions based on our vision and values",
    },
  ],
};
const data3 = {
  imgPath: "/img/referral-management/all-in-one-platform.png",
  alt: "ConatctUs",
  heading: "Why Choose Us",
  paragraph:
    "We strive to provide truly transformative revenue cycle management services as a revenue cycle management company. We at Advanced Healthcare are committed to being one step ahead and meeting your needs at all times. Working with us has a number of advantages.",
  dataList: [
    {
      li: "Maintain compliance with industry-specific security regulations. Data security systems and encryption protocols that are at the forefront of technology.",
    },
    {
      li: "The ability to minimize downtime, delays, and loss of productivity through technical and professional capabilities",
    },
    {
      li: "Achieved an acceptance rate of 98% for claims on the first try and an accuracy rate of 97% for medical coding.",
    },
    {
      li: "Taking advantage of value-based reimbursement models requires scaling up and streamlining operations",
    },
    {
      li: "Optimise financial performance with powerful analytics tools and KPI tracking tools",
    },

    {
      li: "Reducing AR backlogs and accelerating revenue cycles through 24/7 workflow",
    },
  ],
};
const data2 = {
  imgPath: "/img/referral-management/intelligence-billing-software.png",
  alt: "Referral Management",
  heading: " Who We Are",
  paragraph:
    "With Advanced Healthcare, hospitals, groups, and independent practices can take control of their healthcare. Our mission is to help healthcare providers develop a revenue cycle process that is high-performing and efficient. Furthermore, we can assist medical practices in maximizing their financial and clinical outcomes through our revenue cycle experts.Consequently, providers are able to achieve a healthy revenue cycle and receive reimbursements on time and in a timely manner. Additionally, we offer medical billing services for a wide range of specialties across 32 different specialties.As a healthcare IT company, we have developed state-of-the-art products that will enable efficient workflow in the healthcare industry. Furthermore, innovative products such as Advanced Healthcare Solutions EMR and Nephrolytx are proving to be helpful in developing financial success for medical practices. The practice management process can be automated for providers in order to create an efficient, hassle-free workflow. Our goal is to ensure healthcare practices thrive in today's value-based economy while keeping them compliant with the rules of the industry at the same time.",
  dataList: [],
};
const About = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="About"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About"
        imgClass="bg-1"
      />

      <Common2 data={data2} />

      <Common3 data={data3} />

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
      <Common1 data={data1} />
      <AppointmentForm />
      <OurPromise />
      <ExistingEMR />
      <Footer />
    </>
  );
};

export default About;
