import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Privacy Policy"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Privacy Policy"
        imgClass="bg-2"
      />

      <div className="terms-conditions ptb-100">
        <div className="container">
          <div className="single-privacy">
            <p>
              Your privacy is important to us, which is why we have made it a
              top priority to establish this Policy. In order to adhere to the
              policy explained, we've located the following occupation of the
              information gathered: We collect and use personal info in order to
              conduct our business activities. We retain personal information
              only for the purpose(s) specified by us and for other suitable
              reasons. Unless we obtain the consent of the individual concerned
              or as required by law, we will provide personal information only
              for acceptable uses. At Advanced Healthcare Solutions, we value
              our clients' privacy and understand the importance of protecting
              their confidential information. This Privacy and Policy document
              outlines the measures we take to ensure the security of your data.
            </p>
            {/* 1 */}
            <h2>Information We Collect</h2>
            <p>
              We collect certain information from our clients to perform our
              services. This includes but is not limited to:
            </p>
            <ul>
              <li>Patient names and addresses</li>
              <li>Medical history and diagnosis codes</li>
              <li>
                Social security numbers and other personal identification
                information
              </li>
              <li>Insurance policy and payment information</li>
              <li>Healthcare provider information</li>
            </ul>
            {/* 2 */}
            <h2>How We Use The Information</h2>
            <p>We use the information collected for the following purposes:</p>
            <ul>
              <li>Billing and payment processing</li>
              <li>Insurance claim submissions</li>
              <li>Healthcare provider credentialing</li>
              <li>Compliance with legal and regulatory requirementsn</li>
              <li>Quality assurance and analysis</li>
            </ul>
            {/* 3 */}
            <h2>Information Security</h2>
            <p>
              We take measures to ensure the security and confidentiality of our
              clients' data. This includes:
            </p>
            <ul>
              <li>Regular security assessments and audits</li>
              <li>Physical and electronic access controls</li>
              <li>Encryption of sensitive data</li>
              <li>Implementation of HIPAA and HITECH Act regulations</li>
              <li>Staff training on information security</li>
            </ul>
            {/* 4 */}
            <h2>Data Retention</h2>
            <p>
              We retain client data in accordance with legal and regulatory
              requirements. After the retention period, we securely dispose of
              the data.
            </p>
            {/* 5 */}
            <h2>Data Sharing</h2>
            <p>
              We may share client data with authorized third-party vendors to
              provide our services. We require these vendors to maintain the
              same level of confidentiality and security as we do.
            </p>
            {/* 6 */}
            <h2>Client Rights</h2>
            <p>Our clients have the right to:</p>
            <ul>
              <li>Access their data and request corrections</li>
              <li>Request a copy of their data</li>
              <li>Request that their data be deleted</li>
              <li>Request that their data be restricted</li>
            </ul>
            {/* 7 */}
            <h2>Changes to our Privacy and Policy</h2>
            <p>
              We reserve the right to update our Privacy and Policy document as
              necessary. We will notify our clients of any material changes.
            </p>
            <ul>
              <li>Access their data and request corrections</li>
              <li>Request a copy of their data</li>
              <li>Request that their data be deleted</li>
              <li>Request that their data be restricted</li>
            </ul>
            <span>
              At Advanced Healthcare Solutions, we are committed to protecting
              the privacy and security of our clients' data. If you have any
              questions or concerns about our Privacy and Policy, please contact
              us at Email:{" "}
              <b>
                <a href="mailto:admin@mymedicalbillingrcm.com">
                  admin@mymedicalbillingrcm.com
                </a>
              </b>{" "}
              and call us at{" "}
              <b>
                <a href="tel:4695624188">469-562-4188</a>
              </b>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
