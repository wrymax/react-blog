import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import PostsList from '../components/PostsList'
import LoadMorePosts from '../components/LoadMorePosts'

import { loadPosts } from '../actions'

class Posts extends Component {
  componentWillMount() {
    this.props.loadPosts()
  }

  loadMorePosts = (event) => {
    const { nextPage, loadPosts } = this.props
    console.log("-- Next Page: ", nextPage)
    loadPosts(nextPage)
    event.preventDefault()
  }

  render() {
    let { posts, isFetching, nextPage } = this.props

    return (
      <div id="posts">
        <PostsList items={posts} />
        <LoadMorePosts loadMorePosts={this.loadMorePosts} nextPage={nextPage} />
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
