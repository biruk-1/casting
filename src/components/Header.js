import React, { useEffect, useState } from 'react';
import '../styles/Header.css';

const Header = () => {
    const [isShrunk, setIsShrunk] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const addComponent = document.querySelector('.adds'); // Adjust this selector if needed
            const addComponentHeight = addComponent ? addComponent.offsetHeight : 0;

            // Shrink header after scrolling past the '.adds' component (or any height you define)
            if (window.scrollY > addComponentHeight) {
                setIsShrunk(true);
            } else {
                setIsShrunk(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`page_header ${isShrunk ? 'shrink' : ''}`}>
            <div className="container-fluid">
                <div className="col-md-3 col-sm-6 text-center">
                    <a href="./" className="logo logo_image">
                        <h1>
                            casting
                            <span className="muellerhoff">Agency</span>
                        </h1>
                    </a>
                </div>
                <div className="col-md-6 text-center">
                    <nav className="mainmenu_wrapper">
                        <ul className="mainmenu nav sf-menu">
                            <li className="active">
                                <a href="index.html">Home</a>
                                <ul>
                                    <li><a href="index.html">Beauty</a></li>
                                    <li><a href="index2.html">Models</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="about.html">Pages</a>
                                <ul>
                                    <li><a href="shortcodes_teasers.html">Shortcodes & Widgets</a></li>
                                    <li><a href="blog-right.html">Blog</a></li>
                                    <li><a href="gallery-regular.html">Gallery</a></li>
                                    <li><a href="header1.html">Headers</a></li>
                                    <li><a href="breadcrumbs1.html">Breadcrumbs</a></li>
                                    <li><a href="footer1.html">Footer</a></li>
                                    <li><a href="copyright1.html">Copyright</a></li>
                                    <li><a href="events-left.html">Events</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="models.html">Models</a>
                                <ul>
                                    <li><a href="models.html">Models</a></li>
                                    <li><a href="models2.html">Models 2</a></li>
                                    <li><a href="model.html">Model Single</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="appointment.html">Appointment</a>
                            </li>
                            <li>
                                <a href="faq.html">FAQ</a>
                                <ul>
                                    <li><a href="faq.html">FAQ</a></li>
                                    <li><a href="faq2.html">FAQ 2</a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>
                    <span className="toggle_menu">
                        <span />
                    </span>
                </div>
                <div className="col-md-3 col-sm-6 header-contacts text-center hidden-xs">
                    <div className="highlight inline-block fontsize_30 thin">
                        (800) 543 4625
                    </div>
                    <div className="fontsize_20 grey topmargin_-5">24/7 free calls</div>
                </div>
            </div>
        </header>
    );
};

export default Header;
