# CSF Shared Libs

Escreveu um código nos microserviços do projeto CSF e precisa replicar em outro microserviço? Sua dor de cabeça acabou, esse repositório tem como objetivo resolver esse tipo de problema.

## Instalação

Adicionar e instalar nas dependências do package.json:
```
npm install --save git+ssh://http://10.113.73.95/scm/app/csf_shared_libs.git
```

## Como Usar

```
const String = require('csf-shared-libs').string;

String.obter('ola');
```

## Para Contribuir

1. Fork it!
2. Crie sua feature branch: `git checkout -b my-new-feature`
3. Commite suas alterações: `git commit -am 'Add some feature'`
4. Faça o push da branch: `git push origin my-new-feature`
5. Envie o seu pull request :D