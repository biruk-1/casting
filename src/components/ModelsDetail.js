import React from 'react'
import { useParams } from 'react-router-dom';

export default function ModelsDetail() {
  const { id } = useParams();
  return (
    <>
    <div className="preloader">
    <div className="preloader_image" />
  </div>
  {/* search modal */}
  <div
    className="modal"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="search_modal"
    id="search_modal"
  >
    <div className="widget widget_search">
      <form method="get" className="searchform form-inline" action="/">
        <div className="form-group">
          <input
            type="text"
            defaultValue=""
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
  {/* wrappers for visual page editor and boxed version of template */}
  <div id="canvas">
    <div id="box_wrapper">
      {/* template sections */}
    
      <section className="page_breadcrumbs changeable ls gradient gorizontal_padding section_padding_20 columns_padding_5 table_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3 text-center text-sm-left darklinks">
              <a href="#">
                <em>
                  <span
                    className="__cf_email__"
                    data-cfemail="b4d5d3d1dad7cdf4c7c1c4c4dbc6c09ad7dbd9"
                  >
                    [email&nbsp;protected]
                  </span>
                </em>
              </a>
            </div>
            <div className="col-sm-6 text-center">
              <ol className="breadcrumb">
                <li>
                  <a href="./">Home</a>
                </li>
                <li>
                  <a href="#">Models</a>
                </li>
                <li className="active">
                  <span>Model single</span>
                </li>
              </ol>
            </div>
            <div className="col-sm-3 text-center text-sm-right">
              <ul className="inline-dropdown inline-block">
                <li className="dropdown cart-dropdown">
                  <div className="total-quantity text-center">
                    0 items -<span className="total-amount">$0.00</span>
                  </div>
                  <a
                    className="topline-button"
                    id="cart"
                    data-target="#"
                    href="./"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    role="button"
                    aria-expanded="false"
                  >
                    <i className="rt-icon2-basket" />
                  </a>
                  <div className="dropdown-menu ds" aria-labelledby="cart">
                    <span className="grey">Recently added item(s)</span>
                    <div className="widget widget_shopping_cart">
                      <div className="widget_shopping_cart_content">
                        <ul className="cart_list product_list_widget media-list darklinks">
                          <li className="media">
                            <div className="media-left media-middle">
                              <a href="product-right.html">
                                <img src="images/models_square/01.jpg" alt="" />
                              </a>
                            </div>
                            <div className="media-body media-middle">
                              <h4>
                                <a href="product-right.html">
                                  Stet clitad gubergren
                                </a>
                              </h4>
                              <span className="quantity">
                                1 ×<span className="amount">$90</span>
                              </span>
                            </div>
                            <div className="media-body media-middle">
                              <a
                                href="#"
                                className="remove"
                                title="Remove this item"
                              >
                                <i className="rt-icon2-trash highlight" />
                              </a>
                            </div>
                          </li>
                          <li className="media">
                            <div className="media-left media-middle">
                              <a href="product-right.html">
                                <img src="images/models_square/02.jpg" alt="" />
                              </a>
                            </div>
                            <div className="media-body media-middle">
                              <h4>
                                <a href="product-right.html">
                                  Takimata san bctus
                                </a>
                              </h4>
                              <span className="quantity">
                                1 ×<span className="amount">$90</span>
                              </span>
                            </div>
                            <div className="media-body media-middle">
                              <a
                                href="#"
                                className="remove"
                                title="Remove this item"
                              >
                                <i className="rt-icon2-trash highlight" />
                              </a>
                            </div>
                          </li>
                        </ul>
                        {/* end product list */}
                        <p className="total">
                          <span className="grey">
                            Cart Subtotal:
                            <span className="amount">$180</span>
                          </span>
                        </p>
                        <p className="buttons">
                          <a
                            href="cart-right.html"
                            className="theme_button color1"
                          >
                            View All
                          </a>
                          <a
                            href="checkout-right.html"
                            className="theme_button inverse"
                          >
                            Checkout
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="dropdown login-dropdown">
                  <a
                    className="topline-button"
                    id="login"
                    data-target="#"
                    href="./"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    role="button"
                    aria-expanded="false"
                  >
                    <i className="rt-icon2-user" />
                  </a>
                  <div className="dropdown-menu ds" aria-labelledby="login">
                    <form role="form" action="/">
                      <div className="form-group">
                        <label htmlFor="login_email" className="sr-only">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="login_email"
                          placeholder="Email address"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="login_password" className="sr-only">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="login_password"
                          placeholder="Password"
                        />
                      </div>
                      <button
                        type="button"
                        className="theme_button color1 bottommargin_0"
                      >
                        Log in
                      </button>
                      <div className="checkbox-inline">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember" className="bottommargin_0">
                          {" "}
                          Remember Me
                        </label>
                      </div>
                    </form>
                    <div className="topmargin_25">
                      <a href="register.html" className="text-uppercase">
                        Forgot Your Password?
                      </a>
                    </div>
                  </div>
                </li>
                <li className="dropdown">
                  <a href="#" className="search_modal_button topline-button">
                    <i className="rt-icon2-search2" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="ds model-page section_padding_70 section_padding_bottom_60 columns_padding_25">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-md-push-7">
              <div className="vertical-item with_background models_square">
                <div className="item-media">
                  <img src="images/models_square/17.jpg" alt="" />
                </div>
                <div className="item-content with_padding">
                  <h2 className="big topmargin_0 bottommargin_25">
                    Whitney Seether
                  </h2>
                  <div className="page_social_icons">
                    <a
                      className="social-icon color-bg-icon soc-facebook"
                      href="#"
                      title="Facebook"
                    />
                    <a
                      className="social-icon color-bg-icon soc-twitter"
                      href="#"
                      title="Twitter"
                    />
                    <a
                      className="social-icon color-bg-icon soc-google"
                      href="#"
                      title="Google"
                    />
                    <a
                      className="social-icon color-bg-icon soc-linkedin"
                      href="#"
                      title="LinkedIn"
                    />
                    <a
                      className="social-icon color-bg-icon soc-pinterest"
                      href="#"
                      title="Pinterest"
                    />
                  </div>
                </div>
                <div className="model-parameters grey gradient_bg_goriz before_cover">
                  <div className="bg_overlay" />
                  <div>
                    <span className="bold">Height</span>
                    <br />
                    <span>185</span>
                  </div>
                  <div>
                    <span className="bold">Bust</span>
                    <br />
                    <span>79</span>
                  </div>
                  <div>
                    <span className="bold">Waist</span>
                    <br />
                    <span>59</span>
                  </div>
                  <div>
                    <span className="bold">Hips</span>
                    <br />
                    <span>87</span>
                  </div>
                  <div>
                    <span className="bold">Shoe</span>
                    <br />
                    <span>39</span>
                  </div>
                  <div>
                    <span className="bold">Eyes</span>
                    <br />
                    <span>blue</span>
                  </div>
                </div>
                <div className="item-content with_padding">
                  <ul className="media-list">
                    <li className="media">
                      <div className="media-left">
                        <i className="rt-icon2-location2 highlight" />
                      </div>
                      <div className="media-body">
                        <span className="bold fontsize_12 text-uppercase grey">
                          Address:
                        </span>
                        <br />
                        <span>
                          Jackson’s Street 567, San Diego, California, United
                          States
                        </span>
                      </div>
                    </li>
                    <li className="media">
                      <div className="media-left">
                        <i className="rt-icon2-phone5 highlight" />
                      </div>
                      <div className="media-body">
                        <span className="bold fontsize_12 text-uppercase grey">
                          Phone:
                        </span>
                        <br />
                        <span>8 (800) 456-2698</span>
                      </div>
                    </li>
                    <li className="media">
                      <div className="media-left">
                        <i className="rt-icon2-mail highlight" />
                      </div>
                      <div className="media-body">
                        <span className="bold fontsize_12 text-uppercase grey">
                          Email:
                        </span>
                        <br />
                        <a href="#">
                          <em>
                            <span
                              className="__cf_email__"
                              data-cfemail="8eefe9ebe0edf7cefdfbfefee1fcfaa0ede1e3"
                            >
                              [email&nbsp;protected]
                            </span>
                          </em>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-md-pull-5">
              <h2 className="topmargin_0 bottommargin_30">About Model</h2>
              <p>
                At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr, sed diam nonumy eirmod ipsum dolor sit amet.
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum Stet clita kasd gubergren, no sea takimata
                sanctus est Lorem ipsum dolor sit amet.
              </p>
              <p>
                At accusam aliquyam diam diam dolore dolores duo eirmod eos
                erat, et nonumy sed tempor et et invidunt justo labore Stet
                clita ea et gubergren, kasd magna no rebum. sanctus sea sed
                takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem
                ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat.
              </p>
              <div className="filters isotope_filters topmargin_50">
                <a href="#" data-filter="*" className="selected">
                  All
                </a>
                <a href="#" data-filter=".tests">
                  Tests
                </a>
                <a href="#" data-filter=".editorials">
                  Editorials
                </a>
                <a href="#" data-filter=".snaps">
                  Snaps
                </a>
              </div>
              <div className="columns_padding_5">
                <div
                  className="isotope_container isotope row masonry-layout"
                  data-filters=".isotope_filters"
                >
                  <div className="isotope-item bottommargin_10 col-md-3 col-sm-4 col-xs-6 tests">
                    <div className="vertical-item gallery-item content-absolute text-center cs">
                      <div className="item-media">
                        <img src="images/models_square/01.jpg" alt="" />
                        <div className="media-links">
                          <a
                            className="prettyPhoto abs-link"
                            title=""
                            data-gal="prettyPhoto[gal]"
                            href="images/models_square/01.jpg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="isotope-item bottommargin_10 col-md-3 col-sm-4 col-xs-6 editorials">
                    <div className="vertical-item gallery-item content-absolute text-center cs">
                      <div className="item-media">
                        <img src="images/models_square/02.jpg" alt="" />
                        <div className="media-links">
                          <a
                            className="prettyPhoto abs-link"
                            title=""
                            data-gal="prettyPhoto[gal]"
                            href="images/models_square/02.jpg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="isotope-item bottommargin_10 col-md-3 col-sm-4 col-xs-6 snaps">
                    <div className="vertical-item gallery-item content-absolute text-center cs">
                      <div className="item-media">
                        <img src="images/models_square/03.jpg" alt="" />
                        <div className="media-links">
                          <a
                            className="prettyPhoto abs-link"
                            title=""
                            data-gal="prettyPhoto[gal]"
                            href="images/models_square/03.jpg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="isotope-item bottommargin_10 col-md-3 col-sm-4 col-xs-6 tests">
                    <div className="vertical-item gallery-item content-absolute text-center cs">
                      <div className="item-media">
                        <img src="images/models_square/04.jpg" alt="" />
                        <div className="media-links">
                          <a
                            className="prettyPhoto abs-link"
                            title=""
                            data-gal="prettyPhoto[gal]"
                            href="images/models_square/04.jpg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="isotope-item bottommargin_10 col-md-3 col-sm-4 col-xs-6 editorials">
                    <div className="vertical-item gallery-item content-absolute text-center cs">
                      <div className="item-media">
                        <img src="images/models_square/05.jpg" alt="" />
                        <div className="media-links">
                          <a
                            className="prettyPhoto abs-link"
                            title=""
                            data-gal="prettyPhoto[gal]"
                            href="images/models_square/05.jpg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="isotope-item bottommargin_10 col-md-3 col-sm-4 col-xs-6 snaps">
                    <div className="vertical-item gallery-item content-absolute text-center cs">
                      <div className="item-media">
                        <img src="images/models_square/06.jpg" alt="" />
                        <div className="media-links">
                          <a
                            className="prettyPhoto abs-link"
                            title=""
                            data-gal="prettyPhoto[gal]"
                            href="images/models_square/06.jpg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="isotope-item bottommargin_10 col-md-3 col-sm-4 col-xs-6 tests">
                    <div className="vertical-item gallery-item content-absolute text-center cs">
                      <div className="item-media">
                        <img src="images/models_square/07.jpg" alt="" />
                        <div className="media-links">
                          <a
                            className="prettyPhoto abs-link"
                            title=""
                            data-gal="prettyPhoto[gal]"
                            href="images/models_square/07.jpg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="isotope-item bottommargin_10 col-md-3 col-sm-4 col-xs-6 editorials">
                    <div className="vertical-item gallery-item content-absolute text-center cs">
                      <div className="item-media">
                        <img src="images/models_square/08.jpg" alt="" />
                        <div className="media-links">
                          <a
                            className="prettyPhoto abs-link"
                            title=""
                            data-gal="prettyPhoto[gal]"
                            href="images/models_square/08.jpg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="isotope-item bottommargin_10 col-md-3 col-sm-4 col-xs-6 snaps">
                    <div className="vertical-item gallery-item content-absolute text-center cs">
                      <div className="item-media">
                        <img src="images/models_square/09.jpg" alt="" />
                        <div className="media-links">
                          <a
                            className="prettyPhoto abs-link"
                            title=""
                            data-gal="prettyPhoto[gal]"
                            href="images/models_square/09.jpg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="isotope-item bottommargin_10 col-md-3 col-sm-4 col-xs-6 tests">
                    <div className="vertical-item gallery-item content-absolute text-center cs">
                      <div className="item-media">
                        <img src="images/models_square/10.jpg" alt="" />
                        <div className="media-links">
                          <a
                            className="prettyPhoto abs-link"
                            title=""
                            data-gal="prettyPhoto[gal]"
                            href="images/models_square/10.jpg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="isotope-item bottommargin_10 col-md-3 col-sm-4 col-xs-6 editorials">
                    <div className="vertical-item gallery-item content-absolute text-center cs">
                      <div className="item-media">
                        <img src="images/models_square/11.jpg" alt="" />
                        <div className="media-links">
                          <a
                            className="prettyPhoto abs-link"
                            title=""
                            data-gal="prettyPhoto[gal]"
                            href="images/models_square/11.jpg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="isotope-item bottommargin_10 col-md-3 col-sm-4 col-xs-6 snaps">
                    <div className="vertical-item gallery-item content-absolute text-center cs">
                      <div className="item-media">
                        <img src="images/models_square/12.jpg" alt="" />
                        <div className="media-links">
                          <a
                            className="prettyPhoto abs-link"
                            title=""
                            data-gal="prettyPhoto[gal]"
                            href="images/models_square/12.jpg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="isotope-item bottommargin_10 col-md-3 col-sm-4 col-xs-6 tests">
                    <div className="vertical-item gallery-item content-absolute text-center cs">
                      <div className="item-media">
                        <img src="images/models_square/13.jpg" alt="" />
                        <div className="media-links">
                          <a
                            className="prettyPhoto abs-link"
                            title=""
                            data-gal="prettyPhoto[gal]"
                            href="images/models_square/13.jpg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="isotope-item bottommargin_10 col-md-3 col-sm-4 col-xs-6 editorials">
                    <div className="vertical-item gallery-item content-absolute text-center cs">
                      <div className="item-media">
                        <img src="images/models_square/14.jpg" alt="" />
                        <div className="media-links">
                          <a
                            className="prettyPhoto abs-link"
                            title=""
                            data-gal="prettyPhoto[gal]"
                            href="images/models_square/14.jpg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="isotope-item bottommargin_10 col-md-3 col-sm-4 col-xs-6 snaps">
                    <div className="vertical-item gallery-item content-absolute text-center cs">
                      <div className="item-media">
                        <img src="images/models_square/15.jpg" alt="" />
                        <div className="media-links">
                          <a
                            className="prettyPhoto abs-link"
                            title=""
                            data-gal="prettyPhoto[gal]"
                            href="images/models_square/15.jpg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* eof .isotope_container.row */}
              </div>
              <h2 className="topmargin_40 bottommargin_30">Contact Model</h2>
              <form className="model-contact-form" method="post" action="/">
                <div className="form-group">
                  <label htmlFor="model-name" className="sr-only">
                    Full Name
                    <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    aria-required="true"
                    size={30}
                    defaultValue=""
                    name="model-name"
                    id="model-name"
                    className="form-control with-icon"
                    placeholder=""
                  />
                  <i className="rt-icon2-user" />
                </div>
                <div className="form-group">
                  <label htmlFor="model-email" className="sr-only">
                    Email address
                    <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    aria-required="true"
                    size={30}
                    defaultValue=""
                    name="model-email"
                    id="model-email"
                    className="form-control with-icon"
                    placeholder=""
                  />
                  <i className="rt-icon2-mail" />
                </div>
                <div className="form-group">
                  <label htmlFor="model-phone" className="sr-only">
                    Phone number
                    <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    aria-required="true"
                    size={30}
                    defaultValue=""
                    name="model-phone"
                    id="model-phone"
                    className="form-control with-icon"
                    placeholder=""
                  />
                  <i className="rt-icon2-phone5" />
                </div>
                <div className="form-group">
                  <label htmlFor="model-message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    aria-required="true"
                    rows={6}
                    cols={45}
                    name="model-message"
                    id="model-message"
                    className="form-control with-icon"
                    placeholder=""
                    defaultValue={""}
                  />
                  <i className="rt-icon2-pen" />
                </div>
                <button
                  type="submit"
                  id="model_contact_form_submit"
                  name="model_contact_submit"
                  className="theme_button color1 bottommargin_0"
                >
                  Send
                </button>
                <button
                  type="reset"
                  id="model_contact_form_clear"
                  name="model_contact_clear"
                  className="theme_button inverse bottommargin_0"
                >
                  Clear
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="ds ms section_padding_30 page_social">
        <div className="container">
          <div className="row topmargin_20 bottommargin_10">
            <div className="col-sm-12 text-center">
              <div className="page_social_icons">
                <a
                  className="social-icon color-bg-icon soc-facebook"
                  href="#"
                  title="Facebook"
                />
                <a
                  className="social-icon color-bg-icon soc-twitter"
                  href="#"
                  title="Twitter"
                />
                <a
                  className="social-icon color-bg-icon soc-google"
                  href="#"
                  title="Google"
                />
                <a
                  className="social-icon color-bg-icon soc-linkedin"
                  href="#"
                  title="LinkedIn"
                />
                <a
                  className="social-icon color-bg-icon soc-pinterest"
                  href="#"
                  title="Pinterest"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ls page_copyright section_padding_20">
        <div className="container">
          <div className="row topmargin_5 bottommargin_5">
            <div className="col-sm-12 text-center">
              <p className="darklinks">
                © Agency 2016 | Created with
                <i className="rt-icon2-heart highlight" /> by
                <a href="http://modernwebtemplates.com">MWTemplates</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    {/* eof #box_wrapper */}
  </div>
  {/* eof #canvas */}
</>

  )
}
