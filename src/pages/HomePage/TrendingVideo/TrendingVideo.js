// Trending video component
import React from 'react';
import PropTypes from 'prop-types';

const TrendingVideo = ({
  thumbnailUrl,
  title,
  description,
  channel,
  views,
  publishedDate
}) => {
  return (
    <div>
      <div>
        <div className="card">
          <img src={thumbnailUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <a href="/" className="card-link">
              <h5 className="card-title">{title}</h5>
            </a>
            <p>{description}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{channel}</li>
            <li className="list-group-item">
              {views} views| {publishedDate}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Specifies the default values for props.
TrendingVideo.propTypes = {
  thumbnailUrl: PropTypes.string,
  title: PropTypes.string,
  channel: PropTypes.string,
  views: PropTypes.string,
  publishedDate: PropTypes.string,
  description: PropTypes.string
};

export default TrendingVideo;
