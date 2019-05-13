import React, {Component} from "react";
import {Link} from 'react-router-dom'
import notFacebookImage from "./notfacebook.PNG";
class Projects extends Component {
    state = {  }
    render() { 
        return ( 
            <section className="projects" id='projects'>
      <div className="projectsHeader">
        <h2>PROJECTS</h2>
      </div>

      <div className="projectDescription">
        <div className="container">
          <div className="projectInfo">
            <h3>notFacebook</h3>
            <p>A full stack replica of facebook.</p>
            <p className='technologies'>
              React, Redux, MongoDb, Express, Node, Passport.js (jwt strategy),
              Sass
            </p>
            <a href='https://not-facebook.herokuapp.com' target='blank'><button className="projectLive">View Project</button></a>
            <a href='https://github.com/kevinsherrell/notFacebook' target='blank'><button className="projectGithub">Github</button></a>
          </div>
          <div className="projectImage">
            <img src={notFacebookImage} alt="" />
          </div>
        </div>
      </div>
      
    </section>
         );
    }
}
 
export default Projects;
