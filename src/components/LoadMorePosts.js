import React, {Component} from 'react';


export default class LoadMorePosts extends Component {
  render() {
    let { loadMorePosts } = this.props;

    return (
      <div>
        <button onClick={loadMorePosts}>
          Load More Posts
        </button>
      </div>
    )
  }
}
