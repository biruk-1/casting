import React from 'react';
import { useParams } from 'react-router-dom';
import ModelPage from './ModelPage';
import '../styles/ModelsDetail.css';

export default function ModelsDetail() {
  const { id } = useParams();

  // Breadcrumb data
  const breadcrumbs = [
    { name: 'Home', url: './' },
    { name: 'Models', url: '#' },
    { name: 'Model single', isActive: true },
  ];

  // Cart items data
  const cartItems = [
    {
      name: 'Stet clitad gubergren',
      price: 90,
      quantity: 1,
      imageUrl: 'images/models_square/01.jpg',
      productUrl: 'product-right.html',
    },
    {
      name: 'Takimata san bctus',
      price: 90,
      quantity: 1,
      imageUrl: 'images/models_square/02.jpg',
      productUrl: 'product-right.html',
    },
  ];

  // Social links data
  const socialLinks = [
    { icon: 'soc-facebook', title: 'Facebook', url: '#' },
    { icon: 'soc-twitter', title: 'Twitter', url: '#' },
    { icon: 'soc-google', title: 'Google', url: '#' },
    { icon: 'soc-linkedin', title: 'LinkedIn', url: '#' },
    { icon: 'soc-pinterest', title: 'Pinterest', url: '#' },
  ];

  return (
    <>
      <div className="modal" tabIndex={-1} role="dialog" aria-labelledby="search_modal" id="search_modal">
        <div className="widget widget_search">
          <form method="get" className="searchform form-inline" action="/">
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

      {/* Wrappers for visual page editor and boxed version of template */}
      <div id="canvas">
        <div id="box_wrapper">
          {/* Breadcrumbs section */}
          <section className="page_breadcrumbs changeable ls gradient section_padding_20">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-6 text-center">
                  <ol className="breadcrumb">
                    {breadcrumbs.map((breadcrumb, index) => (
                      <li key={index} className={breadcrumb.isActive ? 'active' : ''}>
                        <a href={breadcrumb.url}>{breadcrumb.name}</a>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </section>

          {/* Model Page Component */}
          <ModelPage />

          {/* Cart Dropdown */}
          <div className="dropdown cart-dropdown">
            <div className="total-quantity text-center">
              0 items - <span className="total-amount">$0.00</span>
            </div>
            <a className="topline-button" id="cart" href="./">
              <i className="rt-icon2-basket" />
            </a>
            <div className="dropdown-menu ds" aria-labelledby="cart">
              <span className="grey">Recently added item(s)</span>
              <div className="widget widget_shopping_cart">
                <div className="widget_shopping_cart_content">
                  <ul className="cart_list product_list_widget media-list darklinks">
                    {cartItems.map((item, index) => (
                      <li key={index} className="media">
                        <div className="media-left media-middle">
                          <a href={item.productUrl}>
                            <img src={item.imageUrl} alt={item.name} />
                          </a>
                        </div>
                        <div className="media-body media-middle">
                          <h4>
                            <a href={item.productUrl}>{item.name}</a>
                          </h4>
                          <span className="quantity">
                            {item.quantity} × <span className="amount">${item.price}</span>
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <p className="total">
                    <span className="grey">Cart Subtotal: <span className="amount">$180</span></span>
                  </p>
                  <p className="buttons">
                    <a href="cart-right.html" className="theme_button color1">View All</a>
                    <a href="checkout-right.html" className="theme_button inverse">Checkout</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <section className="ds ms section_padding_30 page_social">
            <div className="container">
              <div className="row topmargin_20 bottommargin_10">
                <div className="col-sm-12 text-center">
                  <div className="page_social_icons">
                    {socialLinks.map((link, index) => (
                      <a key={index} className={`social-icon color-bg-icon ${link.icon}`} href={link.url} title={link.title} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer Section */}
          <section className="ls page_copyright section_padding_20">
            <div className="container">
              <div className="row topmargin_5 bottommargin_5">
                <div className="col-sm-12 text-center">
                  <p className="darklinks">
                    © Agency 2016 | Created with <i className="rt-icon2-heart highlight" /> by{' '}
                    <a href="http://modernwebtemplates.com">MWTemplates</a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
