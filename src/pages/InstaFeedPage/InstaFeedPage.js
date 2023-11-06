import axios from 'axios';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import '../InstaFeedPage/InstaFeedPage.scss';

class InstaFeedPage extends Component {
  state = {
    isLoading: true,
    isError: false,
    photos: []
  };

  componentDidMount() {
    // Ideal lifecycle hook to connect with REST API
    // REST API url : https://jsonplaceholder.typicode.com/photos?_limit=20
    // REST API client tool : Axios
    axios
      .get('https://jsonplaceholder.typicode.com/photos?_limit=20')
      .then((res) => {
        console.log(res.data);
        this.setState({
          isLoading: false,
          isError: false,
          photos: res.data
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          isLoading: false,
          isError: true
        });
      })
      .finally(() => {
        console.log('It is Over');
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="text-center">
          <div className="spinner-border text-danger" role="status"></div>
        </div>
      );
    }

    if (this.state.isError) {
      return (
        <div autoCapitalize="alert alert-danger" role="alert">
          Sorry! Unable to fetch data . please try again after sometimes
        </div>
      );
    }

    return (
      <>
        <Helmet>
          <title>Insta Feed</title>
        </Helmet>
        <div className="row">
          {this.state.photos.map(({ id, url, title }) => (
            <div className="col-md-3" key={id}>
              <div className="card shadow-sm">
                <img src={url} alt={title} />
                <div className="card-body">
                  <p className="card-text">{title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default InstaFeedPage;
