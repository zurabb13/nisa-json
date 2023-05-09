const {readFileSync} = require('fs')

let loadBlogs = () => JSON.parse(readFileSync('blogs.json'))

module.exports = { loadBlogs }