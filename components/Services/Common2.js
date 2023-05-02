import React from "react";

const AboutUs = ({ data }) => {
  return (
    <>
      <div className="about-area pt-5 pb-130">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <img src={data.imgPath} alt={data.alt} />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <h2>{data.heading}</h2>
                <p>{data.paragraph}</p>

                <ul>
                  {data.dataList.map((item, i) => (
                    <li key={i}>
                      <i className="flaticon-tick"></i>
                      {item.li}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
