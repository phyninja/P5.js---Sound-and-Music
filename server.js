var express = require("express")
var app = express();
var os = require('os');

var interfaces = os.networkInterfaces();
var addresses = [];
for (var k in interfaces) {
    for (var k2 in interfaces[k]) {
        var address = interfaces[k][k2];
        if (address.family === 'IPv4' && !address.internal) {
            addresses.push(address.address);
        }
    }
}

app.get("/", (req, res) => {
	res.sendfile('index.html')
});

app.listen(5000, () => {
	console.log("P5.js is listening at http://" + addresses[0] + ":5000")
});

app.post("/user/add", function(req, res){
	res.send("OR");
});

app.get(/^(.+)$/, function(req, res){
	console.log('static file requre: ' + req.params);
	res.sendFile(__dirname + req.params[0]);
});
