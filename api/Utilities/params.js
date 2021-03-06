/* global module */

module.exports = {
  extract: (req, whiteList) => {
    let output = {};

    // First, we extract the path parameters
    Object.keys(req.params).forEach(key => {
      if (whiteList.indexOf(key) > -1) {
       output[key] = req.params[key];
      }
    });

    // Next, we extract the query parameters
    Object.keys(req.query).forEach(key => {
      if (whiteList.indexOf(key) > -1) {
        output[key] = req.query[key];
      }
    });

    return output;
  }
};
