const cheerio = require('cheerio')
var fs = require('fs');

module.exports = function(folderName) {
    var filename = folderName + 'index.html';
    const $ = cheerio.load(fs.readFileSync(filename));
    var vueComponents = [];

    $('*[data-portlet-type="vue"]').each(function() {
        vueComponents.push($(this).attr('id'))
    });

    var text = $.html();


    var json = JSON.stringify(vueComponents);
    fs.writeFileSync(folderName + 'vueComponents.json', json, 'utf8');
    fs.writeFileSync(filename, $.html(), 'utf8');
}

