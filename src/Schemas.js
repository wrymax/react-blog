import { schema } from 'normalizr'

const post = new schema.Entity('posts', {}, {
  idAttribute: 'id'
})

export default {
  POST: post,
  POST_ARRAY: [post] 
}
