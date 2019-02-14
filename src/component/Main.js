import React from 'react';
import LandingPage from './landing';
import { Switch, Route } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Project  from './Project';
import Resume from './Resume';

const Main = (props) => (
    <Switch>
        <Route exact path="/" component={LandingPage} />;
        <Route path="/contact" component={Contact} />;
        <Route path="/projects" component={Project} />;
        <Route path="/about" component={About} />;
        <Route path="/resume" component={Resume} />;
    </Switch>
)

export default Main;