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

        if(typeof url != 'string'){
            throw new Error('Tipo invalido');
        }

        if(/^(http):\/\/[^ "]+$/.test(url) === false ) {
            throw new Error('Formato invalido');
        }
       
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