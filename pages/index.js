import React from "react";
import Navbar from "../components/_App/Navbar";
import MainBanner from "../components/Home/MainBanner";
import Facilities from "../components/Home/Facility";
import AboutUs from "../components/Home/AboutUs";
import Services from "../components/Home/Services";
import OurPromise from "../components/Common/OurPromise";
import ExistingEMR from "../components/Common/ExistingEMR";
import OurWorks from "../components/Home/OurWorks";
import AppointmentForm from "../components/Home/AppointmentForm";
import Testimonial from "../components/Common/Testimonial";
import News from "../components/Home/News";
import Footer from "../components/_App/Footer";

const Index = () => {
  return (
    <>
      <Navbar />

      <MainBanner />

      <Facilities />

      <AboutUs />

      <Services />

      <OurPromise />

      <ExistingEMR />

      <OurWorks />

      <AppointmentForm />

      <Testimonial />

      <News />

      <Footer />
    </>
  );
};

export default Index;
