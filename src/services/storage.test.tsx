import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from "./storage";

const dioBank = {
    login: false
}

const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')

describe('storage', () => {

    
    it('Deve retornar o objeto no localStorage com a chave diobank', () => {
        const mockGetItem = jest.spyOn(Storage.prototype, 'getItem')
        getAllLocalStorage()
        expect(mockGetItem).toHaveBeenCalledWith('diobank')        
    });
    it('Deve criar um objeto no local Storage', () => {
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
    });
    it('Deve alterar o valor do objeto no local Storage', () => {
        changeLocalStorage(dioBank)
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
    });
})