import { expect, it, describe , vi, Mock} from 'vitest'

// src/domain/use-cases/CalculateSalary.test.ts
import { CalculateSalary } from './CalculateSalary';
import { Salary } from '../../domain/entities/Salary';
import * as salaryCalculator from '../../infrastructure/utils/salaryCalculator';

// Mock utility functions
vi.mock('../../infrastructure/utils/salaryCalculator', () => ({
    calculateGrossSalary: vi.fn(),
    calculateSocialSecurity: vi.fn(),
    calculateIRT: vi.fn(),
    calculateNetSalary: vi.fn(),
  }));

describe('CalculateSalary Use Case', () => {
  it('should correctly execute the salary calculation use case', () => {
    const baseSalary = 100_000;
    const index = 1;

    // Mock the utility functions
    const mockGrossSalary = 100_000;
    const mockSocialSecurity = 3_000;
    const mockIRT = 0;
    const mockNetSalary = 97_000;

    // Setup mock return values
    (salaryCalculator.calculateGrossSalary as Mock).mockReturnValue(mockGrossSalary);
    (salaryCalculator.calculateSocialSecurity as Mock).mockReturnValue(mockSocialSecurity);
    (salaryCalculator.calculateIRT as Mock).mockReturnValue(mockIRT);
    (salaryCalculator.calculateNetSalary as Mock).mockReturnValue(mockNetSalary);

    const calculateSalary = new CalculateSalary();
    
    const result = calculateSalary.execute(baseSalary, index);

    // Verify that the mock functions are called with the correct arguments
    expect(salaryCalculator.calculateGrossSalary).toHaveBeenCalledWith(baseSalary, index);
    expect(salaryCalculator.calculateSocialSecurity).toHaveBeenCalledWith(mockGrossSalary);
    expect(salaryCalculator.calculateIRT).toHaveBeenCalledWith(mockGrossSalary);
    expect(salaryCalculator.calculateNetSalary).toHaveBeenCalledWith(mockGrossSalary, mockSocialSecurity, mockIRT);

    // Verify the result returned by the use case
    expect(result).toBeInstanceOf(Salary);
    expect(result.baseSalary).toBe(baseSalary);
    expect(result.index).toBe(index);
    expect(result.grossSalary).toBe(mockGrossSalary);
    expect(result.socialSecurity).toBe(mockSocialSecurity);
    expect(result.irt).toBe(mockIRT);
    expect(result.netSalary).toBe(mockNetSalary);
  });
});
