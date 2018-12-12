'use strict';

const XML2js = require('xml2js');

const xml = {
    converterStringXmlParaObjetoLiteral: (conteudo) => {

        return new Promise((resolve, reject) => {

            const parser = new XML2js.Parser({
                explicitArray: false,
                mergeAttrs: true,
                stripPrefix: true
            });

            parser.parseString(conteudo, (erro, result) => {

                if (erro) {
                    return reject({ erro });
                }

                return resolve(result);
            });
        });
    }
};

module.exports = xml;
