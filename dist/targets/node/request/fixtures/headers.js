"use strict";
var request = require('request');
var options = {
    method: 'GET',
    url: 'http://mockbin.com/har',
    headers: {
        accept: 'application/json',
        'x-foo': 'Bar',
        'quoted-value': '"quoted" \'string\''
    }
};
request(options, function (error, response, body) {
    if (error)
        throw new Error(error);
    console.log(body);
});
