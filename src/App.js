import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

// images

// css
import "./static/css/styles.css";

class App extends Component {
  state = {};

 
  render() {
    return (
      <React.Fragment>
        <Header ref={c => (this.header = c)} />
        <Skills />
        <Projects ref={c => (this.projects = c)} />
        <Contact ref={c => (this.contact = c)} />
        <Footer />
        <Router>
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
