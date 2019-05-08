import React, {Component} from "react";

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

class Skills extends Component {
  state = {  }
componentDidMount(){
  console.log(this.skills)
}
  render() { 
    return (  
      <section className="skills" id='skills'  ref={c => ({...this.skills} = c)}>
      {/* <h2>SKILLS</h2> */}

      {/* mobile only */}
      <div className=" container">
        <div className="aboutMe">
          <h3>ABOUT ME</h3>
          <p>
            I am a full stack Javascript developer based in the St. Louis
            metropolitan area. I love to learn new things and I am always
            challenging myself.{" "}
            <span>
              Currently I am proficient in the following tehcnologies:
            </span>{" "}
          </p>
        </div>
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
    );
  }
}
 
export default Skills;

