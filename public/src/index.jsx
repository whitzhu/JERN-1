import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Login from './components/Login.jsx';
import Home from './components/Home.jsx';
import CreateDecks from './components/CreateDecks.jsx';
import AllDecks from './components/AllDecks.jsx';
import DeckProfile from './components/DeckProfile.jsx';
import Summary from './components/Summary.jsx';
import Profile from './components/Profile.jsx';
import DeckView from './components/DeckView.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <Router>
          <div>
            <Navbar />
            <Route exact path='/' component={Home}/>
            <Route path='/all-decks' component={AllDecks}/>
            <Route path='/creat-decks' component={CreateDecks}/>
            <Route path='/deck-profile' component={DeckProfile}/>
            <Route path='/deck-view' component={DeckView}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/summary' component={Summary}/>
            <Route path='/login' component={Login}/>
          </div>
        </Router>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


