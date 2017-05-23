import React, {Component} from 'react';


export default class LoadMorePosts extends Component {
  render() {
    let { loadMorePosts, nextPage } = this.props;

    var html
    if (nextPage) {
      html = (
        <div>
          <button onClick={loadMorePosts}>
            Load More Posts
          </button>
        </div>
      )
    } else {
      html = (
        <div className="no-more">No More</div>
      )
    }
    
    return html
  }
}
