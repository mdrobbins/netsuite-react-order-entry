if (process.env.NODE_ENV === 'production') {
  console.log('using production api');
  module.exports = require('./api.dev.js');
} else {
  console.log('using development api');
  module.exports = require('./api.dev.js');
}