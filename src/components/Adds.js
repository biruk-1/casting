import React from 'react';
import '../styles/Adds.css';

export default function Adds() {
  return (
    <>
      <div className="preloader">
        <div className="preloader_image" />
      </div>

      {/* Search Modal */}
      <div className="modal" id="search_modal">
        <div className="widget widget_search">
          <form method="get" className="searchform" action="/">
            <div className="form-group">
              <input
                type="text"
                name="search"
                className="form-control"
                placeholder="Type search keyword here..."
                id="modal-search-input"
              />
            </div>
            <button type="submit" className="theme_button input_button">
              Search
            </button>
          </form>
        </div>
      </div>

      <div id="canvas">
        <div id="box_wrapper">
          {/* Template sections */}
          <section className="page_topline">
            <div className="container-fluid with_border">
              <div className="topline_section">
                <div className="topline_left">
                  <a href="#">
                    <em>[email protected]</em>
                  </a>
                </div>
                <div className="topline_center">
                  <div className="page_social_icons">
                    <a href="#" className="social-icon facebook" title="Facebook" />
                    <a href="#" className="social-icon twitter" title="Twitter" />
                    <a href="#" className="social-icon google" title="Google" />
                    <a href="#" className="social-icon linkedin" title="LinkedIn" />
                    <a href="#" className="social-icon pinterest" title="Pinterest" />
                  </div>
                </div>
                <div className="topline_right">
                  <div className="cart_dropdown">
                    <div className="total-quantity">0 items -<span className="total-amount">$0.00</span></div>
                    <a href="#" className="topline-button" id="cart">
                      <i className="icon basket" />
                    </a>
                    <div className="dropdown-menu" id="cart-dropdown">
                      <span className="grey">Recently added item(s)</span>
                      <ul className="cart_list">
                        <li>
                          <div className="cart_item">
                            <a href="product-right.html">
                              <img src="images/models_square/01.jpg" alt="" />
                              <h4>Stet clitad gubergren</h4>
                              <span className="quantity">1 ×<span className="amount">$90</span></span>
                            </a>
                            <a href="#" className="remove">
                              <i className="icon trash" />
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="cart_item">
                            <a href="product-right.html">
                              <img src="images/models_square/02.jpg" alt="" />
                              <h4>Takimata san bctus</h4>
                              <span className="quantity">1 ×<span className="amount">$90</span></span>
                            </a>
                            <a href="#" className="remove">
                              <i className="icon trash" />
                            </a>
                          </div>
                        </li>
                      </ul>
                      <p className="total">Cart Subtotal: <span className="amount">$180</span></p>
                      <p className="buttons">
                        <a href="cart-right.html" className="theme_button">View All</a>
                        <a href="checkout-right.html" className="theme_button inverse">Checkout</a>
                      </p>
                    </div>
                  </div>

                  <div className="login_dropdown">
                    <a href="#" className="topline-button" id="login">
                      <i className="icon user" />
                    </a>
                    <div className="dropdown-menu" id="login-dropdown">
                      <form role="form" action="/">
                        <div className="form-group">
                          <label htmlFor="login_email" className="sr-only">Email address</label>
                          <input type="email" className="form-control" id="login_email" placeholder="Email address" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="login_password" className="sr-only">Password</label>
                          <input type="password" className="form-control" id="login_password" placeholder="Password" />
                        </div>
                        <button type="button" className="theme_button">Log in</button>
                        <div className="checkbox-inline">
                          <input type="checkbox" id="remember" />
                          <label htmlFor="remember"> Remember Me</label>
                        </div>
                      </form>
                      <div className="topmargin_25">
                        <a href="register.html" className="text-uppercase">Forgot Your Password?</a>
                      </div>
                    </div>
                  </div>

                  <div className="search_button">
                    <a href="#" className="search_modal_button">
                      <i className="icon search" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
