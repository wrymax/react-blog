import React, {Component} from 'react';
import PostRow from './PostRow'

export default class PostsList extends Component {
  renderRow(item) {
    return <PostRow post={item} key={item.id} />
  }
  render() {
    let { items } = this.props;

    return (
      <div>
        {items.map(this.renderRow)}
      </div>
    )
  }
}
