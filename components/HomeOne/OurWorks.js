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

                <h3 className="work-title">
                  {/* <i className="flaticon-kidney"></i> */}
                  Medical Billing Companies
                </h3>

                <div className="work-content-wrap">
                  <div className="work-content">
                    {/* <h3>Surgery Dep</h3> */}
                    <p>
                      Medical billing companies provide healthcare providers
                      with specialized services for processing medical claims
                      and managing revenue cycle operations.
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
                <img src="/img/work2.png" alt="Image" />

                <h3 className="work-title">
                  {/* <i className="flaticon-cardiology"></i> */}
                  Hospitals
                </h3>

                <div className="work-content-wrap">
                  <div className="work-content">
                    {/* <h3>Cardiologist</h3> */}
                    <p>
                      Medical hospitals are healthcare facilities that provide a
                      wide range of medical and surgical services to patients.
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
                <img src="/img/work3.png" alt="Image" />

                <h3 className="work-title">
                  {/* <i className="flaticon-cardiology"></i> */}
                  Physicians
                </h3>

                <div className="work-content-wrap">
                  <div className="work-content">
                    {/* <h3>Cardiologist</h3> */}
                    <p>
                      Physicians are medical professionals who diagnose, treat,
                      and manage illnesses, injuries, and other medical
                      conditions in patients.
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
                <img src="/img/work4.png" alt="Image" />

                <h3 className="work-title">
                  {/* <i className="flaticon-cardiology"></i> */}
                  Small Practices
                </h3>

                <div className="work-content-wrap">
                  <div className="work-content">
                    {/* <h3>Cardiologist</h3> */}
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

                <h3 className="work-title">
                  {/* <i className="flaticon-cardiology"></i> */}
                  Urgent Care Centers
                </h3>

                <div className="work-content-wrap">
                  <div className="work-content">
                    {/* <h3>Cardiologist</h3> */}
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

        {/* <div className="shape">
          <img src="/img/shape/work-shape.png" alt="Image" />
        </div> */}
      </div>
    </>
  );
};

export default OurWorks;
