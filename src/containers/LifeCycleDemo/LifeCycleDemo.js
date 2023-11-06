import React, { Component } from 'react';

class LifeCycleDemo extends Component {
  constructor() {
    // optional to have constructor
    super();
    console.log('=====1. Inside constructor()=======');

    // Ideal place for your initial component wide data
    this.state = {
      isLoading: true,
      isError: false,
      featureName: ''
    };
  }

  // Lifecycle Hook
  componentDidMount() {
    // This method will be executed ONLY ONCE after render
    // this method will be called when the component's UI comes into view
    // Ideal place for you to send rest api calls
    console.log('=====3. Inside componentDidMount()=======');
    //mocking the rest api call with timeout
    setTimeout(() => {
      // upon getting resopnse from backend
      this.setState({
        isLoading: false,
        isError: false,
        featureName: 'Demo of LifeCycle Hooks'
      });
    }, 3000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // when the state is updated  -- this will be called
    // It must return either true or false
    //compare the prevState (this.styate) and new state (nextState)
    // If changes found, then return true else return false
    console.log('=====Inside shouldComponentUpdate()======');
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    //called immediatly after the UPDATE in JSX (after the re-rendering)
    //will never be called after initial rendering
    console.log('=======6. Inside componentDidUpdate()======');
    console.log(prevProps);
    console.log(prevState);
    // You can get prevProps and also prevState
  }

  render() {
    // This method will be called immediately after constructor a.k.a initial rendering
    console.log('======2 & 5 Inside render()========');

    if (this.state.isLoading) {
      return <div className="spinner-border text-warning" role="status"></div>;
    }

    if (this.state.isError) {
      return <div className="alert alert-danger">some Error Occured. Try again later!</div>;
    }

    // if no error and no longer loading
    return (
      <div>
        <h3>Understanding Life Cycle Hooks of Class Component</h3>
        <p>Feature: {this.state.featureName}</p>
      </div>
    );
  }
}

export default LifeCycleDemo;
