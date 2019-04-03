var fs = require('fs');
var rimraf = require("rimraf");
const puppeteer = require('puppeteer');
var preparePage = require("./preparePage")
var path = require('path')
const scrape = require('website-scraper');

module.exports = function (url, basePath) {
    const folderName = basePath + '/public/';

    const options = {
        urls: [url],
        directory: folderName
    }

    try {
        if (fs.existsSync(folderName)){
            rimraf(folderName, function () {
                downloadPage(options).then(() => {
                    preparePage(folderName);
                })
            })
        } else {
            downloadPage(options).then(() => {
                preparePage(folderName);
            })
        }
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
    const result = await scrape(options);
}









