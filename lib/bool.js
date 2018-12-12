'use strict';

const boolUtil = () => {

    const paraBooleano = (dado) => {

        const dicionarioBooleanos = {
            'false': false
        };
        const resultado = dicionarioBooleanos[dado];

        if (resultado !== undefined) {
            return resultado;
        }

        if (dado) {
            return true;
        }

        return false;
    };

    return {
        paraBooleano
    };
};

module.exports = boolUtil();
