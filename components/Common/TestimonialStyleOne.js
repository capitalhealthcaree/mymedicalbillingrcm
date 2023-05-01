import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const TestimonialStyleOne = () => {
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
            
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default TestimonialStyleOne;
