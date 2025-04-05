import { Salary } from '../../domain/entities/Salary';
import { calculateGrossSalary } from '../../infrastructure/utils/salaryCalculator';
import { calculateSocialSecurity } from '../../infrastructure/utils/salaryCalculator';
import { calculateIRT } from '../../infrastructure/utils/salaryCalculator';
import { calculateNetSalary } from '../../infrastructure/utils/salaryCalculator';

export class CalculateSalary {
  execute(baseSalary: number, index: number): Salary {
    const grossSalary = calculateGrossSalary(baseSalary, index);
    const socialSecurity = calculateSocialSecurity(grossSalary);
    const irt = calculateIRT(grossSalary);
    const netSalary = calculateNetSalary(grossSalary, socialSecurity, irt);

    return new Salary(baseSalary, index, grossSalary, socialSecurity, irt, netSalary);
  }
}
