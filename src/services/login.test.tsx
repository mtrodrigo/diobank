import {login } from "./login";

describe('Login', () => {

    const mockEmail = 'admin@diobank.com'
    const mockPassword = '123456'
    it('Deve exibir um alert de boas vindas se o email for válido', async () => {
        const response = await login(mockEmail, mockPassword)
        expect(response).toBeTruthy()
    });
   
    it('Deve exibir um erro caso o email sej a inválido', async () => {
        const response = await login('email@diferente.com', '')
        expect(response).toBeFalsy()
    })
})