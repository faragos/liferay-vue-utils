const cheerio = require('cheerio')
var fs = require('fs');

module.exports = function(folderName) {
    var filename = folderName + 'index.html';
    const $ = cheerio.load(fs.readFileSync(filename));
    var vueComponents = [];

    $('*[data-portlet-type="vue"]').each(function() {
        vueComponents.push($(this).attr('id'))
        $(this).next('script').remove()
    });

    $('[rel="manifest"]').attr('href', '/o/parl-dw-theme/images/favicon/manifest.json');
    var text = $.html();
    var protocol='http';
    var escapedSlashes = ':\\/\\/';
    var host='10.100.0.118';
    text = text.replace(protocol + escapedSlashes + host, '');

    var json = JSON.stringify(vueComponents);
    fs.writeFileSync(folderName + 'vueComponents.json', json, 'utf8');
    fs.writeFileSync(filename, text, 'utf8');
}

