'use strict';

const Lab = require('lab');
const lab = exports.lab = Lab.script();
const Code = require('code');
const expect = Code.expect;

const String = require('../../../lib/string');

lab.experiment('String', () => {

    lab.experiment('obter', () => {

        lab.test('Dado uma String Deve Retornar: a mesma', (done) => {

            const resultado = String.obter('Honda Hornet');

            expect(resultado).to.be.equal('Honda Hornet');
            done();
        });

        lab.test('Dado um Inteiro Deve Retornar: -', (done) => {

            const resultado = String.obter(24);

            expect(resultado).to.be.equal('-');
            done();
        });

        lab.test('Dado uma String Vazia Deve Retornar: uma String Vazia', (done) => {

            const resultado = String.obter('');

            expect(resultado).to.be.equal('');
            done();
        });

        lab.test('Dado usuarios Deve Retornar: -', (done) => {

            const usuarios = {
                primeiroNome: 'Pablo'
            };
            const resultado = String.obter(usuarios);

            expect(resultado).to.be.equal('-');
            done();
        });

        lab.test('Dado usuarios e casoNaoSejaStringDeveRetornar Deve Retornar: nao foi possivel converter o valor', (done) => {

            const usuarios = {
                primeiroNome: 'Pablo'
            };
            const casoNaoSejaStringDeveRetornar = 'nao foi possivel converter o valor';
            const resultado = String.obter(usuarios, casoNaoSejaStringDeveRetornar);

            expect(resultado).to.be.equal('nao foi possivel converter o valor');
            done();
        });


        lab.test('dado um valor, se for string e tiver espaços, deve retirar os espaços da string', (done) => {
            
            const resultado = String.obter(' a ', '');
            expect(resultado).to.be.equal('a');
            done();
        });

        lab.test('dado um valor, se não for string, deve retornar vazio.', (done) => {
        
            const resultado = String.obter(1, '');
            expect(resultado).to.be.equal('');
            done();
        });
    });

    lab.experiment('obterNumeros', () => {

        lab.test('dado a string Desconto de R$ 12,00 deve retornar um array contendo o valor 12,00', (done) => {

            const numeros = String.obterNumeros('Desconto de R$ 12,00');
            expect(numeros).to.be.equal(['12,00']);
            done();
        });

        lab.test('dado a string Desconto de R$ 56.89 deve retornar um array contendo o valor 56.89', (done) => {

            const numeros = String.obterNumeros('Desconto de R$ 56.89');
            expect(numeros).to.be.equal(['56.89']);
            done();
        });

        lab.test('dado a string Você está negativo em R$ -800.00 deve retornar um array contendo o valor -800.00', (done) => {

            const numeros = String.obterNumeros('Você está negativo em R$ -800.00');
            expect(numeros).to.be.equal(['-800.00']);
            done();
        });

        lab.test('dado a string Seu saldo é de R$ 890,99 e tem na poupança R$ 225.600,10 deve retornar um array contendo o valor 890,99 e 225.600,10', (done) => {

            const numeros = String.obterNumeros('Seu saldo é de R$ 890,99 e tem na poupança R$ 225.600,10');
            expect(numeros).to.be.equal(['890,99', '225.600,10']);
            done();
        });

        lab.test('dado a string Você tem 14 anos e não pode beber Corote deve retornar um array contendo o valor 14', (done) => {

            const numeros = String.obterNumeros('Você tem 14 anos e não pode beber Corote');
            expect(numeros).to.be.equal(['14']);
            done();
        });

        lab.test('dado a string Você tem 14 anos e só pode beber Corote quando fizer 18 deve retornar um array contendo o valor 14 e 18', (done) => {

            const numeros = String.obterNumeros('Você tem 14 anos e só pode beber Corote quando fizer 18');
            expect(numeros).to.be.equal(['14', '18']);
            done();
        });

        lab.test('dado a string R$ -800.50 R$ 800,50 10.22 10,22 59 deve retornar um array contendo o valor -800.50, 800,50, 10.22, 10,22, 59', (done) => {

            const numeros = String.obterNumeros('R$ -800.50 R$ 800,50 10.22 10,22 59');
            expect(numeros).to.be.equal(['-800.50', '800,50', '10.22', '10,22', '59']);
            done();
        });

        lab.test('dado a string Não tem número nesse texto deve retornar um array vazio', (done) => {

            const numeros = String.obterNumeros('Não tem número nesse texto');
            expect(numeros).to.be.equal([]);
            done();
        });
    });

    lab.experiment('stringIgualTrue', () => {

        lab.test('dado uma string qualquer que não seja a palavra (true), deve retonar o valor (false)', (done) => {

            const isFalse = String.stringIgualTrue('um test');
            expect(isFalse).to.be.false();
            done();
        });

        lab.test('dado uma string com o valor (true), deve retornar o valor (true)', (done) => {

            const isTrue = String.stringIgualTrue('true');
            expect(isTrue).to.be.true();
            done();
        });

        lab.test('dado um valor (false) deve retonar o valor (false)', (done) => {

            const isFalse = String.stringIgualTrue(false);
            expect(isFalse).to.be.false();
            done();
        });

        lab.test('dado um valor (true) deve retornar o valor (false)', (done) => {

            const isFalse = String.stringIgualTrue(true);
            expect(isFalse).to.be.false();
            done();
        });

        lab.test('dado um valor (undefined) deve retonar o valor (false)', (done) => {

            const isFalse = String.stringIgualTrue(undefined);
            expect(isFalse).to.be.false();
            done();
        });

        lab.test('dado um valor (NaN) deve retonar o valor (false)', (done) => {

            const isFalse = String.stringIgualTrue(NaN);
            expect(isFalse).to.be.false();
            done();
        });

        lab.test('dado um valor (null) deve retonar o valor (false)', (done) => {

            const isFalse = String.stringIgualTrue(null);
            expect(isFalse).to.be.false();
            done();
        });

        lab.test('dado um valor ([]) deve retonar o valor (false)', (done) => {

            const isFalse = String.stringIgualTrue([]);
            expect(isFalse).to.be.false();
            done();
        });
    });

    lab.experiment('converterParaCamelCase', () => {

        lab.test('dado duas strings separadas por um unico espaço em branco, deve retonar seus valores juntadas no formato camelCase', (done) => {

            const resultado1 = String.converterParaCamelCase('camel case');
            const resultado2 = String.converterParaCamelCase('camel case   ');
            const resultado3 = String.converterParaCamelCase('camel case test');
            const resultado4 = String.converterParaCamelCase('camel case teSt');

            expect(resultado1).to.be.equal('camelCase');
            expect(resultado2).to.be.equal('camelCase');
            expect(resultado3).to.be.equal('camelCaseTest');
            expect(resultado4).to.be.equal('camelCaseTest');
            done();
        });

        lab.test('dado duas strings separadas por um unico espaço em branco, que contenha caracteres especiais devem ser removidos tais como (+ - _ * ´ ` ~ ^ } { ] [ ) etc', (done) => {

            const resultado1 = String.converterParaCamelCase('camel *  case');
            const resultado2 = String.converterParaCamelCase('camel ´  case');
            const resultado3 = String.converterParaCamelCase('camel `  case');
            const resultado4 = String.converterParaCamelCase('camel ~  case ');
            const resultado5 = String.converterParaCamelCase('camel ^  case ');
            const resultado6 = String.converterParaCamelCase('camel + - _ * ´ ` ~ ^ case');
            const resultado7 = String.converterParaCamelCase('camel ( + - _ * ´ ` ~ ^ ) case');

            expect(resultado1).to.be.equal('camelCase');
            expect(resultado2).to.be.equal('camelCase');
            expect(resultado3).to.be.equal('camelCase');
            expect(resultado4).to.be.equal('camelCase');
            expect(resultado5).to.be.equal('camelCase');
            expect(resultado6).to.be.equal('camelCase');
            expect(resultado7).to.be.equal('camelCase');

            done();
        });

    })

    lab.experiment('removerAcentos', () => {

        lab.test('dado uma string com letras maiúsculas e minúsculas com acentos, deve retornar a string sem acentuação.', (done) => {

            const resultado = String.removerAcentos('ÁÁÁÃÃÃÃâââ')
            expect(resultado).to.be.equal('AAAAAAAaaa');
            done();    
        });

        lab.test('dado uma string com letras diferentes, maiúsculas com acentos, deve retornar a string sem acentuação.', (done) => {

            const resultado = String.removerAcentos('áàãâäÁÀÃÂÄéèêëÉÈÊËíìîïÍÌÎÏóòõôöÓÒÕÔÖúùûüÚÙÛÜñÑ')
            expect(resultado).to.be.equal('aaaaaAAAAAeeeeEEEEiiiiIIIIoooooOOOOOuuuuUUUUnN');
            done();    
        });

        lab.test('dado uma string vazia, o retorno deve ser vazio.', (done) => {

            const resultado = String.removerAcentos('')
            expect(resultado).to.be.equal('');
            done();    
        });

    });
});