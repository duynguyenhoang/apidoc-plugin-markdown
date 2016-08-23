var trim = require('trim');

function parse(content) {
	content = trim(content);

	if (content.length === 0)
		return null;
	
	// @apiMarkdown {file=relative_path}
	var parseRegExp = /^\{(.+?)=(.+?)\}\s*(?:\s+(.+?))?$/g;
	var matches = parseRegExp.exec(content);

	if ( ! matches)
		return null;

	return {
		schema : matches[1],
		path : matches[2]
	};
}

/**
 * Exports
 */
module.exports = {
	parse        : parse,
	path         : 'local',
	method       : 'push',
	preventGlobal: true
};
