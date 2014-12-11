
var xmlrpc = require('xmlrpc'),
    URL = require('url');


module.exports = function (input, config, cb) {

    try {

        var url = URL.parse(input.url);

        var client = xmlrpc.createClient({ host: url.host, port: url.port || 80, path: url.path});

        client.methodCall(input.method, input.params, function (err, res) {
            console.log(err, res);
            cb(err, res);
        });
        
    }catch(ex) {
        cb(ex);
    }
};
