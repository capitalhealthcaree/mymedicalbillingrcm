import React, { useState } from "react";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/_App/Footer";
import Common2 from "../../components/Services/Common2";
import Common3 from "../../components/Services/Common3";
import AppointmentForm from "../../components/HomeOne/AppointmentForm";
import FunFactStyleTwo from "../../components/Common/FunFactStyleTwo";
import DoctorsStyleOne from "../../components/Common/DoctorsStyleOne";

const data1 = {
  imgPath: "/img/referral-management/specialty-ehr.png",
  alt: "Electronic Health Records",
  heading: "Electronic Health Records",
  paragraph:
    "Using certified cloud technology and integrated service delivery enhances collaboration, productivity, and patient safety across multiple platforms and systems.As a result of Advanced Healthcare's services, decision-making is simplified, operations are streamlined, and best practices are followed effectively. By doing so, time and effort are saved and the return on investment is maximized.In addition to helping you manage value-based care programs, our EHRs also integrate behavioral health and chronic care management.",
  dataList: [],
};
const data2 = {
  imgPath: "/img/referral-management/practice-management.png",
  alt: "Practice Management",
  heading: "Practice Management",
  paragraph:
    "By enhancing the quality of the services you offer to your patients and increasing collections as well as helping you remain ahead of compliance requirements, Advanced Healthcare provides your practice with the flexibility and reach it needs to thrive in today's highly competitive medicine practice.Software for practice management includes the following features:",
  dataList: [
    {
      li: "The processing of payments from patients, insurance providers, and third parties",
    },
    {
      li: "Tracking and entering patient information",
    },
    {
      li: "Claims submission for insurance coverage",
    },
    {
      li: "Recording the demographics of patients",
    },
    {
      li: "Capturing charges and managing them",
    },
    {
      li: "Appointment scheduling for patients",
    },
    {
      li: "Billing procedures are performed",
    },
    {
      li: "Reporting to staff members",
    },
  ],
};
const data3 = {
  imgPath: "/img/referral-management/medical-billing-services.png",
  alt: "Medical Billing",
  heading: "Medical Billing",
  paragraph:
    "Billing is a serious matter for us. Based on our years of experience in medical billing, we work round the clock to increase revenue and accelerate collection activities.With comprehensive reports such as aging accounts payable (patient and payer), reimbursement by carrier, provider/resource specific productivity reports, we ensure you keep track of the financial health of your practice. Advanced Healthcare Solutions offers top-notch medical billing services such as:",
  dataList: [
    {
      li: "Claim Submission and Scrubbing",
    },
    {
      li: "Real-Time Insurance Verification",
    },
    {
      li: "Error-Free Charge Entry",
    },
    {
      li: "Follow-Up & Appeals",
    },
    {
      li: "Patient Statements",
    },
    {
      li: "Payment Posting",
    },
  ],
};
const data4 = {
  imgPath: "/img/referral-management/PATIENT-PORTAL.png",
  alt: "Patient Portal",
  heading: "Patient Portal",
  paragraph:
    "Provide patients with secure online appointment and refill requests, test results, educational material and access to valuable electronic tools and services while updating their health status, history, demographics and insurance information.",
  dataList: [
    {
      li: "Web-based registration",
    },
    {
      li: "Automatic alerts",
    },
    {
      li: "Lab and radiology reports",
    },
    {
      li: "Increased Patient Satisfaction",
    },
    {
      li: "Online appointments",
    },
    {
      li: "Prescription refills",
    },
    {
      li: "eMessaging",
    },
    {
      li: "Clinical summaries",
    },
  ],
};
const ReferralManagement = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="All-in-One"
        homePageUrl="/"
        homePageText="Home"
        activePageText="All-in-One"
        imgClass="bg-2"
      />

      <Common3 data={data1} />
      <Common2 data={data2} />
      <AppointmentForm />
      <Common2 data={data3} />
      <Common3 data={data4} />
      <FunFactStyleTwo />
      <DoctorsStyleOne />
      <Footer />
    </>
  );
};

export default ReferralManagement;
