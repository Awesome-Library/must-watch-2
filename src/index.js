import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import MyList from './MyList';
import 'bulma/css/bulma.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const App = () => (
  <Router>
    <div>
      <nav className="nav has-shadow">
        <div className="container">
          <div className="nav-left">
            <Link to="/" className="nav-item">
              <h1 className="title">must-do</h1>
            </Link>
          </div>
          <div className="nav-right">
            <Link to="/" className="nav-item is-tab">
              início
            </Link>

            <Link to="/minha-lista" className="nav-item is-tab">
              minha lista
            </Link>
          </div>
        </div>
      </nav>

      <Route exact path="/" component={Home}/>
      <Route exact path="/minha-lista" component={MyList}/>
    </div>
  </Router>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
