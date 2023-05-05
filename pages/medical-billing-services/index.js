import React from "react";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/_App/Footer";
import SimpleDemoRequestForm from "../../components/DemoRequestForm/SimpleDemoRequestForm";
import MBSFeature from "../../components/Services/MBS";
import OurPromise from "../../components/Common/OurPromise";
import ExistingEMR from "../../components/Common/ExistingEMR";

const MBS = () => {
  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="Medical Billing Services"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Medical Billing Services"
        imgClass="bg-2"
      />

      <div className="services-area pt-70 pb-20">
        <div className="container">
          <div
            className="section-title"
            style={{ maxWidth: "1288px", textAlign: "justify" }}
          >
            <p>
              In order to receive payment for medical services, providers and
              provider organizations submit medical claims to insurers. Billers
              ensure reimbursement for healthcare providers' work by converting
              healthcare services into billing claims. A medical biller can help
              a physician practice or healthcare organization optimize revenue
              performance. As a medical practice or facility, understanding how
              medical billing services work is essential to having an efficient
              and successful financial system. Working with a professional
              medical billing services company can take the guesswork out of the
              process and help you maximize your profits.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <h3>Claim Submission and Scrubbing</h3>
                <p>
                  Due to our scrubbing process, our billing experts submit clean
                  claims. We will make any necessary corrections and resubmit
                  the document as soon as we receive a rejection.
                </p>

                {/* <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link> */}
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <h3>Payment Posting</h3>
                <p>
                  By posting the ERAs and EOBs on our website, we are
                  responsible for verifying and posting them in a timely manner.
                  We update the patient accounts with the balances that remain
                  on them.
                </p>

                {/* <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link> */}
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <h3>Follow-Up & Appeals</h3>
                <p>
                  Our specialists investigate denials to make sure the due
                  payment gets processed. Medical billing services Dallas tx
                  play an important role in the healthcare industry.
                </p>

                {/* <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link> */}
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <h3>Real-Time Insurance Verification</h3>
                <p>
                  To ensure that the process is streamlined, receivable days are
                  shortened, and denials are minimized, we verify the
                  eligibility of each patient's insurance.
                </p>

                {/* <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link> */}
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <h3>Error-Free Charge Entry</h3>
                <p>
                  It is our goal to make sure that claims are submitted
                  correctly the first time through our detailed charge entry
                  process.
                </p>

                {/* <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link> */}
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <h3>Patient Statements</h3>
                <p>
                  After all payers confirm they've received the right amount, a
                  detailed statement will show the patient's remaining balance.
                </p>

                {/* <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link> */}
              </div>
            </div>
          </div>
          <div className="row mt-5 mb-5">
            <div className="col-lg-6">
              <div
                className="section-title"
                style={{ maxWidth: "1288px", textAlign: "justify" }}
              >
                <h2>The Reason For Billing</h2>
                <span>
                  <p>
                    There is a complex system of information and payment
                    involved in doctor's visits, which may appear to be
                    one-to-one interactions. A patient is likely to be in direct
                    contact with only one person during the checkup, but the
                    checkup is actually a collaborative effort involving three
                    parties.
                  </p>
                </span>

                <div className="fw-bold">
                  <span style={{ color: "#0cb8b6" }}> &#10004;</span> Healthcare
                  providers are the second party. An provider is a hospital,
                  physician, physical therapist, emergency room, outpatient
                  facility, or any other provider that provides medical care.
                </div>
                <div className="fw-bold">
                  <span style={{ color: "#0cb8b6" }}> &#10004;</span> Insurance
                  companies, or payers, are the third party.
                </div>
                <div className="fw-bold">
                  <span style={{ color: "#0cb8b6" }}> &#10004;</span> In the
                  first instance, there is the patient.
                </div>

                <p>
                  The medical biller must negotiate and pay these three parties.
                  In order to reimburse healthcare providers, billers must bill
                  patients as well as payers. Health care providers are billed
                  in order to collect payment for their services.It involves
                  compiling information (found on a "superbill") regarding the
                  patient and his or her procedure into an insurance claim form.
                  Claims contain patient demographics, medical histories,
                  insurance coverage, and reports on treatments performed. In
                  order to coordinate reimbursement, medical billers coordinate
                  reimbursements between patients, healthcare providers, and
                  insurance companies (also known as payers).
                </p>
                <p>
                  The billing department collects the necessary information
                  first. Analyses the demographics, medical history, insurance
                  coverage, and previous treatment of the patient. To verify
                  coverage, billers review patients' medical records and
                  insurance policies. We generate medical claims, check them for
                  accuracy, then submit them to payers. Once a payer has
                  approved a claim, the payer will notify the biller and the
                  amount he/she has agreed to pay will be returned to the
                  biller. It is at this point, or before the patient sees a
                  doctor, that the billers prepare the patient's bill.
                </p>
                <p>
                  Deducting the amount reimbursed by insurance, taking into
                  account copayments and deductibles, and adding outstanding
                  patient balances are the steps. Posting and reconciliation of
                  payments follows invoices to patients. There are a number of
                  other activities that occur before, after, and in between the
                  workday of a medical biller. Medical billing services in
                  California are essential in the healthcare industry, as they
                  provide a critical link between patients and providers.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <SimpleDemoRequestForm />
            </div>
          </div>
        </div>
      </div>
      <OurPromise />
      <ExistingEMR />
      <MBSFeature />
      <Footer />
    </>
  );
};

export default MBS;
