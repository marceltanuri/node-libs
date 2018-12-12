'use strict';

const Lab = require('lab');
const lab = exports.lab = Lab.script();
const Code = require('code');
const expect = Code.expect;

const Object = require('../../../lib/object');

lab.experiment('Object', () => {

    lab.experiment('temDados', () => {

        lab.test('dado um objeto valido com duas chaves deve retornar 2', (done) => {

            const resultado = Object.temDados({
                name: 'slowpoke',
                type: 'Psychic, water'
            });

            expect(resultado).to.be.equal(2);
            done();
        });

        lab.test('dado um objeto invalido deve retornar 0', (done) => {

            const resultado = Object.temDados({});

            expect(resultado).to.be.equal(0);
            done();
        });
    });
});
