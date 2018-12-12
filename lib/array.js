'use strict';

const array = {
    converterParaArray: (conteudo) => {

        if (!conteudo) {
            return [];
        }
        if (conteudo.constructor === Array) {
            return conteudo;
        }

        return [conteudo];
    }
};

module.exports = array;
