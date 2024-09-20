import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (  
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <a href="./" className="logo logo_image bottommargin_10">
                            <h1>Casting<span className="muellerhoff">Agency</span></h1>
                            {/* <img src="images/logo.png" alt="Logo" /> */}
                        </a>
                        <p>
                            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                            suscipit lobortis nisl uekt aliquip ex ea commodo consequat duis
                            auhtem veleum iriure dolor.
                        </p>
                        <div className="payment-icons">
                            <i className="fa fa-cc-visa" />
                            <i className="fa fa-cc-discover" />
                            <i className="fa fa-cc-mastercard" />
                            <i className="fa fa-cc-amex" />
                            <i className="fa fa-cc-paypal" />
                        </div>
                    </div>
                    <div className="footer-links">
                        <h3 className="widget-title">Navigation</h3>
                        <ol className="list2 bottommargin_0">
                            <li><a href="./">Homepage</a></li>
                            <li><a href="about.html">Pages</a></li>
                            <li><a href="models.html">Our Models</a></li>
                            <li><a href="appointment.html">Appointment</a></li>
                            <li><a href="faq.html">Frequently Asked Questions</a></li>
                            <li><a href="contact.html">Contacts</a></li>
                        </ol>
                    </div>
                    <div className="footer-links">
                        <h3 className="widget-title">Useful Links</h3>
                        <ol className="list2 bottommargin_0">
                            <li><a href="#">Model Agencies listings</a></li>
                            <li><a href="#">Banner exchange</a></li>
                            <li><a href="#">Model Courses schools</a></li>
                            <li><a href="#">Female blogs</a></li>
                            <li><a href="#">Makeup courses</a></li>
                            <li><a href="#">Fashion blogs</a></li>
                        </ol>
                    </div>
                    <div className="footer-banner">
                        <div className="vertical-item content-absolute ds">
                            <div className="item-media">
                                <img src="images/models_square/01.jpg" alt="Model" />
                            </div>
                            <div className="item-content">
                                <span className="main_bg_color">New</span>
                                <h2>Model<br /> Courses</h2>
                            </div>
                            <div className="media-links">
                                <a href="#" className="abs-link" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
