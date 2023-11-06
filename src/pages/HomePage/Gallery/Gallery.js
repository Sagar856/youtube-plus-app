import React from 'react';
import '../Gallery/Gallery.scss';
// install npm install --save-dev file-loader
import image01 from '../../../assets/images/image01.jpeg';
import image02 from '../../../assets/images/image02.webp';
import image03 from '../../../assets/images/image03.jpg';
import image04 from '../../../assets/images/image04.jpeg';

const Gallery = () => {
  return (
    <div className="row">
      <div className="col-md-3">
        <img src={image01} alt="image01" />
      </div> 
      <div className="col-md-3">
        <img src={image02} alt="image02" />
      </div>
      <div className="col-md-3">
        <img src={image03} alt="image03" />
      </div>
      <div className="col-md-3">
        <img src={image04} alt="image04" />
      </div>
    </div>
  );
};

export default Gallery;
