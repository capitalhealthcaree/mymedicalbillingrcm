import React from "react";

const TopHeader = () => {
  return (
    <>
      <div className="top-header-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-9 col-sm-6">
              <ul className="header-content-left">
                {/* <li>
                  <i className="bx bx-time"></i>
                  Mon-Fri 9am-5pm
                </li> */}
                <li>
                  <a href="tel:+14694546966">
                    <i className="bx bx-phone-call"></i>
                    Call Us: +1 (469) 454-6966
                  </a>
                </li>
                <li>
                  <a href="mailto:director@mymedicalbillingrcm.com ">
                    <i className="bx bxs-paper-plane"></i>
                    Email: director@mymedicalbillingrcm.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-3 col-sm-6">
              <ul className="header-content-right">
                <li>
                  <a
                    href="https://www.facebook.com/advancedhealthcaresolution"
                    target="_blank"
                  >
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/advanced-healthcare-sol/"
                    target="_blank"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </li>
                {/* <li>
                  <a href="https://www.twitter.com/" target="_blank">
                    <i className="bx bxl-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.pinterest.com/" target="_blank">
                    <i className="bx bxl-pinterest-alt"></i>
                  </a>
                </li> */}
                <li>
                  <a
                    href="https://www.instagram.com/advancedhealthcaresol/"
                    target="_blank"
                  >
                    <i className="bx bxl-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
