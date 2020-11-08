import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/nav/NavBar";
import AboutMe from "./components/about/AboutMe";
import TechStack from "./components/stack/TechStack";
import Experience from "./components/exp/Experience";
import Projects from "./components/proj/Projects";

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Switch>
        <Route exact path='/' component={AboutMe} />
        <Route exact path='/techStack' component={TechStack} />
        <Route exact path='/experience' component={Experience} />
        <Route exact path='/projects' component={Projects} />
      </Switch>
    </HashRouter>
  );
}

export default App;
