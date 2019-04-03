var fs = require('fs');
var rimraf = require("rimraf");
const puppeteer = require('puppeteer');
var preparePage = require("./preparePage")
var path = require('path')

module.exports = function (url) {
    const folderName = __dirname + '/build/';
    var path = require('path');
    var appDir = path.dirname(require.main.filename);
    console.log(appDir)

    const options = {
        url: url,
        file: folderName + 'index.html',
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
    return __dirname + '/build/index.html';
}

module.exports.getVueElements = function() {
    return require(__dirname + '/build/vueComponents.json');
}

async function downloadPage (options) {
    const url = options.url;
    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.goto(url, {waitUntil: 'load'});

    const html = await page.content();
    var dirName = path.dirname(options.file);
    if (!fs.existsSync(dirName)){
        fs.mkdirSync(dirName);
    }

    if (!fs.existsSync(options.file)){
        fs.writeFileSync(options.file, html);
    }

    await browser.close();
}









