import React, { Component } from "react";

import gitHub from "./static/github-original.svg";
import linkedIn from "./static/linkedin-plain.svg";
class Contact extends Component {
  state = {};
  render() {
    return (
      <section className="contact" id='contact'>
        <div className="container">
          <p className="thankYou">
            <span>Thanks for viewing my portfolio.</span> If you would like to
            get in contact with me about job opportunities or just general
            feedback on my code, my info is below!
          </p>
          <p className="email">kevinsherrell@ksherrell.com</p>
          <a href='https://github.com/kevinsherrell' target='blank'>
            <button className="contactGitHub">
              <img src={gitHub} alt="" />
            </button>
          </a>
          <a href='https://www.linkedin.com/in/kevinsherrell1986/' target='blank'>
            <button className="contactLinkedIn">
              <img src={linkedIn} alt="" />
            </button>
          </a>
        </div>
      </section>
    );
  }
}

export default Contact;
