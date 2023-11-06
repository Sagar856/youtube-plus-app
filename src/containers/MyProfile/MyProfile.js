import React, { Component } from 'react';

export class MyProfile extends Component {
  // JS <==> JSX  Two way binding

  state = {
    profileName: 'Jay'
  };

  handleProfileNamechange = (event) => {
    console.log(event.target.value);
    this.setState({ // setState event
      profileName: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h2>Profile Info</h2>
        <p>Update Profile Name</p>
        <input type="Text" value={this.state.profileName} onChange={this.handleProfileNamechange} />
        <p>Profile name entered : {this.state.profileName}</p>
      </div>
    );
  }
}

export default MyProfile;
