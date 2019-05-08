import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Hero = () => {
  return (
    <section style={{ backgroundAttachment: "fixed" }} className="hero flex">
      <div className="container">
        <div className="heroContainer">
          <h1 className="heroName">Kevin Sherrell</h1>
          <h2 className="heroSubTitle">Full Stack Javascript Developer</h2>

          <div className="heroButtons">
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {" "}
              <button>Projects</button>
            </Link>

            <button><span><i class="fas fa-download"></i></span> Resume</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
