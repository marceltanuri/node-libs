'use strict';

const Lab = require('lab');
const lab = exports.lab = Lab.script();
const Code = require('code');
const expect = Code.expect;

const Array = require('../../../lib/array');

lab.experiment('Array', () => {

    lab.experiment('converterParaArray', () => {

        lab.test('Dado um array Deve Retornar: o mesmo', (done) => {

            const erros = [{
                mensagem: {
                    codigo: 1
                }
            }, {
                mensagem: {
                    codigo: 2
                }
            }];

            const resultado = Array.converterParaArray(erros);
            expect(resultado).to.be.equal(erros);
            done();
        });

        lab.test('Dado um objeto literal Deve Retornar: um array com o objeto literal', (done) => {

            const erros = {
                mensagem: {
                    codigo: 2
                }
            };

            const resultado = Array.converterParaArray(erros);
            const esperado = [{
                mensagem: {
                    codigo: 2
                }
            }];
            expect(resultado).to.be.equal(esperado);
            done();
        });

        lab.test('Dado um undefined Deve Retornar: um array vazio', (done) => {

            const resultado = Array.converterParaArray(undefined);
            const esperado = [];
            expect(resultado).to.be.equal(esperado);
            done();
        });

        lab.test('Dado um null Deve Retornar: um array vazio', (done) => {

            const resultado = Array.converterParaArray(null);
            const esperado = [];
            expect(resultado).to.be.equal(esperado);
            done();
        });

        lab.test('Dado um objeto vazio Deve Retornar: um array vazio', (done) => {

            const erros = {};

            const resultado = Array.converterParaArray(erros);
            const esperado = [{}];
            expect(resultado).to.be.equal(esperado);
            done();
        });
    });
});
