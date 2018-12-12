

const Lab = require('lab');
const lab = exports.lab = Lab.script();
const Code = require('code');
const expect = Code.expect;

const ENUM = require('../../../lib/enum');

lab.experiment('ENUM', () => {

    lab.test('ENUM tem que ser do tipo objeto', (done) => {
        'use strict';

        expect(ENUM).to.be.an.object();
        done();
    });

    lab.test('ENUM não posso alterar nenhum de seus valores todos devem ser imutaveis', (done) => {

        const copyObjectOld = Object.assign({}, ENUM);
        Object.keys(ENUM).forEach((key, index) => ENUM[key] = index);

        expect(ENUM).to.be.equal(copyObjectOld);
        done();
    });

    lab.test('ENUM todas as propriedades do tipo ENUM devem ser to tipo NUMBER', (done) => {
        'use strict';

        Object.keys(ENUM).forEach((key) => expect(ENUM[key]).to.be.a.number());
        done();
    });

    lab.test('ENUM não posso usar um valor já existente para outra chave de ENUM', (done) => {

        const enumKeys = Object.keys(ENUM);
        const sizeOfList = enumKeys.length;

        for (let i = 0; i < sizeOfList; i++) {
            for (let j = 1; j < sizeOfList; j++) {
                const prev = enumKeys[i];
                const next = enumKeys[j];

                if (i !== j && ENUM[prev] === ENUM[next]) {
                    throw Error(`O ${enumKeys[i]} ou ${enumKeys[j]} estão usando o mesmo valor ${ENUM[prev]}`);
                }
            }

        }

        done();
    });
});
