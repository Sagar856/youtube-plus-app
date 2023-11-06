import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

const CompanyInfo = (props) => {
  const [countryName, setCountryName] = useState('USA');

  return (
    <div>
      <h2>CompanyInfo | Testing Props, Placerholder Text, Events, States, Snapshots</h2>
      <h3 data-testid="companyName">Cognizant</h3>

      <hr />
      <p data-testid="foundedYearElement" style={{ color: 'rgb(0, 255, 0)' }}>
        Founded in: {props.foundedYear}
      </p>
      <p data-testid="employeeCountElement">Employee Count : {props.employeeCount}</p>
      <input
        type="text"
        placeholder="Enter Your Country Name"
        value={countryName}
        onChange={(event) => {
          setCountryName(event.target.value);
        }}
      />
      <p data-testid="visitCognizant">Visit Cognizant {countryName} Website</p>
      <hr />
      <button className="btn btn-primary" data-testid="classNameElement">
        Join Cognizant
      </button>
    </div>
  );
};

CompanyInfo.propTypes = {
  foundedYear: PropTypes.string,
  employeeCount: PropTypes.string
};

export default CompanyInfo;
