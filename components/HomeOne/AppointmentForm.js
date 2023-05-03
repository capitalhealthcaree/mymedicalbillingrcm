import React, { useState } from "react";

const AppointmentForm = () => {
  return (
    <>
      <div className="appointment-area jarallax ptb-50">
        <div className="container">
          <div className="appointment-here-form">
            <span className="top-title">Schedule a Demo</span>
            <h2>We Are Here For You</h2>

            <form>
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <label>Name</label>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="Name"
                      placeholder="Enter Your Name"
                    />
                    <i className="flaticon-man"></i>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <label>Email</label>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="Email"
                      placeholder="Enter Your Email"
                    />
                    <i className="flaticon-email"></i>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <label>Phone</label>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="Phone"
                      placeholder="Enter Your Phone"
                    />
                    <i className="flaticon-smartphone"></i>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <label>Organization</label>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="Name"
                      placeholder="Enter Your Organization Name"
                    />
                    <i className="flaticon-account"></i>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <label>Number of Physicians*</label>
                  <div className="form-group">
                    <select className="form-control">
                      <option value="">Select</option>
                      <option value="1">1</option>
                      <option value="2-5">2-5</option>
                      <option value="6-10">6-10</option>
                      <option value="11-25">11-25</option>
                      <option value="25-50">25-50</option>
                      <option value="51-100">51-100</option>
                      <option value="100+">100+</option>
                    </select>
                    <i className="flaticon-user"></i>
                  </div>
                </div>

                <div className="col-lg-12">
                  <label>Message</label>
                  <div className="form-group">
                    <textarea
                      name="message"
                      className="form-control"
                      id="Message"
                      cols="30"
                      rows="8"
                      placeholder="Your Message"
                    ></textarea>
                    <i className="flaticon-edit"></i>
                  </div>
                </div>

                <div className="col-12">
                  <button type="submit" className="default-btn">
                    Send Request
                  </button>
                </div>
              </div>
            </form>

            <div className="shape">
              <img src="/img/shape/appointment-shape.png" alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentForm;
