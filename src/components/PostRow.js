import React, {Component} from 'react';

export default class PostRow extends Component {
  render() {
    let { post } = this.props

    return (
      <div className='post-row' key={post.id}>
        <h4>{post.title}</h4>
        <div className="post-date">Created at {post.createdAt}</div>
        <quote>{post.pitch}</quote>
        <p className="post-content">
          {post.content}
        </p>
      </div>
    )
  }
}
