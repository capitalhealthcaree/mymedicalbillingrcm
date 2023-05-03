import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CSR_BASE_URL = process.env.NEXT_PUBLIC_URL;

const AppointmentForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [numberOfPhysicians, setNumberOfPhysicians] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);

  const HandleForm = async (e) => {
    e.preventDefault();

    let data = {
      name: name,
      phone: phone,
      email: email,
      organization: organization,
      numberOfPhysicians: numberOfPhysicians,
      message: message,
    };
    setLoader(true);
    const demoRequest = await axios.post(
      `${CSR_BASE_URL}demo/createDemoRequest`,
      data
    );

    if (demoRequest.status === 200) {
      toast("Demo Request is sent successfully");
      setLoader(false);
      // setTimeout(() => {
      //   Router.push("/thank-you");
      // }, 2000);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="container">
        <div className="appointment-here-form">
          <span className="top-title">Schedule a Demo</span>
          <h2>We Are Here For You</h2>

          <form onSubmit={HandleForm}>
            <div className="row">
              <div className="col-lg-6 col-sm-6">
                <label>Name</label>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="Enter Your Organization Name"
                  />
                  <i className="flaticon-account"></i>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6">
                <label>Number of Physicians*</label>
                <div className="form-group">
                  <select
                    className="form-control"
                    value={numberOfPhysicians}
                    onChange={(e) => setNumberOfPhysicians(e.target.value)}
                  >
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
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  <i className="flaticon-edit"></i>
                </div>
              </div>

              <div className="col-12">
                <button type="submit" className=" d-flex default-btn">
                  {loader && (
                    <span
                      className="me-3 spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  )}
                  Send Request
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AppointmentForm;
