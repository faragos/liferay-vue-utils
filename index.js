var fs = require('fs');
var preparePage = require("./preparePage")
var request = require("request");

module.exports = function (url, basePath) {
    const folderName = basePath + '/public/';

    const options = {
        url: url,
        directory: folderName
    }

    if (!fs.existsSync(folderName)){
      fs.mkdirSync(folderName);
    }

    try {
      downloadPage(options).then(() => {

      })
    } catch (err) {
        console.error(err)
    }
}

module.exports.getIndexPath = function() {
  return __dirname + '/public/index.html';
}

module.exports.getVueElements = function() {
  return require(__dirname + '/public/vueComponents.json');
}

async function downloadPage (options) {
  request({
    uri: options.url,
  }, function(error, response, body) {
    preparePage(options, body);
  });
}










