import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import TopHeader from "./TopHeader";

const Navbar = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <header className="header-area fixed-top">
        <TopHeader />

        <div className="nav-area">
          <div id="navbar" className="navbar-area">
            <div className="main-nav">
              <nav className="navbar navbar-expand-md navbar-light">
                <div className="container">
                  <Link href="/" className="navbar-brand">
                    <img src="/img/rcm-logo.png" alt="logo" />
                  </Link>

                  <button
                    onClick={toggleNavbar}
                    className={classTwo}
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="icon-bar top-bar"></span>
                    <span className="icon-bar middle-bar"></span>
                    <span className="icon-bar bottom-bar"></span>
                  </button>

                  <div className={classOne} id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                      {/* Home */}
                      <li className="nav-item">
                        <Link href="/" className="nav-link">
                          Home
                        </Link>
                      </li>
                      {/* Services */}
                      <li className="nav-item">
                        <Link
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="nav-link"
                        >
                          Services <i className="bx bx-plus"></i>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/durable-medical-equipment/"
                              className={`nav-link ${
                                currentPath == "/durable-medical-equipment/" &&
                                "active"
                              }`}
                            >
                              Durable Medical Equipment (DME)
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/vaccine-management-system/"
                              className={`nav-link ${
                                currentPath == "/vaccine-management-system/" &&
                                "active"
                              }`}
                            >
                              Vaccine Management System
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/revenue-cycle-management"
                              className={`nav-link ${
                                currentPath == "/revenue-cycle-management/" &&
                                "active"
                              }`}
                            >
                              Revenue Cycle Management
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/credentialing-services/"
                              className={`nav-link ${
                                currentPath == "/credentialing-services/" &&
                                "active"
                              }`}
                            >
                              Credentialing Services
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/medical-billing-services/"
                              className={`nav-link ${
                                currentPath == "/medical-billing-services/" &&
                                "active"
                              }`}
                            >
                              Medical Billing Service
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/practice-management/"
                              className={`nav-link ${
                                currentPath == "/practice-management/" &&
                                "active"
                              }`}
                            >
                              Practice Management
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/referral-management/"
                              className={`nav-link ${
                                currentPath == "/referral-management/" &&
                                "active"
                              }`}
                            >
                              Referral Management
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/all-in-one/"
                              className={`nav-link ${
                                currentPath == "/all-in-one/" && "active"
                              }`}
                            >
                              All-in-One Platform
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/medical-supplies/"
                              className={`nav-link ${
                                currentPath == "/medical-supplies/" && "active"
                              }`}
                            >
                              Medical Supplies
                            </Link>
                          </li>
                        </ul>
                      </li>
                      {/*  Billing Software */}
                      <li className="nav-item">
                        <Link
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="nav-link"
                        >
                          Billing Softwares <i className="bx bx-plus"></i>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/intelligent-medical-billing-services/"
                              className={`nav-link ${
                                currentPath ==
                                  "/intelligent-medical-billing-services/" &&
                                "active"
                              }`}
                            >
                              IMS - Intelligent Billing Software
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/ecinicalworks-billing-services/"
                              className={`nav-link ${
                                currentPath ==
                                  "/ecinicalworks-billing-services/" && "active"
                              }`}
                            >
                              eCinicalWorks Billing Software
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/chirotouch-billing-services/"
                              className={`nav-link ${
                                currentPath ==
                                  "/chirotouch-billing-services/" && "active"
                              }`}
                            >
                              ChiroTouch Billing Software
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/office-ally-medical-billing-services/"
                              className={`nav-link ${
                                currentPath ==
                                  "/office-ally-medical-billing-services/" &&
                                "active"
                              }`}
                            >
                              Office Ally Billing Software
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/medisoft-billing-services/"
                              className={`nav-link ${
                                currentPath == "/medisoft-billing-services/" &&
                                "active"
                              }`}
                            >
                              Medisoft Billing Software
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/athena-billing-services/"
                              className={`nav-link ${
                                currentPath == "/athena-billing-services/" &&
                                "active"
                              }`}
                            >
                              Athena Billing Software
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/kareo-billing-services/"
                              className={`nav-link ${
                                currentPath == "/kareo-billing-services/" &&
                                "active"
                              }`}
                            >
                              Kareo Billing Software
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/lytec-billing-services/"
                              className={`nav-link ${
                                currentPath == "/lytec-billing-services/" &&
                                "active"
                              }`}
                            >
                              Lytec Billing Software
                            </Link>
                          </li>
                        </ul>
                      </li>
                      {/*  Our Clients */}
                      <li className="nav-item">
                        <Link
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="nav-link"
                        >
                          Our Clients <i className="bx bx-plus"></i>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="#"
                              onClick={(e) => e.preventDefault()}
                              // href="/doctors-1/"
                              // className={`nav-link ${
                              //   currentPath == "/doctors-1/" && "active"
                              // }`}
                            >
                              Hospital & Health System
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="#"
                              onClick={(e) => e.preventDefault()}
                              // href="/doctor-details/"
                              // className={`nav-link ${
                              //   currentPath == "/doctor-details/" && "active"
                              // }`}
                            >
                              Outsource Billing Services
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="#"
                              onClick={(e) => e.preventDefault()}
                              // href="/doctors-2/"
                              // className={`nav-link ${
                              //   currentPath == "/doctors-2/" && "active"
                              // }`}
                            >
                              Medical Group Practices
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="#"
                              onClick={(e) => e.preventDefault()}
                              // href="/doctors-3/"
                              // className={`nav-link ${
                              //   currentPath == "/doctors-3/" && "active"
                              // }`}
                            >
                              Independent Practices
                            </Link>
                          </li>
                        </ul>
                      </li>
                      {/*  Company */}
                      <li className="nav-item">
                        <Link
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="nav-link"
                        >
                          Company <i className="bx bx-plus"></i>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/privacy-policy/"
                              className={`nav-link ${
                                currentPath == "/privacy-policy/" && "active"
                              }`}
                            >
                              Privacy Policy
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/testimonials/"
                              className={`nav-link ${
                                currentPath == "/testimonials/" && "active"
                              }`}
                            >
                              Testimonials
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/contact/"
                              className={`nav-link ${
                                currentPath == "/contact/" && "active"
                              }`}
                            >
                              Contact Us
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/img/Advanced-Healthcare-solutions-Infography.pdf"
                              className="nav-link"
                            >
                              Infographic
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/about/"
                              className={`nav-link ${
                                currentPath == "/about/" && "active"
                              }`}
                            >
                              About Us
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/faq/"
                              className={`nav-link ${
                                currentPath == "/faq/" && "active"
                              }`}
                            >
                              FAQs
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/news/"
                              className={`nav-link ${
                                currentPath == "/news/" && "active"
                              }`}
                            >
                              News
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/blog/"
                              className={`nav-link ${
                                currentPath == "/blog/" && "active"
                              }`}
                            >
                              Blog
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div className="others-option">
                    <div className="subscribe">
                      <Link href="/demo" className="default-btn">
                        Request Demo
                      </Link>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
