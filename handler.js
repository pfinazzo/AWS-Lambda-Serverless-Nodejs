'use strict';

var hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello World',
      input: event,
    }),
  };
  callback(null, response);
}

var imageResize = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'resize your image',
      input: event,
    }),
  };
  callback(null, response);
};

module.exports = {
  hello,
  imageResize
}
