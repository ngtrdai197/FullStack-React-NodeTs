import React from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import Login from './components/auth/login/login';
import SignUp from './components/auth/signup/signup';


function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <ul className="d-flex justify-content-end mr-5">
            <li>
              <NavLink to="/auth/login" activeClassName="active">Login</NavLink>
            </li>
            <li>
              <NavLink to="/auth/sign-up">Sign up</NavLink>
            </li>
          </ul>
        </header>
        <Route path="/auth/login" component={Login} />
        <Route path="/auth/sign-up" component={SignUp} />
      </div>
    </Router>
  );
}

export default App;
