import React from "react";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/_App/Footer";
import AppointmentForm from "../../components/Home/AppointmentForm";
import Common1 from "../../components/Services/Common1";
import Common2 from "../../components/Services/Common2";
import OurPromise from "../../components/Common/OurPromise";
import ExistingEMR from "../../components/Common/ExistingEMR";

const data1 = {
  heading: "Don't delay! Get started now!",
  paragraph: "",
  dataList: [
    {
      h: "Fill Out The Form",
      p: "Credentialing with Advanced Healthcare will be completed once by each provider. We will use the information you provide in your Advanced Healthcare Solutions credentialing profile for all future credentialing applications you submit. You can begin the application process by providing information and uploading documents via our online application.",
    },
    {
      h: "Contact Us For A Quote",
      p: "Please contact Advanced Healthcare Solutions to discuss the details of your organization and your health plans in order for us to provide you with an accurate quote.We'll begin the process after you e-sign your proposal.",
    },

    {
      h: "Complete the Profile",
      p: "In order to track credentialing applications, you will need to complete your Advanced Healthcare Solutions profile.",
    },
  ],
};
const data2 = {
  imgPath: "/img/referral-management/credentialing-services.png",
  alt: "Credentialing Services",
  heading: "Physician Credentialing Services: Benefits",
  paragraph:
    "As part of its Advanced Healthcare Solutions Credentialing Services for Physicians program, we can provide you with the following services:",
  dataList: [
    {
      li: "Enrollment with major medical providers; Medicare and Medicaid enrollment for individuals and groups",
    },
    {
      li: "Savings for you and your team so you can do what you do best - take care of patients!",
    },
    {
      li: "Within 24 hours, we'll let you know about credentialing.",
    },
    {
      li: "Don't waste time on paperwork, let us handle it",
    },
    {
      li: "An expert team to assist with the paperwork",
    },
    {
      li: "Assistance with appeals of panel closures.",
    },
    {
      li: "Third-party payments come in faster",
    },

    {
      li: "Credentialing in all 50 states",
    },
  ],
};
const CredentialingServices = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Credentialing Services"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Credentialing Services"
        imgClass="bg-2"
      />

      <div className="services-area pt-70 pb-20">
        <div className="container">
          <div
            className="section-title"
            style={{ maxWidth: "1288px", textAlign: "justify" }}
          >
            <p>
              Credentialing involves verifying a provider's qualifications in
              order to ensure that he or she is capable of providing patients
              with care. Several health insurance companies require this process
              in addition to hospitals and surgery centers. A number of these
              plans are available through CMS/Medicare, Medicaid, and commercial
              insurance providers. During the verification process, all
              documentation pertaining to the provider is verified to ensure
              that it is valid and current. A medical license, malpractice
              insurance, and DEA registration are some of these requirements.
            </p>
            Credentialing requires the following additional information:
            <ul>
              <li>Internship/Residency/Fellowship Information</li>
              <li>Curriculum vitae of the provider</li>
              <li>Medical School information</li>
              <li>Certifications by boards</li>
            </ul>
            <p>
              Advanced healthcare credentialing services, we can assist you with
              provider enrollment and becoming an in-network provider so that
              you can receive reimbursement from each carrier. While just a few
              years ago healthcare professionals considered medical
              credentialing services “optional” for building a practice, today
              it has become more necessary than ever for providers to be
              in-network with insurance companies. Learn how PrognoCIS can help
              you get the proper credentials to open a medical practice. In
              order to enable you to become an in-network provider with the
              insurance carriers that you wish to partner with, the
              credentialing team provides knowledgeable and comprehensive
              service. In the event that you need guidance in your specialty and
              service area, we can provide recommendations based on our
              analysis.
            </p>
            <p>
              Additionally, we provide a variety of services to existing
              practices. It is necessary to recertify physicians every three to
              five years in order to maintain credentialing. It is our intention
              to provide you with a service that will perform re-certification
              for you, notify you if your documents are about to expire and
              maintain your profile with the CAQH. Contact us once you have
              gathered all your documentation and are ready to begin. In
              addition to solo practitioners, we also work with practices with
              30 or more providers, as well as practices with one or two
              providers. A number of specialties and services, including DME,
              are covered by our team of professionals.
            </p>
            <p>
              In Advanced Healthcare, our team of professionals maintains
              expertise in the credentialing process for healthcare providers.
              In addition, it is necessary to remain informed about industry
              changes, credentialing trends, and payer requirements. Our team of
              experts manages the entire credentialing process from beginning to
              end. Therefore, our team assumes all of the responsibilities
              normally carried out by your staff, allowing you to devote more
              time and energy to more important tasks.After collecting all
              required documents, we complete the credentialing process, send
              applications to payers, and promptly respond to payers' requests
              for clarification. Each time your practice is due for
              re-credentialing, Advanced Healthcare assigns a team of experts to
              track the deadlines, initiate, and complete the process.
            </p>
            <p>
              In order to complete the initial application, our team works with
              the provider. Among other tasks, we perform primary source
              verification, background screening, as well as coordinating with
              payers to support timeous approvals and expedite the start of new
              providers
            </p>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <div
                className="section-title"
                style={{ maxWidth: "1288px", textAlign: "justify" }}
              >
                <span>
                  <h3>Why Choose Credentialing Services?</h3>
                  <p>
                    The process of credentialing and contracting is used to
                    establish clinics and healthcare facilities. As a result of
                    these principles, you will also establish relationships with
                    insurance companies and patients. A preferred provider
                    network is an important step in enrolling with an insurance
                    company. By participating in these networks with
                    advantageous contracts, Advanced Healthcare Solutions can
                    provide you with credentialing services. As a result, your
                    patient care and satisfaction will improve, while your
                    revenue will increase. Our objective is to increase your
                    facility's capacity to serve patients and improve patient
                    satisfaction. In order to accept patients with insurance,
                    healthcare providers must undergo a credentialing process.
                  </p>
                  <p>
                    Medical practices cannot exist without credentialing. The
                    management of a health care facility, whether it is a clinic
                    or surgery lab, is an essential component of a successful
                    medical practice.
                  </p>
                  <h3>
                    What Makes Us Different From Other Credentialing Companies?
                  </h3>
                  <p>
                    Through our physician credentialing services, you can
                    improve your revenue cycle management with uninterrupted
                    workflow to improve your financial outcomes. Credentialing
                    documents play an important role in healthcare. Our medical
                    credentialing and enrollment practices facilitate compliance
                    with all contractual payers.
                  </p>
                  <p>
                    We verify enrollment status before making submissions and
                    validate EDI and EFT agreements to prevent revenue loss.
                    Medical practices continue to work with Advanced Healthcare
                    because of the high level of service satisfaction we
                    provide.
                  </p>
                </span>
              </div>
            </div>
            <div className="col-lg-6">
              <AppointmentForm billingSoftware={true} />{" "}
            </div>
          </div>
        </div>
      </div>
      <Common2 data={data2} />
      <Common1 data={data1} />
      <OurPromise />
      <ExistingEMR />
      <Footer />
    </>
  );
};

export default CredentialingServices;
