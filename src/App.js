import React, { Component } from "react";

// images
import logo2 from "./ksherrelldotcomlogo2.png";
import hamburger from "./hamburger.png";
import html5 from "./html5-plain.svg";
import css3 from "./css3-plain.svg";
import bootstrap from "./bootstrap-plain.svg";
import mongo from "./mongodb-plain.svg";
import node from "./nodejs-plain.svg";
import react from "./react-original.svg";
import redux from "./redux-original.svg";
import express from "./express-original.svg";
import git from "./git-plain.svg";
import javascript from "./javascript-plain.svg";
import skillBackgrondImage from "./skillbackground.svg";
import notFacebookImage from "./notfacebook.PNG";
// css
import "./css/styles.css";

class App extends Component {
  state = {};
  onClickHeader = () => {
    console.log(this.pageHeader.attributes);
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
      <React.Fragment>
        <div style={backgroundStyles} className="backgroundContainer">
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
                  <li>SKILLS</li>
                  <li>PROJECTS</li>
                  <li>ABOUT/CONTACT</li>
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

          <section style={{ backgroundAttachment: "fixed" }} className="hero">
            <div className="container">
              <div className="heroContainer">
                <div className="heroHeader">
                  <img className="heroLogo" src={logo2} alt="" />
                </div>
                <h1 className="heroName">Kevin Sherrell</h1>
                <h2 className="heroSubTitle">
                  Full Stack Javascript Developer
                </h2>

                <div className="heroButtons">
                  <button>My Projects</button>
                  <button>My Resume</button>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="skills">
          {/* <h2>SKILLS</h2> */}

          {/* mobile only */}
          <h3>ABOUT ME</h3>
          <p className="aboutMe">
            I am a full stack Javascript developer based in the St. Louis
            metropolitan area. I love to learn new things and I am always
            challenging myself.{" "}
            <span>
              Currently I am proficient in the following tehcnologies:
            </span>{" "}
          </p>
          <div className="skillsGrid">
            <div className="html5">
              <div className="skillsContainer ">
                <img src={html5} alt="" />
                <p>HTML5</p>
              </div>
            </div>
            <div className="css3">
              <div className="skillsContainer">
                <img src={css3} alt="" />
                <p>CSS3</p>
              </div>
            </div>
            <div className="bootstrap">
              <div className="skillsContainer">
                <img src={bootstrap} alt="" />
                <p>BOOTSTRAP</p>
              </div>
            </div>
            <div className="javascript">
              <div className="skillsContainer">
                <img src={javascript} alt="" />
                <p>JAVASCRIPT</p>
              </div>
            </div>
            <div className="mongo">
              <div className="skillsContainer">
                <img src={mongo} alt="" />
                <p>MONGODB</p>
              </div>
            </div>

            <div className="express">
              <div className="skillsContainer">
                <img src={express} alt="" />
                <p>EXPRESS.JS</p>
              </div>
            </div>

            <div className="react">
              <div className="skillsContainer">
                <img src={react} alt="" />
                <p>REACT.JS</p>
              </div>
            </div>

            <div className="redux">
              <div className="skillsContainer">
                <img src={redux} alt="" />
                <p>REDUX</p>
              </div>
            </div>
            <div className="node">
              <div className="skillsContainer">
                <img src={node} alt="" />
                <p>NODE.JS</p>
              </div>
            </div>
            <div className="git">
              <div className="skillsContainer">
                <img src={git} alt="" />
                <p>GIT</p>
              </div>
            </div>
          </div>

          {/* non mobile only */}
          <div className="skillsListNonMobile ">
            <div className="html5">
              <p>HTML5</p>
            </div>
            <div className="css3">
              <p>CSS3</p>
            </div>
            <div className="react">
              <p>REACT.JS</p>
            </div>
            <div className="node">
              <p>NODE.JS</p>
            </div>
            <div className="express">
              <p>EXPRESS.JS</p>
            </div>
            <div className="javascript">
              <p>JAVASCRIPT</p>
            </div>
            <div className="bootstrap">
              <p>BOOTSTRAP</p>
            </div>
            <div className="redux">
              <p>REDUX</p>
            </div>
            <div className="mongodb">
              <p>MONGODB</p>
            </div>
            <div className="git">
              <p>GIT</p>
            </div>

            <div className="otherSkills">
              <h4>Other Notable Skills : </h4>
              <ul>
                <li>Building and accessing RESTful APIs</li>
                <li>Responsive, mobile first design</li>
                <li>Debugging</li>
                <li>Adobe Illustrator</li>
                <li>Adobe Photoshop</li>
                <li>Apple Logic Pro</li>
                <li>Avid Protools</li>
                <li>Salesforce CRM</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="projects">
          <div className="container">
            <div className="projectsHeader">
              <h2>PROJECTS</h2>
            </div>

            <div className="projectDescription">
              <h3>notFacebook</h3>
              <p>A full stack replica of facebook.</p>
              <p>
                React, Redux, MongoDb, Express, Node, Passport.js (jwt
                strategy), Sass
              </p>
              <div className="projectImage">
                <img src={notFacebookImage} alt="" />
              </div>
              <button className="projectLive">View Project</button>
              <button className="projectGithub">Github</button>
            </div>
            <div className="projectDescription">
              <h3>Project Title</h3>

              <p> project 2 description</p>
              <p>technologies</p>
              <div className="projectImage">
                <img src={notFacebookImage} alt="" />
              </div>
              <button className="projectLive">View Project</button>
              <button className="projectGithub">Github</button>
            </div>
            <div className="projectDescription">
              <h3>Project Title</h3>

              <p>project 3 description</p>
              <p>technologies</p>
              <div className="projectImage">
                <img src={notFacebookImage} alt="" />
              </div>
              <button className="projectLive">View Project</button>
              <button className="projectGithub">Github</button>
            </div>
            <div className="projectDescription">
              <h3>Project Title</h3>

              <p>project 4 description</p>
              <p>tehcnologies</p>
              <div className="projectImage">
                <img src={notFacebookImage} alt="" />
              </div>
              <button className="projectLive">View Project</button>
              <button className="projectGithub">Github</button>
            </div>
          </div>
        </section>

        <section className="contact">
          <div className="container">
            <p className="thankYou">
              <span>Thanks for viewing my portfolio.</span> If you would like to
              get in contact with me about job opportunities or just general
              feedback on my code, my info is below!
            </p>
            <p className="email">kevinsherrell@ksherrell.com</p>
            <button className="contactGitHub">GitHub</button>
            <button className="contactLinkedIn">LikedIn</button>
          </div>
        </section>
        <footer>
          <div className="container">
            <p>{`\u00a9 Kevin Sherrell`}</p>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
