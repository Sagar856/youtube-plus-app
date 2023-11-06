import PropTypes from 'prop-types';
import React, { Component } from 'react';

class HoverCount extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return <button onMouseOver={incrementCount}>Hover mouse to increment count: {count}</button>;
  }
}

HoverCount.propTypes = {
  count: PropTypes.number,
  incrementCount: PropTypes.number
};

export default HoverCount;
