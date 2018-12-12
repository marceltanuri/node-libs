'use strict';

const Request = require('request-promise-native');

module.exports = (options) => {

    if (!options) {
        throw new Error('Your need pass options params');
    }

    if (options) {
        if (!options.apiName || typeof (options.apiName) !== 'string') {
            throw new Error('The property "apiName" is required and your type has string');
        }
    }

    return {
        get: (url, headers) => _request(options, url, null, headers, 'GET'),
        post: (url, payload, headers) => _request(options, url, payload, headers, 'POST'),
        put: (url, payload, headers) => _request(options, url, payload, headers, 'PUT'),
        patch: (url, payload, headers) => _request(options, url, payload, headers, 'PATCH'),
        delete: (url, payload, headers) => _request(options, url, payload, headers, 'DELETE'),
        head: (url, headers) => _request(options, url, null, headers, 'HEAD'),
        options: (url, payload, headers) => _request(options, url, payload, headers, 'OPTIONS')
    };
};

const _request = (opts, url, payload, headers, method) => {

    if (!headers) {
        headers = {};
    }

    const options = {
        method,
        uri: url,
        headers,
        body: payload,
        json: true,
        api: opts.apiName,
        timeout: opts.requestTimeout || '300000'
    };

    method.includes('GET') ? Reflect.deleteProperty(options, 'body') : null;

    return Request(options)
        .then((result) => result);
};
