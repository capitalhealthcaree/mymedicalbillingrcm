import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 p-0">
              <div className="single-contact-info">
                <i className="bx bx-location-plus"></i>
                <h3>Richardson</h3>
                <p>2071 N Collins Blvd Suite A Richardson TX 75080</p>
                <span>Email: admin@mymedicalbillingrcm.com</span>
                <span>Tel: +1 (469) 866-5222</span>
              </div>
            </div>

            <div className="col-lg-6 p-0">
              <div className="single-contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.002055476755!2d-96.72469202376794!3d32.977347573720316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1f30af23e6b7%3A0x7d04121ca34f4c79!2s2071%20N%20Collins%20Blvd%20a%2C%20Richardson%2C%20TX%2075080%2C%20USA!5e0!3m2!1sen!2sth!4v1683095833456!5m2!1sen!2sth"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;

