import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by2">
            <img src={`https://image.tmdb.org/t/p/w400_and_h600_bestv2/${this.props.movie.poster_path}`}/>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">
                {this.props.movie.original_title}
              </p>
            </div>
          </div>

          <div className="content">
            {this.props.movie.overview}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
