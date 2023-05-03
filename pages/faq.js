import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import Faqs from "../components/Common/Faqs";
import DoctorsStyleOne from "../components/Common/DoctorsStyleOne";
import AppointmentForm from "../components/HomeOne/AppointmentForm";
import FunFactStyleTwo from "../components/Common/FunFactStyleTwo";
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
      <FunFactStyleTwo />
      <DoctorsStyleOne />
      <Footer />
    </>
  );
};

export default Faq;
