import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar.jsx';
import Login from './components/Login.jsx';
import Home from './components/Home.jsx';
import CreateDecks from './components/CreateDecks.jsx';
import AllDecks from './components/AllDecks.jsx';
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
      <Navbar />
      <Login />
      <Home />
      <CreateDecks />
      <AllDecks />
      <DeckView />
      <Summary />
      <Profile />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));