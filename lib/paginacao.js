'use strict';

const Paginator = require('paginator');
const converterParaDadoPaginado = (numeroPaginas, registrosPorPagina, dados) => {

    const paginas = [];
    for (let i = 1; i <= numeroPaginas; i++) {
        let auxiliar = [];
        let conteudo = {};
        for (let j = 1; j <= registrosPorPagina; j++) {
            conteudo = dados.shift();
            if (typeof conteudo !== 'undefined') {
                auxiliar.push(conteudo);
            } else {
                break;
            }
        }

        paginas.push(auxiliar);
        auxiliar = [];
    }

    return paginas;

};

const paginacao = {

    inicializar: (registrosPorPagina, dados) => {

        const numeroPaginas = 1000000;
        const paginator = new Paginator(registrosPorPagina, numeroPaginas);

        const totalResultados = dados.length;
        const paginaAtual = 1;

        const paginar = paginator.build(totalResultados, paginaAtual);
        paginar.data = converterParaDadoPaginado(paginar.pages, registrosPorPagina, dados);

        return {
            totalPaginas: paginar.total_pages.toString(),
            primeiraPagina: paginar.first_page.toString(),
            ultimaPagina: paginar.last_page.toString(),
            totalRegistros: paginar.total_results.toString(),
            dados: paginar.data
        };
    },
    setarPaginas: (paginaAtual, dados) => {

        dados.paginaAtual = paginaAtual;

        dados.temPaginaAnterior = false;
        if (dados.primeiraPagina < dados.paginaAtual) {
            dados.temPaginaAnterior = true;
        }

        dados.temProximaPagina = false;
        if (dados.ultimaPagina > dados.paginaAtual) {
            dados.temProximaPagina = true;
        }
    },
    obterRegistroPaginaAtual: (paginaSelecionada, conteudo) => {

        const pagina = parseInt(paginaSelecionada, 10);
        const primeiraPagina = parseInt(conteudo.primeiraPagina, 10);
        const ultimaPagina = parseInt(conteudo.ultimaPagina, 10);

        if (pagina >= primeiraPagina && pagina <= ultimaPagina) {

            paginacao.setarPaginas(paginaSelecionada, conteudo);

            const paginaAtual = pagina - 1;
            return conteudo.dados[paginaAtual];
        }

        return {};
    }
};

module.exports = paginacao;
