import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const Testimonial = () => {
  return (
    <>
      <div className="client-area c-bg pt-5 pb-5">
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

          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="client-slide"
          >
            <SwiperSlide>
              <div className="single-client">
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
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-client">
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
                {/* <span>Supervisor</span> */}
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-client">
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
                {/* <span>Team Leader</span> */}
              </div>
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
