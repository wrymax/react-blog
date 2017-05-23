import React, {Component} from 'react';
import { Button } from 'react-bootstrap';


export default class LoadMorePosts extends Component {
  render() {
    let { loadMorePosts, nextPage } = this.props;

    var html
    if (nextPage) {
      html = (
        <div className="text-center">
          <Button onClick={loadMorePosts}>
            Load More Posts
          </Button>
        </div>
      )
    } else {
      html = (
        <div className="noMore">No More</div>
      )
    }
    
    return html
  }
}
