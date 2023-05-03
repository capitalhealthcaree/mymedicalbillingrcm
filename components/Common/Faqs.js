import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const Faqs = () => {
  return (
    <>
      <div className="faq-area bg-2 ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="faq-accordion">
                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>
                          How Much Time Does It Take to Get the Advanced
                          Healthcare Solutions EHR System Started?
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        The Go-Live date for small to medium practices is
                        usually scheduled within 4-6 weeks after the kick-off
                        call, while larger practices require a longer time frame
                        of 8-10 weeks. It's important to note that this timeline
                        can vary depending on the project's size and scope.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>
                          Could You Please Provide Me With the Details Of Your
                          Agreement And Pricing?
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        The goal of Advanced Healthcare Solutions is to make it
                        easy for users to use. Please refer to our Customer
                        Subscription Agreement for more details. Be sure to
                        check out our Customer Support Policy, Pricing Policy,
                        and Privacy Policy.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>
                          What Are the Steps In the Medical Billing Process?
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <ul>
                        <li>
                          Analysis of revenue cycle metrics to identify process
                          improvements and optimize revenue generation.
                        </li>
                        <li>
                          Payment posting and reconciliation of received
                          payments with outstanding balances
                        </li>
                        <li>
                          Patient statement generation and collection of
                          outstanding balances
                        </li>
                        <li>
                          Claim submission to insurance companies or other
                          payers
                        </li>
                        <li>
                          Patient registration and demographic information entry
                        </li>
                        <li>
                          Pre-authorization or referral management, if required
                        </li>
                        <li>Charge capture and coding of services rendered</li>
                        <li>
                          Denial management and appeals, if necessary
                          <li>Follow-up on unpaid claims or balances</li>
                        </li>
                        <li>Insurance eligibility verification</li>
                      </ul>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>What Does Advanced Healthcare Solutions do?</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Advanced Healthcare Solutions offers a range of
                        healthcare services, including RCM, EHR, Practice
                        Management, Credentialing Service, Patient Portal, and
                        Medical Billing. These services are carefully designed
                        to enhance outcomes, quality, and returns, which has
                        earned the company several awards.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>Do You Handle Patient Billing Inquiries?</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Yes, Advanced Healthcare Solutions team handles patient
                        billing inquiries.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem uuid="f">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>Can I Contact the Dedicated Manager?</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Yes, Advanced Healthcare Solutions will provide
                        dedicated access to a team manager for your practice.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>{" "}
                  <AccordionItem uuid="g">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>What Is The Medical Billing Cycle?</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        The medical billing cycle refers to the complete process
                        of submitting and processing medical claims for
                        reimbursement, from verifying patient eligibility to
                        collecting payments. It includes several steps, such as
                        patient registration, charge capture, claim submission,
                        payment posting, and follow-up.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem uuid="h">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>What Is RCM In Medical Billing?</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        RCM (Revenue Cycle Management) in medical billing is the
                        process of managing the financial aspects of patient
                        care, including insurance eligibility verification,
                        claims submission, payment posting, denial management,
                        and patient billing to optimize revenue generation and
                        cash flow
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem uuid="i">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>What Is EHR In Medical Billing?</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        EHR (Electronic Health Record) in medical billing is a
                        digital record of a patient's medical history, including
                        diagnoses, treatments, and medications. It is used by
                        healthcare providers to document patient encounters,
                        facilitate communication, and improve clinical outcomes.
                        EHRs can also integrate with medical billing systems to
                        automate billing processes and reduce errors.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem uuid="j">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>What Is EHR In Medical Billing?</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Yes, Advanced Healthcare Solutions offers
                        faster-credentialing services at an additional cost for
                        healthcare providers.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem uuid="k">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>What Is AR Medical Billing?</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        AR medical billing is the process of managing accounts
                        receivable for medical practices, which involves
                        submitting claims to insurance companies, following up
                        on unpaid or denied claims, and collecting payments from
                        patients.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem uuid="l">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>Are You HIPAA-Compliant?</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        We at Advanced Healthcare Solutions are compliant with
                        HIPAA regulations in medical billing and are willing to
                        sign a business associate agreement with you.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem uuid="m">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>What Is the Setup Time?</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        What Is the Setup Time?Upon signing up, you will be able
                        to access your account immediately. It usually takes
                        between 30 and 45 days for onboarding to take place. For
                        more information on the steps involved in onboarding,
                        please refer to the onboarding guide.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
