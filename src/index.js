import React from 'react';
import ReactDOM from 'react-dom';
import Header from './shared/Header';
import Home from './pages/Home';
import MyList from './pages/MyList';
import 'bulma/css/bulma.css';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const App = () => (
  <Router>
    <div>
      <Header/>

      <section className="section">
        <div className="container">
          <Route exact path="/" component={Home}/>
          <Route path="/minha-lista" component={MyList}/>
        </div>
      </section>
    </div>
  </Router>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
