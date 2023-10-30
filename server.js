/**
 * Require
 */
const _http = require("http");
const _fileSystem = require("fs")

/**
 * Routes
 */
const _server = _http.createServer((request, response) => {

    if(request.url === "/")
    {
        _fileSystem.readFile("./view/index.html", (error, content) => {
            if (error)
            {
                _fileSystem.readFile("./view/404.html", (error, content) => {
                    response.end(content);
                })
            }

            response.end(content);
        })
    }
    else if (request.url === "/feed")
    {
        _fileSystem.readFile("./view/feed.html", (error, content) => {
            response.end(content);
        })
    }
    else
    {
        _fileSystem.readFile("./view/404.html", (error, content) => {
            response.end(content);
        })
    }

})


/**
 * Listening
 */
_server.listen(3001, "localhost", () => {
    console.log("Starting server")
})