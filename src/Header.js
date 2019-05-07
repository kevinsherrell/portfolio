import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Scrollchor from 'react-scrollchor'
import Hero from "./Hero";

import logo2 from "./ksherrelldotcomlogo2.png";
import hamburger from "./hamburger.png";

class Header extends Component {
  state = {
    header: {}
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = e => {
    console.log(window.scrollY);
    if (window.scrollY > 50) {
      this.pageHeader.classList.add("scrolled");
      this.hamburgerButton.classList.remove("hamburgerButton");
      this.hamburgerButton.classList.add("scrolledButton");
      console.log(this.pageHeader.attributes);
    } else if (window.scrollY < 50) {
      this.pageHeader.classList.remove("scrolled");
      this.hamburgerButton.classList.remove("scrolledButton");
      this.hamburgerButton.classList.add("hamburgerButton");
    }
  };

 
  render() {
    const backgroundImage = require("./background.jpg");
    const backgroundStyles = {
      backgroundImage: `url("${backgroundImage}")`,
      backgroundAttachment: "scroll",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    };
    return (
      <div
        style={backgroundStyles}
        className="backgroundContainer"
        ref={c => (this.header = c)}
      >
        <header
          className="pageHeader"
          ref={header => (this.pageHeader = header)}
          onClick={this.onClickHeader}
        >
          <div className="container flex">
            <div className="headerLogoContainer">
              <img className="logo" src={logo2} alt="" />
            </div>
            <div className="headerIntro">
              <p>Kevin Sherrell</p>
              <p>Full Stack Javascript Developer</p>
            </div>
            <nav>
              {/* hidden for mobile */}
              <ul className="nonMobileNav">
                <li>
                  <Scrollchor to="" onClick={this.props.onClickScroll}>
                    HOME
                  </Scrollchor>
                </li>
                <li>
                  <Scrollchor to="#skills" onClick={this.props.onClickScroll}>
                    ABOUT/SKILLS
                  </Scrollchor>
                </li>
                <li>
                  <Scrollchor to="#projects">PROJECTS</Scrollchor>
                </li>
                <li>
                  <Scrollchor to="#contact">CONTACT</Scrollchor>
                </li>
              </ul>
              {/* mobile */}

              <button
                className="hamburgerButton"
                ref={button => (this.hamburgerButton = button)}
              >
                <img className="hamburger" src={hamburger} alt="" />
              </button>
            </nav>
          </div>
        </header>

        <Hero />
      </div>
    );
  }
}

export default Header;
