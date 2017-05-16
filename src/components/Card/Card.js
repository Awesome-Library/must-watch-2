import React from 'react';

let Card = (props) => {
  let {title, overview, poster} = props;

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by2">
          <img src={poster} alt="" />
        </figure>
      </div>
      <div className="card-content" style={{height: 200}}>
        <div className="media">
          <div className="media-content">
            <p className="title is-4">
              {title}
            </p>
          </div>
        </div>

        <div className="content">
          <div className="columns">
            <div className="column">
              <p style={{minHeight: 90}}>
                {overview.slice(0, 70)} ...
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="card-footer">
        <a className="card-footer-item">
          Adicionar a lista
        </a>
      </footer>
    </div>
  );
}

Card.propTypes = {
  title: React.PropTypes.string.isRequired,
  overview: React.PropTypes.string.isRequired,
  poster: React.PropTypes.string.isRequired
};

export default Card;
