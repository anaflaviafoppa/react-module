import React, { Component, Fragment } from 'react';

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      profile: null,
      error: '',
    };
  }

  componentDidMount() {
    this.loadUserProfile();
  }

  loadUserProfile() {
    this.props.auth.getProfile((profile, error) => {
      this.setState({ profile, error });
    });
  }
  render() {
    const {profile} = this.state;
    
    //if we dont have a profile will retun null:
    if(!profile) return null;
    return (
      <Fragment>
        <h1>Profile</h1>
        <p>{profile.nickname}</p>
        <img
          style={{ maxWidth: 50, maxHeight: 50 }}
          src={profile.picture}
          alt="profile pic"
        ></img>
        <pre>{JSON.stringify(profile,null,2)}</pre>
      </Fragment>
    );
  }
}
