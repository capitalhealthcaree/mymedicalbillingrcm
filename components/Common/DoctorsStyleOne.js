import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

const DoctorsStyleOne = () => {
  return (
    <>
      <div className="doctors-area pt-5 pb-5">
        <div className="container">
          <div className="section-title">
            {/* <span className="top-title">Our Doctors</span> */}
            <h2>We are Fully Trained on your existing EMR</h2>
          </div>

          <Swiper
            spaceBetween={30}
            navigation={true}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
            modules={[Navigation, Autoplay]}
            className="doctors-slide"
          >
            <SwiperSlide>
              <img src="/img/doctors/icanotes.jpg" alt="Image" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="/img/doctors/cerner.jpg" alt="Image" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="/img/doctors/amd.jpg" alt="Image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/doctors/officeally.jpg" alt="Image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/doctors/nextgen.jpg" alt="Image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/doctors/allscript.jpg" alt="Image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/doctors/carecloud.jpg" alt="Image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/doctors/epic.jpg" alt="Image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/doctors/atheanhealth.jpg" alt="Image" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default DoctorsStyleOne;
