import React from 'react';
import { Route, Switch } from 'react-router-dom'
import About from './components/About'
import Project from './components/Project'
import Home from './components/Home'
import NoMatch from './components/NoMatch'
import Contact from './components/Contact'
import Login from './components/Login'

class Routes extends React.Component {
  render() {
    const { randomNumber } = this.props
    return (
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/projects" component={Project} />
        <Route path="/contact" render={() => {
          return <Contact name="harrison" randomNumber={randomNumber} />
        }}
        />
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Home} />
        <Route component={NoMatch} />
      </Switch>
    ) 
  }
}

export default Routes;