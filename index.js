'use strict';

const String = require('./lib/string');
const Array = require('./lib/array');
const Xml = require('./lib/xml');
const Paginacao = require('./lib/paginacao');
const Object = require('./lib/object');
const Enum = require('./lib/enum');
const Bool = require('./lib/bool');
const Data = require('./lib/data');
const Request = require('./lib/request');

module.exports = {
    string: String,
    array: Array,
    xml: Xml,
    paginacao: Paginacao,
    object: Object,
    enum: Enum,
    bool: Bool,
    data: Data,
    request: Request
};
