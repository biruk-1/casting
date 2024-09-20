import React from 'react';
import '../styles/Contact.css'; // Import the CSS file

const Contact = () => {
  return (
    <section className="ds section_padding_70">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h2 className="big margin_0">Contact Us</h2>
            <h2 className="muellerhoff topmargin_5 bottommargin_50 highlight">
              Contact Form
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <p className="bottommargin_20">
              <span className="grey fontsize_12 text-uppercase bold">address:</span>
              <br />
              Jackson’s Street 567, San Diego, California, United States
            </p>
            <p className="bottommargin_20">
              <span className="grey fontsize_12 text-uppercase bold">Call us:</span>
              <br />
              8 (800) 456-2698, 8 (800) 456-2643
            </p>
            <p className="bottommargin_0">
              <span className="grey fontsize_12 text-uppercase bold">Email:</span>
              <br />
              <a href="mailto:agency@support.com">
                <em>
                  <span className="__cf_email__">[email&nbsp;protected]</span>
                </em>
              </a>
            </p>
          </div>
          <div className="col-md-8">
            <form className="contact-form row" method="post" action="/">
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="name" className="sr-only">
                    Full Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    aria-required="true"
                    size={30}
                    name="name"
                    id="name"
                    className="form-control with-icon"
                    placeholder="Your Full Name"
                  />
                  <i className="rt-icon2-user" />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="sr-only">
                    Email address <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    aria-required="true"
                    size={30}
                    name="email"
                    id="email"
                    className="form-control with-icon"
                    placeholder="Your Email"
                  />
                  <i className="rt-icon2-mail" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="sr-only">
                    Phone number <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    aria-required="true"
                    size={30}
                    name="phone"
                    id="phone"
                    className="form-control with-icon"
                    placeholder="Your Phone Number"
                  />
                  <i className="rt-icon2-phone5" />
                </div>
                <div className="form-group bottommargin_0">
                  <label htmlFor="theme" className="sr-only">
                    Message theme <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    aria-required="true"
                    size={30}
                    name="theme"
                    id="theme"
                    className="form-control with-icon"
                    placeholder="Message Theme"
                  />
                  <i className="rt-icon2-bulb" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    aria-required="true"
                    rows={6}
                    cols={45}
                    name="message"
                    id="message"
                    className="form-control with-icon"
                    placeholder="Your Message"
                  />
                  <i className="rt-icon2-pen" />
                </div>
                <button
                  type="submit"
                  id="contact_form_submit"
                  name="contact_submit"
                  className="theme_button color1 bottommargin_0"
                >
                  Send
                </button>
                <button
                  type="reset"
                  id="contact_form_clear"
                  name="contact_clear"
                  className="theme_button inverse bottommargin_0"
                >
                  Clear
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
