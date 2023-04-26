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
                              href="/service-details/"
                              className={`nav-link ${
                                currentPath == "/service-details/" && "active"
                              }`}
                            >
                              Durable Medical Equipment (DME)
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/revenue-cycle-management"
                              className={`nav-link ${
                                currentPath == "/services-3/" && "active"
                              }`}
                            >
                              Revenue Cycle Management
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/service-details/"
                              className={`nav-link ${
                                currentPath == "/service-details/" && "active"
                              }`}
                            >
                              Credentialing Services
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/medical-billing-services/"
                              className={`nav-link ${
                                currentPath == "/services-1/" && "active"
                              }`}
                            >
                              Medical Billing Service
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/services-2/"
                              className={`nav-link ${
                                currentPath == "/services-1/" && "active"
                              }`}
                            >
                              Practice Management
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/service-details/"
                              className={`nav-link ${
                                currentPath == "/service-details/" && "active"
                              }`}
                            >
                              Referral Management
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/services-1/"
                              className={`nav-link ${
                                currentPath == "/services-1/" && "active"
                              }`}
                            >
                              All-in-One Platform
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/service-details/"
                              className={`nav-link ${
                                currentPath == "/service-details/" && "active"
                              }`}
                            >
                              Medical Supplies
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/service-details/"
                              className={`nav-link ${
                                currentPath == "/service-details/" && "active"
                              }`}
                            >
                              Specialty EHR
                            </Link>
                          </li>
                        </ul>
                      </li>
                      {/*  Billing Software */}
                      <li className="nav-item">
                        <Link href="services-2" className="nav-link">
                          Billing Softwares <i className="bx bx-plus"></i>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/service-details/"
                              className={`nav-link ${
                                currentPath == "/service-details/" && "active"
                              }`}
                            >
                              Medisoft Billing Software Office Ally
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/service-details/"
                              className={`nav-link ${
                                currentPath == "/service-details/" && "active"
                              }`}
                            >
                              IMS - Intelligent Billing Software
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/services-3/"
                              className={`nav-link ${
                                currentPath == "/services-3/" && "active"
                              }`}
                            >
                              eCinicalWorks Billing Software
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/services-2/"
                              className={`nav-link ${
                                currentPath == "/services-1/" && "active"
                              }`}
                            >
                              ChiroTouch Billing Software
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/services-1/"
                              className={`nav-link ${
                                currentPath == "/services-1/" && "active"
                              }`}
                            >
                              Athena Billing Software
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/service-details/"
                              className={`nav-link ${
                                currentPath == "/service-details/" && "active"
                              }`}
                            >
                              Kareo Billing Software
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/service-details/"
                              className={`nav-link ${
                                currentPath == "/service-details/" && "active"
                              }`}
                            >
                              Lytec Billing Software
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/service-details/"
                              className={`nav-link ${
                                currentPath == "/service-details/" && "active"
                              }`}
                            >
                              Billing Software
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
                              href="/doctors-1/"
                              className={`nav-link ${
                                currentPath == "/doctors-1/" && "active"
                              }`}
                            >
                              Doctors Style One
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/doctors-2/"
                              className={`nav-link ${
                                currentPath == "/doctors-2/" && "active"
                              }`}
                            >
                              Doctors Style Two
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/doctors-3/"
                              className={`nav-link ${
                                currentPath == "/doctors-3/" && "active"
                              }`}
                            >
                              Doctors Style Three
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/doctor-details/"
                              className={`nav-link ${
                                currentPath == "/doctor-details/" && "active"
                              }`}
                            >
                              Doctors Details
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
                              href="/blog-right-sidebar/"
                              className={`nav-link ${
                                currentPath == "/blog-right-sidebar/" &&
                                "active"
                              }`}
                            >
                              Privacy Policy
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/testimonials/"
                              className={`nav-link ${
                                currentPath == "/blog-details/" && "active"
                              }`}
                            >
                              Testimonials
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/blog-right-sidebar/"
                              className={`nav-link ${
                                currentPath == "/blog-right-sidebar/" &&
                                "active"
                              }`}
                            >
                              Contact Us
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/blog-details/"
                              className={`nav-link ${
                                currentPath == "/blog-details/" && "active"
                              }`}
                            >
                              Case Study
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/blog-details/"
                              className={`nav-link ${
                                currentPath == "/blog-details/" && "active"
                              }`}
                            >
                              Case Study
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/blog-left-sidebar/"
                              className={`nav-link ${
                                currentPath == "/blog-left-sidebar/" && "active"
                              }`}
                            >
                              About Us
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/faq/"
                              className={`nav-link ${
                                currentPath == "/blog-details/" && "active"
                              }`}
                            >
                              FAQs
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/blog-grid/"
                              className={`nav-link ${
                                currentPath == "/blog-grid/" && "active"
                              }`}
                            >
                              Blog
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/blog-details/"
                              className={`nav-link ${
                                currentPath == "/blog-details/" && "active"
                              }`}
                            >
                              News
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div className="others-option">
                    <div className="subscribe">
                      <Link href="/contact" className="default-btn">
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