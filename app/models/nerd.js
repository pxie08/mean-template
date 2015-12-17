// grab the mongoose module
var mongoose = require('mongoose');

//define our nerd model
// module.exports allows us to pass this to other files when it is called
var nerdObject = mongoose.model('Nerd', {
  name: {type: String, default: ''}
});

module.exports = nerdObject;
