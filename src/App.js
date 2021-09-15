import './App.css';

import Navbar from './components/Navbar';
import React, { Component } from 'react'
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  articlesPerPage = 6;
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Navbar category="General"/>
              <News key="general" pageSize={this.articlesPerPage} category="general" country="in" />
            </Route>
            <Route exact path="/business">
              <Navbar category="Business"/>
              <News key="business" pageSize={this.articlesPerPage} category="business" country="in" />
            </Route>
            <Route exact path="/entertainment">
              <Navbar category="Entertainment"/>
              <News key="entertainment" pageSize={this.articlesPerPage} category="entertainment" country="in" />
            </Route>
            <Route exact path="/general">
              <Navbar category="General"/>
              <News key="general" pageSize={this.articlesPerPage} category="general" country="in" />
            </Route>
            <Route exact path="/health">
              <Navbar category="Health"/>
              <News key="health" pageSize={this.articlesPerPage} category="health" country="in" />
            </Route>
            <Route exact path="/science">
              <Navbar category="Science"/>
              <News key="science" pageSize={this.articlesPerPage} category="science" country="in" />
            </Route>
            <Route exact path="/sports">
              <Navbar category="Sports"/>
              <News key="sports" pageSize={this.articlesPerPage} category="sports" country="in" />
            </Route>
            <Route exact path="/technology">
              <Navbar category="Technology"/>
              <News key="technology" pageSize={this.articlesPerPage} category="technology" country="in" />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
