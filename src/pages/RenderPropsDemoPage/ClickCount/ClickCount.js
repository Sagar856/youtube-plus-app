import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ClickCount extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <button onClick={incrementCount}>
        Click to increment Count : {count}
      </button>
    );
  }
}

ClickCount.propTypes = {
  count: PropTypes.number,
  incrementCount: PropTypes.number
};

export default ClickCount; 