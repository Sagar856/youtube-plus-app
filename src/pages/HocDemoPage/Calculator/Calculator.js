import React from 'react';
import PropTypes from 'prop-types';

const Calculator = (props) => {
  return (
    <div>
      <h3>Calculator</h3>
      <p>{props.add()}</p>
    </div>
  );
};

Calculator.propTypes = {
  add: PropTypes.function
};

export default Calculator;