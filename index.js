var express = require('express');
var app = express();

app.use(express.static('public'));

app.use("/api/v1", require('./routes/api'));

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});