import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ContactInfo from "../components/ContactInfo";
import Common2 from "../components/Services/Common2";
import AppointmentForm from "../components/Home/AppointmentForm";
import OurPromise from "../components/Common/OurPromise";
import ExistingEMR from "../components/Common/ExistingEMR";
import Footer from "../components/_App/Footer";

const data2 = {
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
const Contact = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Contact"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contact"
        imgClass="bg-1"
      />
      <Common2 data={data2} />
      <ContactInfo />
      <AppointmentForm />
      <OurPromise />
      <ExistingEMR />
      <Footer />
    </>
  );
};

export default Contact;
