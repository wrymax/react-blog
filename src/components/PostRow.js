import React, {Component} from 'react';

import styles from '../stylesheets/posts.css'

export default class PostRow extends Component {
  render() {
    let { post } = this.props

    return (
      <div className="postRow" key={post.id}>
        <h4 className="postTitle">{post.title}</h4>
        <i className="postDate">Created at {post.createdAt}</i>
        <div className="text-center">『 {post.pitch} 』</div>
        <p className="postContent">
          {post.content}
        </p>
      </div>
    )
  }
}
