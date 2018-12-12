'use strict';

const Lab = require('lab');
const lab = exports.lab = Lab.script();
const Code = require('code');
const expect = Code.expect;
const Http = require('http');

const request = require('../../../lib/request')({
    apiName: 'api-gateway',
    requestTimeout: 5000
});

lab.experiment('Request', () => {

    lab.test('A variavel recebida ao fazer o importe do modulo "request" tem que ser um objeto', (done) => {

        expect(request).to.be.an.object();
        done();
    });

    lab.test('A variavel recebida ao fazer o importe do modulo "request" tem que ter 7 verbos do protocolo http', (done) => {

        expect(Object.keys(request).length).to.be.equals(7);
        done();
    });

    lab.test('A variavel recebida ao fazer o importe do modulo "request" tem que ter as seguintes propriedates, "get", "post", "put", "patch", "delete", "head", "options"', (done) => {

        expect(Object.keys(request).includes('get')).to.be.true;
        expect(Object.keys(request).includes('post')).to.be.true;
        expect(Object.keys(request).includes('put')).to.be.true;
        expect(Object.keys(request).includes('patch')).to.be.true;
        expect(Object.keys(request).includes('delete')).to.be.true;
        expect(Object.keys(request).includes('head')).to.be.true;
        expect(Object.keys(request).includes('options')).to.be.true;
        done();
    });

    lab.test('A variavel recebida ao fazer o importe do modulo "request", todas suas propriedades devem ser uma função', (done) => {

        for (const metodo in request) {
            expect(request[metodo]).to.be.a.function();
        }
        done();
    });

    lab.experiment('/VERBOS HTTP', () => {

        let server;

        const payload = {
            name: 'tesinha',
            age: 28,
            phone: '+55 (31) 99184-9826',
            email: 'astesiojose@gmail.com',
            city: 'São Paulo',
            bornIn: 'Matozinhos'
        };

        const MESSAGE = 'OK';
        const PORT = '8080';
        const URL = `http://localhost:${PORT}/`;

        lab.before(() => {

            server = Http.createServer((req, res) => {

                res.setHeader('Content-Type', 'text/html');
                res.setHeader('X-Foo', 'bar');
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(MESSAGE);
            });

            return Promise.resolve(server.listen(PORT));
        });

        lab.after(() => Promise.resolve(server.close()));

        lab.test('/GET', (done) => {

            request.get(URL)
                .then((response) => _handleSuccess(response, MESSAGE, done));
        });

        lab.test('/POST', (done) => {

            request.post(URL, payload)
                .then((response) => _handleSuccess(response, MESSAGE, done));
        });

        lab.test('/PUT', (done) => {

            request.put(URL, payload)
                .then((response) => _handleSuccess(response, MESSAGE, done));
        });

        lab.test('/PATCH', (done) => {

            request.patch(URL, payload)
                .then((response) => _handleSuccess(response, MESSAGE, done));
        });

        lab.test('/DELETE', (done) => {

            request.delete(URL, payload)
                .then((response) => _handleSuccess(response, MESSAGE, done));
        });

        lab.test('/HEAD', (done) => {

            request.head(URL, payload)
                .then((response) => {

                    expect(response['content-type']).to.be.equal('text/plain');
                    expect(response['x-foo']).to.be.equal('bar');
                    expect(response.connection).to.be.equal('close');
                    done();
                });
        });

        lab.test('/OPTIONS', (done) => {

            request.options(URL, payload)
                .then((response) => _handleSuccess(response, MESSAGE, done));
        });
    });
});

const _handleSuccess = (response, message, done) => {

    expect(response).to.be.equal(message);
    done();
};
