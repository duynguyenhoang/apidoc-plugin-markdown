var fs = require('fs');
var path = require('path');
var markdown = require( "markdown" ).markdown;
var elementParser = require('./parser/api_schema');
var app = {};

module.exports = {
    init: function(_app) {
        app = _app;
        app.addHook('parser-find-elements', parseMarkdownContent);
    }
};

function parseMarkdownContent(elements, element, block, filename) {
    if (element.name === 'apimarkdown') {
        var values = elementParser.parse(element.content, element.source);
        var data = fs.readFileSync( path.join(path.dirname(filename), values.path), 'utf8').toString();
        var htmlContent = markdown.toHTML(data);

        var hasApiDescription = false;
        for(var i = 0, l = elements.length; i < l; i++) {
            if (elements[i].sourceName == 'apiDescription') {
                elements[i].content = elements[i].content + htmlContent;
                hasApiDescription = true;
                break;
            }
        }
        if (!hasApiDescription) {
            elements.push(
                {
                    source: '@apiDescription Markdown',
                    name: 'apidescription',
                    sourceName: 'apiDescription',
                    content: htmlContent
                }
            );
        }
    }

    return elements;
}