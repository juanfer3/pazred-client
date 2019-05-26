import React, { Component } from 'react'
import { Route, Router } from 'react-router'
import PropTypes from 'prop-types'
import './App.css'

import Home from './Components/Home/Home'
import ListGalery from './Components/Galery/ListGalery'
import CreateGalery from './Components/Galery/CreateGalery'
import Navbar from "./Components/Navbar/Navbar";
class App extends Component {
  render() {
    return (
      <Router history={ this.props.history }>
      <Navbar/>
        <div>
          <Route exact path="/" component={ Home }/>
          <Route exact path="/audio" component={ Home }/>
          <Route exact path="/audio/create" component={ Home }/>
          <Route exact path="/photos" component={ ListGalery }/>
          <Route exact path="/photos/create" component={ CreateGalery }/>
          <Route exact path="/recorrido" component={ Home }/>
          <Route exact path="/recorrido/create" component={ Home }/>
          {/* Here you can put more routes on */}

        </div>
      </Router>
    );
  }
}

App.propTypes = {
  history: PropTypes.any
};

export default App;