import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/auth/login/login';
import SignUp from './components/auth/signup/signup';


function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <ul className="d-flex justify-content-end mr-5">
            <li>
              <Link to="/auth/login">Login</Link>
            </li>
            <li>
              <Link to="/auth/sign-up">Sign up</Link>
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
