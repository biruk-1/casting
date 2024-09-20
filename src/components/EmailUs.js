import React from 'react'

export default function EmailUs() {
  return (
    <section
    className="ds parallax calltoaction section_padding_100"
    style={{ backgroundImage: 'url("./images/parallax/call_to_action.jpg")' }}
  >
    <div className="container">
      <div className="row topmargin_60 bottommargin_60">
        <div className="col-sm-12 text-center">
          <h2 className="extra-big topmargin_0 bottommargin_30">
            Do You want to be a<span className="highlight">Model?</span>
          </h2>
          <div className="row">
            <div className="col-md-offset-2 col-md-8 text-center">
              <p className="fontsize_20">
                If you are 5ft 8in and above women and think you have what it
                takes to be a model send us headshot and full length shot along
                with your age, contact details, height, bust, waist and hip
                measurements.
              </p>
            </div>
          </div>
          <div className="widget widget_mailchimp topmargin_20">
            <form className="signup form-inline" action="/" method="get">
              <div className="form-group">
                <input
                  name="email"
                  type="email"
                  className="mailchimp_email form-control"
                  placeholder="Email address"
                />
              </div>
              <button type="submit" className="theme_button input_button">
                Send
              </button>
              <div className="response" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}
