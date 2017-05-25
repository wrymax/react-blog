/* define global apiRoot for API */
let apiRoot

switch(process.env.NODE_ENV) {
  case 'development':
    apiRoot = "http://localhost:4000/v1/"
    break
  case 'production':
    apiRoot = "http://7db7d774.ngrok.io/"
    break
  default:
    apiRoot = "http://localhost:3000/"
}

export default apiRoot
