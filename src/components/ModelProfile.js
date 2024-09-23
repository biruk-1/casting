import React from 'react';

const ModelProfile = ({ imageSrc, name, socialLinks, parameters, address, phone, email }) => (
  <div className="col-md-5 col-md-push-7">
    <div className="vertical-item with_background models_square">
      <div className="item-media">
        <img src={imageSrc} alt={name} />
      </div>
      <div className="item-content with_padding">
        <h2 className="big topmargin_0 bottommargin_25">{name}</h2>
        <div className="page_social_icons">
          {socialLinks.map((link, index) => (
            <a key={index} className={`social-icon color-bg-icon ${link.icon}`} href={link.url} title={link.title} />
          ))}
        </div>
      </div>
      <div className="model-parameters grey gradient_bg_goriz before_cover">
        <div className="bg_overlay" />
        {parameters.map((param, index) => (
          <div key={index}>
            <span className="bold">{param.label}</span>
            <br />
            <span>{param.value}</span>
          </div>
        ))}
      </div>
      <div className="item-content with_padding">
        <ul className="media-list">
          <li className="media">
            <div className="media-left">
              <i className="rt-icon2-location2 highlight" />
            </div>
            <div className="media-body">
              <span className="bold fontsize_12 text-uppercase grey">Address:</span>
              <br />
              <span>{address}</span>
            </div>
          </li>
          <li className="media">
            <div className="media-left">
              <i className="rt-icon2-phone5 highlight" />
            </div>
            <div className="media-body">
              <span className="bold fontsize_12 text-uppercase grey">Phone:</span>
              <br />
              <span>{phone}</span>
            </div>
          </li>
          <li className="media">
            <div className="media-left">
              <i className="rt-icon2-mail highlight" />
            </div>
            <div className="media-body">
              <span className="bold fontsize_12 text-uppercase grey">Email:</span>
              <br />
              <a href={`mailto:${email}`}>{email}</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default ModelProfile;
