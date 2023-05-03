import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import FunFactStyleTwo from "../components/Common/FunFactStyleTwo";
import DoctorsStyleOne from "../components/Common/DoctorsStyleOne";
import Footer from "../components/_App/Footer";
import AppointmentForm from "../components/HomeOne/AppointmentForm";

const Testimonials = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Testimonials"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Testimonials"
        imgClass="bg-3"
      />

      <div className="client-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="top-title">Testimonials</span>
            <h2>What Our Client’s Say</h2>
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis
              vel consequatur tempora atque blanditiis exercitationem incidunt,
              alias corporis quam assumenda dicta, temporibus.
            </p> */}
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="single-client mr-0 ml-0">
                <img src="/img/client/client1.jpg" alt="img" />

                <p>
                  Working with Advanced Healthcare Solutions for the past 4
                  years has been an absolute pleasure. Their team is always
                  professional and well-versed in the latest medical billing
                  technologies. I highly recommend them to anyone looking for a
                  top-notch medical billing company in Texas. They have saved us
                  time and money, and we are very happy!
                </p>

                <ul>
                  {[1, 2, 3, 4, 5].map((item, i) => (
                    <li
                      style={{ color: "#F7C000" }}
                      className="bx bxs-star"
                      key={i}
                    ></li>
                  ))}
                </ul>

                <h3>Steven Jony</h3>
                {/* <span>CEO of Company</span> */}
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-client mr-0 ml-0">
                <img src="/img/client/client2.jpg" alt="img" />

                <p>
                  I am extremely pleased with the services provided by Advanced
                  Healthcare Solutions. Their team has helped us streamline our
                  billing processes and increase revenue for our healthcare
                  facility. I highly recommend Advanced Healthcare Solutions to
                  anyone in the healthcare industry looking to improve their
                  billing practices.
                </p>

                <ul>
                  {[1, 2, 3, 4, 5].map((item, i) => (
                    <li
                      style={{ color: "#F7C000" }}
                      className="bx bxs-star"
                      key={i}
                    ></li>
                  ))}
                </ul>

                <h3>Omit Jacson</h3>
                {/* <span>Company Founder</span> */}
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-client mr-0 ml-0">
                <img src="/img/client/client3.jpg" alt="img" />

                <p>
                  Working with Advanced Healthcare Solutions has been an
                  absolute pleasure. Their level of professionalism and
                  commitment to excellence is truly unmatched, and they have
                  been extremely responsive to all of our needs. I would highly
                  recommend Advanced Healthcare Solutions to anyone looking for
                  reliable and efficient billing services.
                </p>

                <ul>
                  {[1, 2, 3, 4, 5].map((item, i) => (
                    <li
                      style={{ color: "#F7C000" }}
                      className="bx bxs-star"
                      key={i}
                    ></li>
                  ))}
                </ul>

                <h3>Johnson</h3>
                {/* <span>Marketing Manager</span> */}
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-client mr-0 ml-0">
                <img src="/img/client/client4.jpg" alt="img" />

                <p>
                  We had developed trust in the billing system after using it
                  for three years, which led us to choose Advanced Healthcare
                  Solutions for our EMR system. One of the key factors in our
                  decision was the ability to add and customize features, which
                  has made using the system highly efficient.
                </p>

                <ul>
                  {[1, 2, 3, 4, 5].map((item, i) => (
                    <li
                      style={{ color: "#F7C000" }}
                      className="bx bxs-star"
                      key={i}
                    ></li>
                  ))}
                </ul>

                <h3>Jessica Pigott</h3>
                {/* <span>Company CEO</span> */}
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-client mr-0 ml-0">
                <img src="/img/client/client5.jpg" alt="img" />

                <p>
                  During the exploratory, planning, and implementation stages of
                  our project, working with Advanced Healthcare Solutions was a
                  great experience. Despite the challenges of the pandemic, we
                  decided to proceed with the transition of EMR's, and the team
                  at Advanced Healthcare Solutions was incredibly patient and
                  gracious throughout the process.
                </p>

                <ul>
                  {[1, 2, 3, 4, 5].map((item, i) => (
                    <li
                      style={{ color: "#F7C000" }}
                      className="bx bxs-star"
                      key={i}
                    ></li>
                  ))}
                </ul>

                <h3>Grant Elliot</h3>
                {/* <span>Medical Founder</span> */}
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-client mr-0 ml-0">
                <img src="/img/client/jessica-pigott.jpg" alt="img" />

                <p>
                  What sets Advanced Healthcare Solutions apart is its
                  cloud-based infrastructure and highly customizable platform.
                  The templates are easily tailored to meet the unique needs of
                  our practice, making it a highly flexible and adaptable
                  solution.
                </p>

                <ul>
                  {[1, 2, 3, 4, 5].map((item, i) => (
                    <li
                      style={{ color: "#F7C000" }}
                      className="bx bxs-star"
                      key={i}
                    ></li>
                  ))}
                </ul>

                <h3>Nancy Bowles</h3>
                {/* <span>Medical Manager</span> */}
              </div>
            </div>
            {/* pagination */}
            {/* <div className="col-lg-12">
              <div className="page-navigation-area">
                <nav aria-label="Page navigation example text-center">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link page-links" href="#">
                        <i className="bx bx-chevrons-left"></i>
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <i className="bx bx-chevrons-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <AppointmentForm />
      <FunFactStyleTwo />
      <DoctorsStyleOne />
      <Footer />
    </>
  );
};

export default Testimonials;
