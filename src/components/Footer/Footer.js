//  Functional Component with anonymus function
import React from 'react';
import MenuList from '../MenuList/MenuList';
import PropTypes from 'prop-types';

const Footer = function (props) {
  let copyrightYear = 2022;
  // Return JSX
  return (
    <>
      <footer className="text-center">
        <hr />
        <MenuList /> 
        <p>
          Copyright {copyrightYear} | {props.developerName} 
        </p>
      </footer>
    </>
  );
};

// Specifies the default values for props.
Footer.defaultProps = {
  developerName: 'Sagar'
};
Footer.propTypes = {
  developerName: PropTypes.string
};

export default Footer;
