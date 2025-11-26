const { getCarro, getMoto, getCaminhao } = require('./matrizes.js');

test('Deve retornar o carro correto', () => {
    const resultado = getCarro("monza");
    expect(resultado).toEqual({
        modelo: "monza",
        cilindrada: "2000",
        marca: "chevrolet",
        ano: "1993"
    });
});

test('Deve retornar "Carro não encontrado" quando não existir', () => {
    expect(getCarro("fusca")).toBe("Carro não encontrado");
});

test('Deve retornar a moto correta', () => {
    const resultado = getMoto("ninja");
    expect(resultado).toEqual({
        modelo: "ninja",
        cilindrada: "600",
        marca: "kawasaki",
        ano: "2018"
    });
});

test('Deve retornar "Moto não encontrada" quando não existir', () => {
    expect(getMoto("titan")).toBe("Moto não encontrada");
});

test('Deve retornar o caminhão correto', () => {
    const resultado = getCaminhao("actros");
    expect(resultado).toEqual({
        modelo: "actros",
        cilindrada: "12000",
        marca: "mercedes-benz",
        ano: "2021"
    });
});

test('Deve retornar "Caminhão não encontrado" quando não existir', () => {
    expect(getCaminhao("scania")).toBe("Caminhão não encontrado");
});