import React, { Component } from 'react';
import Card from './components/Card/Card';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    const ENDPOINT = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d47d9983ed993df5c93e49df5c8c1bc4';

    axios.get(ENDPOINT).then((response) => {
      this.setState({
        movies: response.data.results
      })
    });
  }

  render() {
    return (
      <div>
        <nav className="nav has-shadow">
          <div className="container">
            <div className="nav-left">
              <a className="nav-item">
                <h1 className="title">must-do</h1>
              </a>
            </div>
            <div className="nav-right">
              <a className="nav-item is-tab is-active">
                filmes
              </a>
            </div>
          </div>
        </nav>
        <section className="section">
          <div className="container">
            <h1 className="title">filmes da hora</h1>

            <h2 className="subtitle">
              estes você deve assistir hein? adiciona na tua lista aí.
            </h2>

            <div className="columns is-multiline">
              {this.state.movies.map((movie, index) => {
                return (
                  <div key={index} className="column is-one-quarter">
                    <Card movie={movie}/>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
