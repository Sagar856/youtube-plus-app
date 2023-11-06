import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    return <div>{this.props.render(this.state.count, this.incrementCount)}</div>;
  }
}

Counter.propTypes = {
  render: PropTypes.func
};

export default Counter;