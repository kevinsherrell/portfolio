import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

// images

// css
import "./css/styles.css";

class App extends Component {
  state = {};
  onClickScroll = () => {
     console.log(this.props.history.location.hash)
     .scrollIntoView()
  };
  render() {
    return (
      <React.Fragment>
        <Header ref={c => (this.header = c)} onClickScroll={this.onClickScroll}/>
        <Skills ref={c => (this.skills = c)} />
        <Projects ref={c => (this.projects = c)} />
        <Contact ref={c => (this.contact = c)} />
        <Footer />
        <Router>
            <Route path='/#skills' component={Skills}/>
            <Route path='/#contact' component={Contact}/>
            <Route path='/#projects' component={Projects}/>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
