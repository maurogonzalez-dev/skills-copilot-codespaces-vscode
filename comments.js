// create web server
/* var http = require('http');
// create file system
var fs = require('fs');
// create url
var url = require('url');
// create querystring
var querystring = require('querystring');
// create comments
var comments = [];
// create server
http.createServer(function (req, res) {
    // get the url
    var urlObj = url.parse(req.url, true);
    // get the pathname
    var pathname = urlObj.pathname;
    // get the query
    var query = urlObj.query;
    // get the method
    var method = req.method;
    // if the pathname is /, read the file
    if (pathname === '/') {
        fs.readFile('./index.html', function (err, data) {
            if (err) {
                return res.end('404 Not Found');
            }
            // write the file
            res.end(data);
        });
    }
    // if the pathname is /comments, read the comments
    else if (pathname === '/comments') {
        if (method === 'GET') {
            // write the comments
            res.end(JSON.stringify(comments));
        }
        // if the method is POST
        else if (method === 'POST') {
            var str = '';
            // get the data
            req.on('data', function (chunk) {
                str += chunk;
            });
            // when the data is gotten
            req.on('end', function () {
                // parse the data
                var comment = querystring.parse(str);
                // push the comment
                comments.push(comment);
                // write the comments
                res.end(JSON.stringify(comments));
            });
        }
    }
    // if the pathname is not / or /comments
    else {
        // write 404 not found
        res.end('404 Not Found');
    }
}).listen(3000, function () {
    console.log('server is running on port 3000');
}); */