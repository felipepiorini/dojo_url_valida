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

    test('Deve retornar throw caso não seja um link ', () => {
        const {url, sut} = makeSut()
        sut.validarUrl(url)
    });
})