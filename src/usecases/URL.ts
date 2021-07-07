export interface IResponse {
    protocol: string,
    host: string,
    domain: string,
    path: string,
    params: string,
}

export default class UrlValidator {
    validarUrl(url): IResponse {
        var response: IResponse = {
            protocol: null,
            host: null,
            domain: null,
            path: null,
            params: null,
        }

        if(typeof url != 'string'){
            throw new Error('Tipo invalido');
        }

        if(/^(http|https|ssh):\/\/[^ "]+$/.test(url) === false ) {
            throw new Error('Formato invalido');
        }

        const urlObject = new URL(url);

        response.host = urlObject.hostname;
        response.protocol = urlObject.protocol.replace(':','');
        return response;

    }
}

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