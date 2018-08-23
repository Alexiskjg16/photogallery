import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NavBar from './Components/nav'
import Categories from './Components/CategoryList'
import Photos from './Components/ThingsILove'
import PList from './Components/DontLikeIt'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
         <NavBar/>
         <Switch>
           <Route path="/" exact component={Categories} />
           <Route path="/thingsILove" exact component={Photos} />
           <Route path="/dontLike" exact component={PList} />
         </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
