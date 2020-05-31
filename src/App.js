import React, { useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer'
import { Switch, Link, Route, BrowserRouter as Router } from 'react-router-dom';
import SearchForm from './components/SearchForm/Searchform';

import Account from './components/Account/Account';
import MainChat from './components/Chat/MainChat/MainChat';
import FrontPage from './pages/frontpage';
import LogIn from './components/LogInForm/LogIn';
import SignUp from './components/LogInForm/SignUp';
import {useDispatch} from 'react-redux';
import {tryLocalSignIn} from './redux/actions/authActions'


//temp function to load search Results
// test pull
// test pull 2
// test pull 3
// test pull 4

function App() {
const dispatch = useDispatch();

useEffect(() => {
  dispatch(tryLocalSignIn())
}, [])
  return (
    <div className="App">

      <Router>
        <div>
      <NavBar/>

        <hr />
        <main>

        </main>
        <Switch>
          <Route path="/" exact component={FrontPage}/>
          <Route path="/search" component={SearchForm} />
          <Route path="/account" component={Account}/>
          <Route path="/chat" component={MainChat}/>
          <Route path="/logIn" component={LogIn}/>
          <Route path="/signUp" component={SignUp}/>

        </Switch>
          </div>
      </Router>

      <Footer />
    </div>

  );
}

export default App;
