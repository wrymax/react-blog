import React, {Component} from 'react';
import PostRow from './PostRow'
import LoadMorePosts from './LoadMorePosts'

export default class PostsList extends Component {
  renderRow(item) {
    return <PostRow post={item} key={item.id} />
  }
  render() {
    let { items, loadMorePosts } = this.props;

    return (
      <div>
        {items.map(this.renderRow)}
        <LoadMorePosts loadMorePosts={loadMorePosts} />
      </div>
    )
  }
}
