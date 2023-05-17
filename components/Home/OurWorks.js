import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const OurWorks = () => {
  return (
    <>
      <div className="our-work-area ptb-50">
        <div className="container">
          <div className="section-title">
            <h2 style={{ color: "white" }}>Whom We Serve</h2>
            <p style={{ color: "white" }}>
              Our company serves a diverse range of clients across various
              industries, including healthcare, finance, and technology
            </p>
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
              992: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="our-work-slide"
          >
            <SwiperSlide>
              <div className="single-work">
                <img src="/img/work1.png" alt="Image" />

                <h3 className="work-title">Medical Billing Companies</h3>

                <div className="work-content-wrap">
                  <div className="work-content">
                    <p>
                      Medical billing companies provide healthcare providers
                      with specialized services for processing medical claims
                      and managing revenue cycle operations.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-work">
                <img src="/img/work2.png" alt="Image" />

                <h3 className="work-title">Hospitals</h3>

                <div className="work-content-wrap">
                  <div className="work-content">
                    <p>
                      Medical hospitals are healthcare facilities that provide a
                      wide range of medical and surgical services to patients.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-work">
                <img src="/img/work3.png" alt="Image" />

                <h3 className="work-title">Physicians</h3>

                <div className="work-content-wrap">
                  <div className="work-content">
                    <p>
                      Physicians are medical professionals who diagnose, treat,
                      and manage illnesses, injuries, and other medical
                      conditions in patients.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-work">
                <img src="/img/work4.png" alt="Image" />

                <h3 className="work-title">Small Practices</h3>

                <div className="work-content-wrap">
                  <div className="work-content">
                    <p>
                      Small practices typically refer to healthcare facilities
                      with fewer than ten physicians, providing personalized and
                      community-based medical care services to patients.
                    </p>

                    <Link href="/service-details" className="read-more">
                      Details <i className="bx bx-plus"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-work">
                <img src="/img/work5.png" alt="Image" />

                <h3 className="work-title">Urgent Care Centers</h3>

                <div className="work-content-wrap">
                  <div className="work-content">
                    <p>
                      Urgent Care Centers are medical facilities that offer
                      immediate medical attention for non-life-threatening
                      illnesses or injuries, often with extended hours and
                      walk-in appointments.
                    </p>

                    <Link href="/service-details" className="read-more">
                      Details <i className="bx bx-plus"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default OurWorks;
