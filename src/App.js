import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react'
import News from './components/News';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const articlesPerPage = 6;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <div>
        <LoadingBar
          color='#0d6efd'
          progress={progress}
          height={2}
        />
      </div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar category="General" />
            <News apiKey={apiKey} key="general" pageSize={articlesPerPage} category="general" country="in" setProgress={setProgress} />
          </Route>
          <Route exact path="/business">
            <Navbar category="Business" />
            <News apiKey={apiKey} key="business" pageSize={articlesPerPage} category="business" country="in" setProgress={setProgress} />
          </Route>
          <Route exact path="/entertainment">
            <Navbar category="Entertainment" />
            <News apiKey={apiKey} key="entertainment" pageSize={articlesPerPage} category="entertainment" country="in" setProgress={setProgress} />
          </Route>
          <Route exact path="/general">
            <Navbar category="General" />
            <News apiKey={apiKey} key="general" pageSize={articlesPerPage} category="general" country="in" setProgress={setProgress} />
          </Route>
          <Route exact path="/health">
            <Navbar category="Health" />
            <News apiKey={apiKey} key="health" pageSize={articlesPerPage} category="health" country="in" setProgress={setProgress} />
          </Route>
          <Route exact path="/science">
            <Navbar category="Science" />
            <News apiKey={apiKey} key="science" pageSize={articlesPerPage} category="science" country="in" setProgress={setProgress} />
          </Route>
          <Route exact path="/sports">
            <Navbar category="Sports" />
            <News apiKey={apiKey} key="sports" pageSize={articlesPerPage} category="sports" country="in" setProgress={setProgress} />
          </Route>
          <Route exact path="/technology">
            <Navbar category="Technology" />
            <News apiKey={apiKey} key="technology" pageSize={articlesPerPage} category="technology" country="in" setProgress={setProgress} />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;