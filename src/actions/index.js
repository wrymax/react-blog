import { CALL_API, Schemas } from '../middleware/api'

export const POSTS_REQUEST = 'POSTS_REQUEST'
export const POSTS_SUCCESS = 'POSTS_SUCCESS'
export const POSTS_FAILURE = 'POSTS_FAILURE'

// Fetches a single user from Github API.
// Relies on the custom API middleware defined in ../middleware/api.js.
const fetchPosts = nextPageUrl => ({
  [CALL_API]: {
    types: [ POSTS_REQUEST, POSTS_SUCCESS, POSTS_FAILURE ],
    endpoint: nextPageUrl,
    schema: Schemas.POST_ARRAY
  }
})

// Fetches a page of starred repos by a particular user.
// Bails out if page is cached and user didn't specifically request next page.
// Relies on Redux Thunk middleware.
export const loadPosts = (nextPage) => (dispatch, getState) => {
  let nextPageUrl

  if (nextPage && nextPage > 0) {
    nextPageUrl = `posts?page=${nextPage}`
  } else {
    nextPageUrl = `posts`
  }
  
  return dispatch(fetchPosts(nextPageUrl))
}
