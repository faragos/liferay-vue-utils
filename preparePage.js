const cheerio = require('cheerio')
var fs = require('fs');

module.exports = function(options, body) {
    var filename = options.directory + 'index.html';
    const $ = cheerio.load(body);
    var vueComponents = [];

    $('*[data-portlet-type="vue"]').each(function() {
        vueComponents.push($(this).attr('id'))
        $(this).next('script').remove()
    });

    var text = $.html();

    var json = JSON.stringify(vueComponents);
    fs.writeFileSync(options.directory + 'vueComponents.json', json, 'utf8');
    fs.writeFileSync(filename, text, 'utf8');
}

