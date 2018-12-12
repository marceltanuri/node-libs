'use strict';

const Moment = require('moment');

const setarMesesEmPortugues = () => {

    Moment.updateLocale('pt', {
        months: [
            'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
            'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
        ]
    });
    Moment.locale('pt');
};

const tratarExcecao = (formatoData) => {

    const quantidadeBarrasSaida = formatoData.split('/').length;

    const quantidadeBarrasDicionario = {
        2: '--/--',
        3: '--/--/--'
    };

    if (quantidadeBarrasDicionario[quantidadeBarrasSaida]) {
        return quantidadeBarrasDicionario[quantidadeBarrasSaida];
    }

    return '';
};

const data = () => {

    const formatarData = (valor, formatoSaida, formatoEntrada) => {

        const valorData = Moment(valor, formatoEntrada);
        const dataFormatada = valorData.format(formatoSaida);
        if (dataFormatada.toLowerCase() === 'invalid date') {
            return tratarExcecao(formatoSaida);
        }
        return dataFormatada;
    };

    const calcularIntervaloEntreDatas = (dataInicio, dataFim) => {

        const dataDiff = Math.abs(dataInicio - dataFim);
        let segundos = Moment.duration(dataDiff).asSeconds();
        const minutos = Moment.duration(dataDiff).minutes();
        if (minutos) {
            segundos -= (minutos * 60);
        }
        segundos = segundos.toFixed(3);
        return `${minutos}m ${segundos}s`;
    };

    return {
        formatarData,
        calcularIntervaloEntreDatas
    };
};

setarMesesEmPortugues();

module.exports = data();
