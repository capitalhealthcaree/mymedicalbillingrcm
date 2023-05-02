import React from "react";

const ProtectYourself = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="prevention-area pt-70 pb-70">
        <div className="container-fluid">
          <div className="section-title">
            <h2>{data.heading}</h2>
            <p>{data.paragraph}</p>
          </div>

          <div className="row">
            {data.dataList.map((item, i) => (
              <div className="col-lg-4 col-sm-6" key={i}>
                <div className="single-prevention">
                  <i className="flaticon-growth"></i>
                  <h3>{item.h}</h3>
                  <p>{item.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProtectYourself;
