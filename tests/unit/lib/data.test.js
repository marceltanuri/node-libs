'use strict';

const Lab = require('lab');
const lab = exports.lab = Lab.script();
const Code = require('code');
const expect = Code.expect;

const Data = require('../../../lib/data');

lab.experiment('Data', () => {

    lab.experiment('Formato de Data são válidos', () => {

        lab.test('Dada uma data no formato DD/MM deve ser retornada uma data no formato DD/MM/YYYY', (done) => {

            expect(Data.formatarData('04/09', 'DD/MM/YYYY', 'DD/MM')).to.be.equal('04/09/2018');
            done();
        });

        lab.test('Dada uma data no formato YYYYMMDD deve ser retornada uma data no formato DD/MM', (done) => {

            expect(Data.formatarData('20170906', 'DD/MM', 'YYYYMMDD')).to.be.equal('06/09');
            done();
        });


        lab.test('Dada um valor (data) vazio e um formato de saída DD/MM, retornar --/--', (done) => {

            expect(Data.formatarData('', 'DD/MM', 'YYYYMMDD')).to.be.equal('--/--');
            done();
        });

        lab.test('Dada um valor (data) vazio, retornar a string Invalid date', (done) => {

            expect(Data.formatarData('', 'DD/MM/YYYY', 'YYYYMMDD')).to.be.equal('--/--/--');
            done();
        });

        lab.test('Dado um formato de entrada X (unix date), ', (done) => {

            expect(Data.formatarData('1504719214', 'DD/MM/YYYY', 'X')).to.be.equal('06/09/2017');
            done();
        });

        lab.test('Dada uma data inicial e final deve retornar a diferença no formato #m 0.000s', (done) => {

            const dataInicial = new Date(2017, 8, 4, 0, 0, 0);
            const dataFinal = new Date(2017, 8, 5, 0, 0, 0);
            const dataDiff = Data.calcularIntervaloEntreDatas(dataInicial, dataFinal);

            expect(dataDiff).to.be.equal('0m 86400.000s');
            done();
        });

    });
});