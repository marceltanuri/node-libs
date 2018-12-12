'use strict';

const Lab = require('lab');
const lab = exports.lab = Lab.script();
const Code = require('code');
const expect = Code.expect;
const Fs = require('fs');

const Xml = require('../../../lib/xml');
const xmlStub = __dirname + '/../stub/xml.xml';

lab.experiment('Xml', () => {

    lab.experiment('converterStringXmlParaObjetoLiteral', () => {

        lab.test('Dado Uma String Contendo Xml Deve Converter Para Um Objeto Literal', () => {

            const stringXml = Fs.readFileSync(xmlStub, 'utf-8');
            const objetoLiteral = Xml.converterStringXmlParaObjetoLiteral(stringXml);

            return objetoLiteral.then((resultado) => {

                const esperado = {
                    'soapenv:Envelope': {
                        'xmlns:soapenv': 'http://schemas.xmlsoap.org/soap/envelope/',
                        'xmlns:tem': 'http://tempuri.org/',
                        'xmlns:car': 'http://schemas.datacontract.org/2004/07/Carrefour.Core.Servico.ComunicacaoBase',
                        'soapenv:Header': {
                            TokenPlataformaRelacionamento: '6f1e112dd685941267868200382dc808'
                        },
                        'soapenv:Body': {
                            'tem:Obter': {
                                'tem:solicitacao': {
                                    'car:CanalSolicitacao': 'APP'
                                }
                            }
                        }
                    }
                };
                expect(resultado).to.be.equal(esperado);
            });
        });

        lab.test('Dado Uma Simples String Deve Retornar Erro Na Conversao Para Um Objeto Literal', () => {

            const objetoLiteral = Xml.converterStringXmlParaObjetoLiteral('um simples texto');

            return objetoLiteral.then((resultado) => {

                throw new Error(`String de xml foi convertida corretamente, o certo é retornar um erro. ${resultado}`);
            }).catch((resultado) => {

                expect(resultado.erro).to.exist();
            });
        });
    });
});
