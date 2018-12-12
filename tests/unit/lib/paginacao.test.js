'use strict';

const Lab = require('lab');
const lab = exports.lab = Lab.script();
const Code = require('code');
const expect = Code.expect;
const Paginacao = require('../../../lib/paginacao');

const conteudoObterRegistroPaginaAtual = {
    primeiraPagina: '1',
    ultimaPagina: '2',
    dados: [
        [{
            nome: 'Slowpoke'
        }, {
            nome: 'Pikachu'
        }],
        [{
            nome: 'Venusaur'
        }, {
            nome: 'Meowth'
        }]
    ]
};

lab.experiment('paginacao', () => {

    lab.experiment('inicializar', () => {

        lab.test('dado 5 registros e um limite de 2 por pagina deve efetuar a paginacao ', (done) => {

            const dados = [{
                cep: '13460000',
                cidade: 'NOVA ODESSA'
            }, {
                cep: '28021284',
                cidade: 'CAMPOS DOS GOYTACAZES'
            }, {
                cep: '32400000',
                cidade: 'IBIRITE'
            }, {
                cep: '88309140',
                cidade: 'ITAJAI'
            }, {
                cep: '27213145',
                cidade: 'VOLTA REDONDA'
            }];

            const registrosPorPagina = 2;
            const resultado = Paginacao.inicializar(registrosPorPagina, dados);

            const esperado = {
                totalPaginas: '3',
                primeiraPagina: '1',
                ultimaPagina: '3',
                totalRegistros: '5',
                dados: [
                    [{
                        cep: '13460000',
                        cidade: 'NOVA ODESSA'
                    }, {
                        cep: '28021284',
                        cidade: 'CAMPOS DOS GOYTACAZES'
                    }],
                    [{
                        cep: '32400000',
                        cidade: 'IBIRITE'
                    }, {
                        cep: '88309140',
                        cidade: 'ITAJAI'
                    }],
                    [{
                        cep: '27213145',
                        cidade: 'VOLTA REDONDA'
                    }]
                ]
            };

            expect(resultado).to.be.equal(esperado);
            done();
        });

        lab.test('dado 1 registro e um limite de 2 por pagina deve efetuar a paginacao ', (done) => {

            const dados = [{
                cep: '13460000',
                cidade: 'NOVA ODESSA'
            }];

            const registrosPorPagina = 2;
            const resultado = Paginacao.inicializar(registrosPorPagina, dados);

            const esperado = {
                totalPaginas: '1',
                primeiraPagina: '1',
                ultimaPagina: '1',
                totalRegistros: '1',
                dados: [
                    [{
                        cep: '13460000',
                        cidade: 'NOVA ODESSA'
                    }]
                ]
            };

            expect(resultado).to.be.equal(esperado);
            done();
        });
    });

    lab.experiment('setarPaginas', () => {

        lab.test(`dado paginaAtual igual a 1, primeiraPagina igual a 1, ultimaPagina igual a 2
                  deve retornar que não tem pagina anterior e que tem proxima pagina`, (done) => {

            const paginaAtual = '1';
            const dados = {
                primeiraPagina: '1',
                ultimaPagina: '2'
            };

            const esperado = {
                paginaAtual,
                primeiraPagina: dados.primeiraPagina,
                ultimaPagina: dados.ultimaPagina,
                temPaginaAnterior: false,
                temProximaPagina: true
            };

            Paginacao.setarPaginas(paginaAtual, dados);
            expect(dados).to.be.equal(esperado);
            done();
        });

        lab.test(`dado paginaAtual igual a 3, primeira pagina igual a 1, ultima pagina igual a 5
                  deve retornar que tem pagina anterior e que tem proxima pagina`, (done) => {

            const paginaAtual = '3';
            const dados = {
                primeiraPagina: '1',
                ultimaPagina: '5'
            };

            const esperado = {
                paginaAtual,
                primeiraPagina: dados.primeiraPagina,
                ultimaPagina: dados.ultimaPagina,
                temPaginaAnterior: true,
                temProximaPagina: true
            };

            Paginacao.setarPaginas(paginaAtual, dados);
            expect(dados).to.be.equal(esperado);
            done();
        });

        lab.test(`dado paginaAtual igual a 5, primeira pagina igual a 1, ultima pagina igual a 5
                 deve retornar que tem pagina anterior e que não tem proxima pagina`, (done) => {

            const paginaAtual = '5';
            const dados = {
                primeiraPagina: '1',
                ultimaPagina: '5'
            };

            const esperado = {
                paginaAtual,
                primeiraPagina: dados.primeiraPagina,
                ultimaPagina: dados.ultimaPagina,
                temPaginaAnterior: true,
                temProximaPagina: false
            };

            Paginacao.setarPaginas(paginaAtual, dados);
            expect(dados).to.be.equal(esperado);
            done();
        });
    });

    lab.experiment('obterRegistroPaginaAtual', () => {

        lab.test(`dado duas paginas contendo dois registros cada e a paginaSelecionada igual a 1
                    deve retornar o conteudo da paginaSelecionada`, (done) => {

            const paginaSelecionada = '1';

            const esperado = [{
                nome: 'Slowpoke'
            }, {
                nome: 'Pikachu'
            }];


            const resultado = Paginacao.obterRegistroPaginaAtual(paginaSelecionada, conteudoObterRegistroPaginaAtual);
            expect(resultado).to.be.equal(esperado);
            done();
        });

        lab.test(`dado duas paginas contendo dois registros cada e a paginaSelecionada igual a 2
                    deve retornar o conteudo da paginaSelecionada`, (done) => {

            const paginaSelecionada = '2';

            const esperado = [{
                nome: 'Venusaur'
            }, {
                nome: 'Meowth'
            }];

            const resultado = Paginacao.obterRegistroPaginaAtual(paginaSelecionada, conteudoObterRegistroPaginaAtual);
            expect(resultado).to.be.equal(esperado);
            done();
        });

        lab.test(`dado duas paginas contendo dois registros cada e a paginaSelecionada igual a 4
                    deve retornar um objeto vazio`, (done) => {

            const paginaSelecionada = '10';
            const esperado = {};
            const resultado = Paginacao.obterRegistroPaginaAtual(paginaSelecionada, conteudoObterRegistroPaginaAtual);
            expect(resultado).to.be.equal(esperado);
            done();
        });
    });
});
