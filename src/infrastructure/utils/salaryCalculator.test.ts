import { expect, it, describe } from 'vitest'
import { calculateGrossSalary, calculateIRT, calculateNetSalary, calculateSocialSecurity } from './salaryCalculator';

describe('calculateGrossSalary', () => {
    it('should calculate the correct gross salary', () => {
        const baseSalary = 100_000;
        const index = 1.5;
        const result = calculateGrossSalary(baseSalary, index);

        expect(result).toBe(150_000);
    });

    it('should return 0 if base salary is 0', () => {
        const baseSalary = 0;
        const index = 1.5;
        const result = calculateGrossSalary(baseSalary, index);

        expect(result).toBe(0);
    });

    it('should handle a base salary of 0 correctly', () => {
        const baseSalary = 100_000;
        const index = 0;
        const result = calculateGrossSalary(baseSalary, index);

        expect(result).toBe(0);
    });
});
describe('calculateSocialSecurity', () => {
    it('should calculate the correct social security deduction', () => {
        const grossSalary = 150_000;
        const result = calculateSocialSecurity(grossSalary);

        expect(result).toBe(4_500);
    });

    it('should return 0 if gross salary is 0', () => {
        const grossSalary = 0;
        const result = calculateSocialSecurity(grossSalary);

        expect(result).toBe(0);
    });
});
describe('calculateIRT', () => {
    it('should calculate 0 tax for gross salary up to 100,000 KZ', () => {
        const grossSalary = 100_000;
        const result = calculateIRT(grossSalary);

        expect(result).toBe(0);
    });

    it('should calculate 13% tax on the excess above 100,000 KZ for a gross salary of 120,000 KZ', () => {
        const grossSalary = 120_000;
        const result = calculateIRT(grossSalary);

        expect(result).toBe((120_000 - 100_001) * 0.13);
    });

    it('should calculate 16% tax on the excess above 100,000 KZ + fixed installment for a gross salary of 170,000 KZ', () => {
        const grossSalary = 170_000;
        const result = calculateIRT(grossSalary);

        expect(result).toBe((170000 - 150_001) * 0.16 + 12500);
    });
});
describe('calculateNetSalary', () => {
    it('should calculate the correct net salary', () => {
        const grossSalary = 150_000;
        const socialSecurity = 4_500;
        const irt = 0;
        const result = calculateNetSalary(grossSalary, socialSecurity, irt);

        expect(result).toBe(grossSalary - socialSecurity - irt);
    });

    it('should return the same gross salary if social security and IRT are 0', () => {
        const grossSalary = 150_000;
        const socialSecurity = 0;
        const irt = 0;
        const result = calculateNetSalary(grossSalary, socialSecurity, irt);

        expect(result).toBe(grossSalary);
    });
});