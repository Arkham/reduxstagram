import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

export default React.createClass({
  render() {
    const i = this.props.posts.findIndex((post) => {
      return post.code === this.props.params.postId
    });

    const post = this.props.posts[i];

    return (
      <div className="single-photo">
        <Photo {...this.props} i={i} post={post} />
        <Comments {...this.props} i={i} post={post} />
      </div>
    );
  }
});
