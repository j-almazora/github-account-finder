import React, { Component } from 'react';

export class SingleUser extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  
  render() {
    const { login, avatar_url, url, blog, location, hireable } = this.props.user;
    const {loading} = this.props;
    return (
    <div>
      {`${login} ${location}`}
    </div>);
  }
}

export default SingleUser;
