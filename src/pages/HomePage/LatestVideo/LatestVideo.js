import React from 'react';
import PropTypes from 'prop-types';

export const LatestVideo = ({
  thumbnailUrl,
  title,
  channel,
  views,
  publishedDate
}) => {
  // props are Objects
  return (
    <div className="card">
      <img src={thumbnailUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <a href="/" className="card-link">
          <h5 className="card-title">{title}</h5>
        </a>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{channel}</li>
        <li className="list-group-item">
          {views} | {publishedDate}
        </li>
      </ul>
    </div>
  );
};

LatestVideo.propTypes = {
  thumbnailUrl: PropTypes.string,
  title: PropTypes.string,
  channel: PropTypes.string,
  views: PropTypes.string,
  publishedDate: PropTypes.string
};

export default LatestVideo;
