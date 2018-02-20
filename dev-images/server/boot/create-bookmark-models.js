
// var fs = require('fs');
// var bookmarksImport = JSON.parse(fs.readFileSync('./server/boot/bookmarks.json', 'utf8'));

// module.exports = function(app) {
//     app.dataSources.mysql.automigrate('Bookmark', function(err){
//         if(err) throw err;

//         app.models.Bookmark.create(bookmarksImport, function( err, bookmarks){
//             if(err) throw err;

//             console.log('model created: \n', bookmarks);
//         });
//     });
// };