import * as ActionType from '../actions'

export const postsReducer = (state = {
    posts: [], 
    isFetching: true, 
    nextPage: undefined
  }, action) => {
    switch (action.type) {
      case ActionType.POSTS_REQUEST:
        return {
          ...state,
          isFetching: true
        }
      case ActionType.POSTS_SUCCESS:
        let new_state = {
          ...state,
          posts: [...state.posts, ...Object.values(action.response.entities.posts)], 
          isFetching: false,
          nextPage: action.response.nextPage
        }
        console.log('-- new state: ', new_state)
        return new_state
      case ActionType.POSTS_FAILURE:
        return {
          ...state,
          isFetching: false
        }
      default:
        return state
    }
  }


