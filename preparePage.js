const cheerio = require('cheerio')
var fs = require('fs');

module.exports = function(options, body) {
    var filename = options.directory + 'index.html';
    const $ = cheerio.load(body);
    var vueComponents = [];

    $('*[data-portlet-type="vue"]').each(function() {
        var scriptContent = $(this).next('script').html()
        var initText = 'new Vue('
        var vueContentStart = scriptContent.indexOf(initText);
        var vuePart;
        if(vueContentStart > 0) {
            var vueContentEnd = findClosingBracketMatchIndex(scriptContent,vueContentStart + initText.length - 1)
            if (vueContentEnd > 0) {
                vuePart = scriptContent.substring(vueContentStart, vueContentEnd + 1)
            }
        }

        var component = new VueComponent($(this).attr('id'), vuePart)
        vueComponents.push(component)
    });

    var text = $.html();

    var json = JSON.stringify(vueComponents);
    fs.writeFileSync(options.directory + 'vueComponents.json', json, 'utf8');
    fs.writeFileSync(filename, text, 'utf8');
}

function findClosingBracketMatchIndex(str, pos) {
    if (str[pos] != '(') {
        throw new Error("No '(' at index " + pos);
    }
    let depth = 1;
    for (let i = pos + 1; i < str.length; i++) {
        switch (str[i]) {
            case '(':
                depth++;
                break;
            case ')':
                if (--depth == 0) {
                    return i;
                }
                break;
        }
    }
    return -1;    // No matching closing parenthesis
}

function VueComponent (id, content) {
    this.id = id;
    this.content = content;
}