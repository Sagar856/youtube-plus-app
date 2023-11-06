import React from 'react';
import PropTypes from 'prop-types';

const RecommendedVideo = (props) => {
  // receiving all props including id till isInWatchlist, index, handleAddToWatchlist
  console.log(props);

  return (
    <div className="col-md-3">
      <div className="card">
        <img src={props.thumbnailUrl} className="card-img-top" alt={props.title} />
        <div className="card-body">
          <a href="/" className="card-link">
            <h5 className="card-title text-truncate">{props.title}</h5>
          </a>
          <p className="recommended-description">{props.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{props.channel}</li>
          <li className="list-group-item">
            {props.views} Views | {props.publishedDate}
          </li>
          <li className="list-group-item">
            <button
              type="button"
              className="btn btn-success btn-sm"
              onClick={props.handleAddToWatchlist.bind(this, props.index)}
              disabled={props.isInWatchlist == true}>
              {/* conditional rendering */}
              {props.isInWatchlist ? 'In watchlist' : 'Add to watchlist'}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

RecommendedVideo.propTypes = {
  thumbnailUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  channel: PropTypes.string,
  views: PropTypes.string,
  publishedDate: PropTypes.string,
  handleAddToWatchlist: PropTypes.func,
  index: PropTypes.number,
  isInWatchlist: PropTypes.bool
};

export default RecommendedVideo;
