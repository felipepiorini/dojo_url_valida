export interface IResponse {
    protocol: string,
    host: string,
    domain: string,
    path: string,
    params: string,
}

export default class URL {
    validarUrl(url): IResponse {
        var response: IResponse = {
            protocol: null,
            host: null,
            domain: null,
            path: null,
            params: null,
        }

        // var string =  document.createElement('a');
        // string.href = url;
        // response.protocol = string.protocol;
        // response.host = string.host;
        // console.log(string, response);
        // console.log(response)

        if(typeof url != 'string'){
            throw new Error('Tipo invalido');
        }

        if(/^(http):\/\/[^ "]+$/.test(url) === false ) {
            throw new Error('Formato invalido');
        }
       
        return response;
    }
}


/**
  var parser = document.createElement('a');
    parser.href = "http://example.com:3000/pathname/?search=test#hash";

    parser.protocol; // => "http:"
    parser.host;     // => "example.com:3000"
    parser.hostname; // => "example.com"
    parser.port;     // => "3000"
    parser.pathname; // => "/pathname/"
    parser.hash;     // => "#hash"
    parser.search;   // => "?search=test"
    parser.origin;   // => "http://example.com:3000"
 */


// Dada uma URL, desenvolva um programa que indique se a URL é válida ou não e, caso seja válida, retorne as suas partes constituintes.

// Exemplos:

// Entrada: http://www.google.com/mail/user=fulano
// Saída:

// protocolo: http
// host: www
// domínio: google.com
// path: mail
// parâmetros: user=fulano

// Entrada: ssh://fulano%senha@git.com/
// Saída:
// protocolo: ssh
// usuário: fulano
// senha: senha
// dominio: git.com