import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, Outlet } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="row">
      <div>
        {/* Helmet for page title */}
        <Helmet> 
          <title>AboutPage</title>
        </Helmet>
        <h1>AboutPage</h1>
      </div>
      <div className="col-md-3">
        <Link className="btn btn-info" to="/about/aboutYoutube">
          About Youtube
        </Link>
        <hr />
        <Link className="btn btn-info" to="/about/channels">
          Channels
        </Link>
      </div>
      <div className="col-md-9">
        <Outlet /> 
        {/* Outlet for arranging the stuff */}
      </div>
    </div>
  );
};

export default AboutPage;
