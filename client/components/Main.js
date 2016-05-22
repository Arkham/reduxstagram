import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
          {React.cloneElement(this.props.children, this.props)}
        </h1>
      </div>
    );
  }
});
