import { soma, multiplica } from "./soma";
describe('soma', () => {
    it('Deve somar 1 ao número informado', () => {
        const value = soma(1)
        expect(value).toBe(2)
    });
    it('Deve multipilcar por 2', () => {
        const value = multiplica(2)
        expect(value).toBe(4)
    });
    it('Deve multipilcar por 3', () => {
        const value = multiplica(2)
        expect(value).toBe(4)
    });
})