import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import About from '../pages/About'
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import Home from '../pages/Home';

class NavBar extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about" data-testid="about-link">About</Link>
        <Link to="/projects" data-testid="projects-link">My Projects</Link>
        <Link to="/contact" data-testid="contact-link">Contact</Link>
        <Switch>
          <Route path="/about" component={ About } />
          <Route path="/contact" component={ Contact } />
          <Route path="/projects" component={ Projects } />
          <Route exact path="/" component={ Home } />
        </Switch>
      </nav>
    );
  }
}

export default NavBar;
