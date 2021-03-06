'use strict';

const NIVEL_ERRO = {
    ERRO: 3,
    ATENCAO: 2,
    INFO: 1
};

const SISTEMA_ERRO = {
    TOKEN_EXPIRADO: 10
};

const AUTH_ERRO = {
    USUARIO_NAO_ENCONTRADO: 20,
    CREDENCIAIS_INVALIDAS: 21,
    USUARIO_BLOQUEADO: 22,
    DADOS_INVALIDOS: 23
};

const STATUS_ERRO = {
    CONTA_BLOQUEADA: 30,
    CARTAO_BLOQUEADO: 31,
    SEM_CARTAO_DISPONIVEL: 32,
    SEM_CONTA_DISPONIVEL: 33
};

const CADASTRAR_ERRO = {
    DADOS_DIVERGENTES: 40,
    CPF_INEXISTENTE: 41,
    SENHA_INVALIDA: 42,
    NUMERO_TELEFONE_INVALIDO: 43,
    EMAIL_INVALIDO: 44
};

const CARTAO_PRINCIPAL_ERRO = {
    CARTAO_EH_ADICIONAL: 51,
    CPF_NAO_CONDIZ: 52
};

const ATIVACAO_DE_CARTAO_ERRO = {
    SENHA_DO_CARTAO_INVALIDO: 60,
    BLOQUEIO_DO_CARTAO_POR_QUANTIDADES_DE_TENTATIVAS_NA_SENHA: 61,
    ERRO_VALIDAR_SENHA: 62,
    CONSULTE_SEU_CARTAO: 63,
    CARTAO_INVALIDO: 64,
    REPETICAO_SENHA_EXCEDIDO: 65,
    DESBLOQUEIO_NAO_PERMITIDO: 66
};

const PARCELE_FACIL_ERRO = {
    PARCELE_INDISPONIVEL: 70,
    PARCELE_MESMA_ENTRADA: 71
};

const OBTER_TOKEN_DA_PR_ERRO = {
    SMS_TOKEN_EXPIRADO: 80,
    SMS_TOKEN_INVALIDO: 81,
    SMS_TOKEN_LIMITE_VALIDACAO: 82,
    SMS_TOKEN_NAO_EXISTE: 83
};


module.exports = Object.freeze(Object.assign({},
    NIVEL_ERRO,
    SISTEMA_ERRO,
    AUTH_ERRO,
    STATUS_ERRO,
    CADASTRAR_ERRO,
    CARTAO_PRINCIPAL_ERRO,
    ATIVACAO_DE_CARTAO_ERRO,
    PARCELE_FACIL_ERRO,
    OBTER_TOKEN_DA_PR_ERRO));
