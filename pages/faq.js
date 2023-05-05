import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import Faqs from "../components/Common/Faqs";
import ExistingEMR from "../components/Common/ExistingEMR";
import AppointmentForm from "../components/Home/AppointmentForm";
import OurPromise from "../components/Common/OurPromise";
const Faq = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="FAQs"
        homePageUrl="/"
        homePageText="Home"
        activePageText="FAQs"
        imgClass="bg-2"
      />

      <Faqs />
      <AppointmentForm />
      <OurPromise />
      <ExistingEMR />
      <Footer />
    </>
  );
};

export default Faq;
