import './App.css';

import Navbar from './components/Navbar';
import React, { Component } from 'react'
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {
  articlesPerPage = 6;
  apiKey = process.env.REACT_APP_NEWS_API_KEY;

  state = {
    progress: 0
  }
  setProgress = (progress)=>{
    this.setState({progress: progress})
  };
  render() {
    return (
      <div>
        <div>
          <LoadingBar 
            color='#3a61c2'
            progress={this.state.progress} 
            height={2}
          />
        </div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Navbar category="General" />
              <News apiKey = {this.apiKey}  key="general" pageSize={this.articlesPerPage} category="general" country="in" setProgress = {this.setProgress} />
            </Route>
            <Route exact path="/business">
              <Navbar category="Business" />
              <News apiKey = {this.apiKey}  key="business" pageSize={this.articlesPerPage} category="business" country="in" setProgress = {this.setProgress}/>
            </Route>
            <Route exact path="/entertainment">
              <Navbar category="Entertainment" />
              <News apiKey = {this.apiKey}  key="entertainment" pageSize={this.articlesPerPage} category="entertainment" country="in" setProgress = {this.setProgress}/>
            </Route>
            <Route exact path="/general">
              <Navbar category="General" />
              <News apiKey = {this.apiKey}  key="general" pageSize={this.articlesPerPage} category="general" country="in" setProgress = {this.setProgress}/>
            </Route>
            <Route exact path="/health">
              <Navbar category="Health" />
              <News apiKey = {this.apiKey}  key="health" pageSize={this.articlesPerPage} category="health" country="in" setProgress = {this.setProgress}/>
            </Route>
            <Route exact path="/science">
              <Navbar category="Science" />
              <News apiKey = {this.apiKey}  key="science" pageSize={this.articlesPerPage} category="science" country="in" setProgress = {this.setProgress}/>
            </Route>
            <Route exact path="/sports">
              <Navbar category="Sports" />
              <News apiKey = {this.apiKey}  key="sports" pageSize={this.articlesPerPage} category="sports" country="in" setProgress = {this.setProgress}/>
            </Route>
            <Route exact path="/technology">
              <Navbar category="Technology" />
              <News apiKey = {this.apiKey}  key="technology" pageSize={this.articlesPerPage} category="technology" country="in" setProgress = {this.setProgress}/>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
