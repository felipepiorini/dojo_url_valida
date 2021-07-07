import URL from './URL';

type SutTypes = {
    url: string,
    sut: URL
}

const makeSut = (url: string = "http://google.com.br"): SutTypes => {
    const sut = new URL();

    return {
        url, 
        sut
    }
}

describe('validar url', () => {
    
    test('Deve retornar throw caso não seja uma url string', () => {
        const {sut} = makeSut()
        expect(() => {sut.validarUrl(123)}).toThrow()
    });

    test('Deve retornar throw caso não seja um link ', () => {
      const {sut} = makeSut()
      expect(() => {sut.validarUrl("invalid_url")}).toThrow()
    });

    test('Deve retornar o host corretamente', () => {
        const {url, sut} = makeSut()
        const response = sut.validarUrl("http://www.google.com.br")
        expect(response.host).toBe('www.google.com.br');
    });

    test('Deve retornar o protocolo https para o site do beedoo', () => {
        const {url, sut} = makeSut()
        const response = sut.validarUrl("https://beedoo.com.br")
        expect(response.protocol).toBe('https');
    });

    test('Deve retornar throw caso não seja um link ', () => {
        const {url, sut} = makeSut()
        sut.validarUrl(url)
    });

    test('Deve retornar ssh ao receber uma url com procolo ssh', () => {
        const {url, sut} = makeSut()
        const response = sut.validarUrl("ssh://fulano%senha@git.com")
        expect(response.protocol).toBe('ssh')
    })
})