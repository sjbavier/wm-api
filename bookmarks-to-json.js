var bookmarks = require('bookmarks-to-json-categorization');

var bookmarksHTML = process.argv[2].toString();

bookmarks(bookmarksHTML);