# apidoc-plugin-markdown

Generates HTML from Markdown format and inject it into api description

`@apiMarkdown {file=PATH_TO_SCHEMA.md}`

## Install
Put into your package.json
`"apidoc-plugin-markdown": "git+https://github.com/duynguyenhoang/apidoc-plugin-markdown.git"`

@todo `npm install apidoc-plugin-markdown --save-dev`


## Example Use
```javascript
/**
 * @api {get} /api GetAPI
 * @apiMarkdown {file=./includes/getAPI.md}
 */
```

## TODO
- Add in unit test
- Add in travis-ci
