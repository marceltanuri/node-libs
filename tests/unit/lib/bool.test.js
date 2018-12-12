'use strict';

const Lab = require('lab');
const lab = exports.lab = Lab.script();
const Code = require('code');
const expect = Code.expect;
const Booleano = require('../../../lib/bool');

lab.experiment('Booleano', () => {

    lab.experiment('paraBooleano', () => {

        lab.test('dado um booleano verdadeiro, o retorno da função deve ser verdadeiro.', (done) => {

            const dado = true;
            const resultado = Booleano.paraBooleano(dado);
            const esperado = true;
            expect(resultado).to.be.equal(esperado);
            done();

        });

        lab.test('dado um booleano falso, o retorno da função deve ser falso.', (done) => {

            const dado = false;
            const resultado = Booleano.paraBooleano(dado);
            const esperado = false;
            expect(resultado).to.be.equal(esperado);
            done();

        });

        lab.test('dado uma string false, o retorno da função deve ser falso.', (done) => {

            const dado = 'false';
            const resultado = Booleano.paraBooleano(dado);
            const esperado = false;
            expect(resultado).to.be.equal(esperado);
            done();

        });

        lab.test('dado um número, o retorno da função deve ser verdadeiro.', (done) => {

            const dado = 666;
            const resultado = Booleano.paraBooleano(dado);
            const esperado = true;
            expect(resultado).to.be.equal(esperado);
            done();

        });

        lab.test('dado uma string, o retorno da função deve ser verdadeiro', (done) => {

            const dado = 'Slowpoke!';
            const resultado = Booleano.paraBooleano(dado);
            const esperado = true;
            expect(resultado).to.be.equal(esperado);
            done();

        });

        lab.test('dado um número negativo, o retorno da função deve ser verdadeiro.', (done) => {

            const dado = -80;
            const resultado = Booleano.paraBooleano(dado);
            const esperado = true;
            expect(resultado).to.be.equal(esperado);
            done();
        });
    });

});
