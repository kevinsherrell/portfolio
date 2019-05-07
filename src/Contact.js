import React, { Component } from "react";

import gitHub from "./github-original.svg";
import linkedIn from "./linkedin-plain.svg";
class Contact extends Component {
  state = {};
  render() {
    console.log(this.props.location)
    return (
      <section className="contact" id='contact'>
        <div className="container">
          <p className="thankYou">
            <span>Thanks for viewing my portfolio.</span> If you would like to
            get in contact with me about job opportunities or just general
            feedback on my code, my info is below!
          </p>
          <p className="email">kevinsherrell@ksherrell.com</p>
          <button className="contactGitHub">
            <img src={gitHub} alt="" />
          </button>
          <button className="contactLinkedIn">
            <img src={linkedIn} alt="" />
          </button>
        </div>
      </section>
    );
  }
}

export default Contact;
