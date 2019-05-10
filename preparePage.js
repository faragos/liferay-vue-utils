const cheerio = require('cheerio')
let fs = require('fs');

module.exports = function(options, body) {
    let filename = options.directory + 'index.html';
    const $ = cheerio.load(body);
    let vueComponents = [];

    $('*[data-portlet-type="vue"]').each(function() {
        let scriptContent = $(this).next('script').html()

        let vuePart = findVuePart(scriptContent)
        let component = new VueComponent($(this).attr('id'), vuePart)
        vueComponents.push(component)
    });

    let text = $.html();

    $('script').each(function() {
        let scriptContent = $(this).html()

        let vuePart = findVuePart(scriptContent)
        if (vuePart) {
            text = text.replace(vuePart, '')
        }
    });


    var json = JSON.stringify(vueComponents);
    fs.writeFileSync(options.directory + 'vueComponents.json', json, 'utf8');
    fs.writeFileSync(filename, text, 'utf8');
}

function findVuePart(content) {
    let initText = 'new Vue('
    let vueContentStart = content.indexOf(initText);
    if (vueContentStart > 0) {
        let vueContentEnd = findClosingBracketMatchIndex(content,vueContentStart + initText.length - 1)
        if (vueContentEnd > 0) {
            return content.substring(vueContentStart, vueContentEnd + 1)
        }
    }
    return false
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