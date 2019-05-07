import React from "react";
const Hero = () => {
  return (
    <section style={{ backgroundAttachment: "fixed" }} className="hero flex">
      <div className="container">
        <div className="heroContainer">
          <h1 className="heroName">Kevin Sherrell</h1>
          <h2 className="heroSubTitle">Full Stack Javascript Developer</h2>

          <div className="heroButtons">
            <button>My Projects</button>
            <button>My Resume</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
