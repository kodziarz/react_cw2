const http = require('http');
const fs = require('fs')
const data = require("./data/zones.json")

const PORT = 3000;

const server = http.createServer((req, res) => {
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    // res.end('Hello World');

    switch (req.method) {
        case "GET":
            switch (req.url) {
                case "/json":
                    res.setHeader("Content-Type", "application/json")
                    res.end(JSON.stringify(data))
                    break
                default:
                    fs.readFile("./index09.html", (err, data) => {
                        if (err)
                            throw err
                        res.end(data)
                    })
            }
            break
    }
});

server.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});