import React, { useState } from "react";
import api from "../../utils/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppointmentForm = ({ leftSideDemoForm, billingSoftware }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [numberOfPhysicians, setNumberOfPhysicians] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);

  const HandleForm = async (e) => {
    e.preventDefault();

    // Check for empty fields
    if (!name || !phone || !email || !organization || !numberOfPhysicians) {
      toast.error("Please fill in all required fields.");
      return; // Prevent submission if fields are empty
    }

    let data = {
      name,
      phone,
      email,
      organization,
      numberOfPhysicians,
      message,
    };
    setLoader(true);

    try {
      const demoRequest = await api.post("/demo/createDemoRequest", data);
      if (demoRequest.status === 200) {
        toast.success("Demo Request is sent successfully");

        // Clear the fields after successful submission
        setName("");
        setPhone("");
        setEmail("");
        setOrganization("");
        setNumberOfPhysicians("");
        setMessage("");
      } else {
        toast.error("Failed to send the request. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoader(false); // Turn off loader after request completes
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
      <div
        className={
          leftSideDemoForm || billingSoftware
            ? ""
            : "appointment-area jarallax ptb-50"
        }
      >
        <div className="container">
          <div className="appointment-here-form">
            <span className="top-title">Schedule a Demo</span>
            <h2>We Are Here For You</h2>

            <form onSubmit={HandleForm}>
              <div className="row">
                <div
                  className={leftSideDemoForm ? "col-12" : "col-lg-6 col-sm-6"}
                >
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

                <div
                  className={leftSideDemoForm ? "col-12" : "col-lg-6 col-sm-6"}
                >
                  <label>Email</label>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter Your Email"
                      required
                    />
                    <i className="flaticon-email"></i>
                  </div>
                </div>

                <div
                  className={leftSideDemoForm ? "col-12" : "col-lg-6 col-sm-6"}
                >
                  <label>Phone</label>
                  <div className="form-group">
                    <input
                      type="tel"
                      className="form-control"
                      id="Phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter Your Phone"
                      required
                    />
                    <i className="flaticon-smartphone"></i>
                  </div>
                </div>

                <div
                  className={leftSideDemoForm ? "col-12" : "col-lg-6 col-sm-6"}
                >
                  <label>Organization</label>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="Organization"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="Enter Your Organization Name"
                      required
                    />
                    <i className="flaticon-account"></i>
                  </div>
                </div>

                <div
                  className={leftSideDemoForm ? "col-12" : "col-lg-6 col-sm-6"}
                >
                  <label>Number of Physicians*</label>
                  <div className="form-group">
                    <select
                      className="form-control"
                      value={numberOfPhysicians}
                      onChange={(e) => setNumberOfPhysicians(e.target.value)}
                      required
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
                  <button type="submit" className="d-flex default-btn">
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
            {!leftSideDemoForm && !billingSoftware && (
              <div className="shape">
                <img src="/img/shape/appointment-shape.png" alt="Image" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentForm;
