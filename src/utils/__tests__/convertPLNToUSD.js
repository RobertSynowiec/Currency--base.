import { convertPLNToUSD } from '../convertPLNToUSD';

describe('ConvertPLNtoUSD', () => {
    it('should return proper value when good input', () => {
        expect(convertPLNToUSD(1)).toBe('$0.29');
        expect(convertPLNToUSD(2)).toBe('$0.57');
        expect(convertPLNToUSD(20)).toBe('$5.71');
        expect(convertPLNToUSD(12)).toBe('$3.43');

    });

    // testy wykorzystują funkcję isNaN, aby sprawdzić, czy wynik funkcji convertPLNToUSD jest NaN, a następnie używają toBe(true), aby upewnić się, że wynik jest prawdą. To zabezpiecza testy, nawet jeśli '1' konwertuje się na liczbę, ponieważ oczekujemy NaN w przypadku ciągów znaków.
    it('should return NaN when input is text', () => {
        expect(isNaN(convertPLNToUSD('1'))).toBe(true);
        expect(isNaN(convertPLNToUSD('axa'))).toBe(true);
        expect(isNaN(convertPLNToUSD('10'))).toBe(true);
        expect(isNaN(convertPLNToUSD('-20'))).toBe(true);

    });
    it('should return NaN when input is empty', () => {
        expect(convertPLNToUSD('')).toBeNaN();
    });
    it('should return "Error" when input is different than number and string', () => {
        expect(convertPLNToUSD({})).toBe('Error');
        expect(convertPLNToUSD([])).toBe('Error');
        expect(convertPLNToUSD(null)).toBe('Error');
        expect(convertPLNToUSD(function () { })).toBe('Error');
    });

    it('should return zero when input is lower than zero', () => {
        expect(convertPLNToUSD(-1)).toBe('$0.00');
        expect(convertPLNToUSD(-2)).toBe('$0.00');
        expect(convertPLNToUSD(-56)).toBe('$0.00');
    });

});
