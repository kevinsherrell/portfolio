import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { browserHistory } from "react-router";
import Scrollchor from "react-scrollchor";

import {Link, animateScroll as scroll} from 'react-scroll'

import Hero from "./Hero";

import logo2 from "./ksherrelldotcomlogo2.png";
import hamburger from "./hamburger.png";

class Header extends Component {
  state = {
    menuClicked: false
  };
 handleClick=()=>{
   this.setState({
     menuClicked: !this.state.menuClicked
   })
   console.log('working')
   document.getElementById('menu')
   console.log(document.getElementById('menu').offsetTop)
 }
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
        id="home"
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
                  <Link 
                  activeClass='activeHome'
                  to='home'
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}>HOME</Link>
                </li>
                <li>
                  <Link 
                  activeClass='active'
                  to='skills'
                  spy={true}
                  smooth={true}
                  offset={-110}
                  duration={500}
                  >ABOUT/SKILLS</Link>
                </li>
                <li>
                  <Link
                  activeClass='active'
                  to='projects'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                   >PROJECTS</Link>
                </li>
                <li>
                  <Link
                  activeClass='active'
                  to='contact'
                  spy={true}
                  smooth={true}
                  offset={-42}
                  duration={500}
                  >CONTACT</Link>
                </li>
              </ul>
              {/* <ul className="nonMobileNav">
                <li>
                  <Scrollchor to="#home" >HOME</Scrollchor>
                </li>
                <li>
                  <Scrollchor to="#skills">ABOUT/SKILLS</Scrollchor>
                </li>
                <li>
                  <Scrollchor to="#projects">PROJECTS</Scrollchor>
                </li>
                <li>
                  <Scrollchor to="#contact">CONTACT</Scrollchor>
                </li>
              </ul> */}
              {/* mobile */}

              <button
                className="hamburgerButton"
                ref={button => (this.hamburgerButton = button)}
              onClick={this.handleClick}>
                <img className="hamburger" src={hamburger} alt="" />
              </button>
            </nav>
          </div>
        </header>

        <Hero />
        {/* opens only when hamburger is clicked */}
        <div className={this.state.menuClicked === false ? "mobileMenu" : 'mobileMenu menuClicked' } id='menu'>
        <ul>
                <li>
                  <Link 
                  activeClass='activeHome'
                  to='home'
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}>HOME</Link>
                </li>
                <li>
                  <Link 
                  activeClass='active'
                  to='skills'
                  spy={true}
                  smooth={true}
                  offset={-110}
                  duration={500}
                  >ABOUT/SKILLS</Link>
                </li>
                <li>
                  <Link
                  activeClass='active'
                  to='projects'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                   >PROJECTS</Link>
                </li>
                <li>
                  <Link
                  activeClass='active'
                  to='contact'
                  spy={true}
                  smooth={true}
                  offset={-42}
                  duration={500}
                  >CONTACT</Link>
                </li>
              </ul>
        </div>
        <div className="mobileMenuOverlay"></div>
      </div>
    );
  }
}

export default Header;
