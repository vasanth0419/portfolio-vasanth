import React from "react";
import "./style.css/Contactus.css";
import Footer from "./Footer";
import { motion } from "framer-motion";
const Contactus = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div>
          <section className="contact_us">
            <div className="container-fluid">
              <div className="row contactform">
                <div className="col-md-10 offset-md-1">
                  <div className="contact_inner">
                    <div className="row">
                      <div className="col-md-10">
                        <div className="contact_form_inner">
                          <div className="contact_field">
                            <h3>Get In Touch..</h3>
                            <p>
                              Feel free to get in touch with us anytime. We'll
                              respond as soon as possible!
                            </p>
                            <input
                              type="text"
                              className="form-control form-group"
                              placeholder="Name"
                            />
                            <input
                              type="text"
                              className="form-control form-group"
                              placeholder="Email"
                            />
                            <textarea
                              className="form-control form-group"
                              placeholder="Message"
                            ></textarea>
                            <button className="contact_form_submit">
                              Send
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="right_contact_social_icon d-flex align-items-end">
                          <div className="social_item_inner d-flex">
                            <li>
                              <a href="https://www.linkedin.com/in/vasanth-salomon?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BYqZoyfGNTY%2Byil3%2Bbx%2BA5w%3D%3D">
                                <i className="bi bi-linkedin"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="bi bi-instagram"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="bi bi-twitter"></i>
                              </a>
                            </li>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="contact_info_sec contact-body">
                      <h4>Contact Info</h4>
                      <div className="d-flex info_single align-items-center">
                        <i className="bi bi-headset"></i>
                        <span>+91 9566443153</span>
                      </div>
                      <div className="d-flex info_single align-items-center">
                        <i className="bi bi-envelope-open"></i>
                        <span>vasanthsalomonv1904@gmail.com</span>
                      </div>
                      <div className="d-flex info_single align-items-center">
                        <i className="bi bi-geo-alt"></i>
                        <span>Velachery, Chennai - 600042</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </motion.div>
    </>
  );
};

export default Contactus;
