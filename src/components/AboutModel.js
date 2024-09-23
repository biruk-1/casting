import React from 'react';

const AboutModel = ({ bio }) => (
  <div className="col-md-7 col-md-pull-5">
    <h2 className="topmargin_0 bottommargin_30">About Model</h2>
    {bio.map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ))}
  </div>
);

export default AboutModel;
