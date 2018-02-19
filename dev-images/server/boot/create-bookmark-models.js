var async = require('async');

module.exports = function(app) {
    // data sources

    var mysql = app.dataSources.mysql;

    function createBookmarks(cb){
        mysql.automigrate('Bookmark', function(err){
            if(err) return cb(err);
            var Bookmark = app.models.Bookmark;
            Bookmark.create()
        })
    }
};