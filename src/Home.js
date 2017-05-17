import React, { Component } from 'react';
import Card from './components/Card/Card';
import axios from 'axios';

const ENDPOINT = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d47d9983ed993df5c93e49df5c8c1bc4';
const POST_PATH = 'https://image.tmdb.org/t/p/w400_and_h600_bestv2';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios.get(ENDPOINT).then((response) => {
      this.setState({
        movies: response.data.results
      })
    });
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">filmes da hora</h1>

          <h2 className="subtitle">
            estes você deve assistir hein? adiciona na tua lista aí.
          </h2>

          <div className="columns is-multiline">
            {this.state.movies.map(({
              original_title,
              poster_path,
              overview
            }, index) => {
              return (
                <div key={index} className="column is-one-quarter">
                  <Card
                    poster={`${POST_PATH}/${poster_path}`}
                    title={original_title}
                    overview={overview} />
                </div>
              )
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Home;