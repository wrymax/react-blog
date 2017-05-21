import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import PostsList from '../components/PostsList'
import { loadPosts } from '../actions'

class Posts extends Component {
  componentWillMount() {
    this.props.loadPosts()
  }

  loadMorePosts = (event) => {
    const { nextPage, loadPosts } = this.props
    loadPosts(3)
    event.preventDefault()
  }

  render() {
    let { posts, isFetching } = this.props

    return (
      <div id="posts">
        <PostsList items={posts} loadMorePosts={this.loadMorePosts} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let { isFetching, posts, nextPage } = state.postsReducer

  return {
    isFetching, 
    posts, 
    nextPage
  }
}

const mapActionsToProps = {
  loadPosts
}

export default connect(mapStateToProps, mapActionsToProps)(Posts)
