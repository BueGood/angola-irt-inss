import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';
import SalaryDisplay from './SalaryDisplay';
import { Salary } from '../../domain/entities/Salary';

// Mocking react-i18next
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key, // Simply returns the key for testing
  }),
}));

const mockSalary: Salary = {
    grossSalary: 100_000,
    socialSecurity: 3_000,
    irt: 0,
    netSalary: 97_000,
    baseSalary: 100_000,
    index: 1
};

describe('SalaryDisplay', () => {
  it('renders all salary fields with correct values', () => {
    render(<SalaryDisplay salary={mockSalary} />);

    expect(screen.getByText('salaryDetails')).toBeInTheDocument();
    expect(screen.getByText(/grossSalary/i)).toHaveTextContent('grossSalary: 100000.00 KZ');
    expect(screen.getByText(/socialSecurity/i)).toHaveTextContent('socialSecurity: 3000.00 KZ');
    expect(screen.getByText(/irt/i)).toHaveTextContent('irt: 0.00 KZ');
    expect(screen.getByText(/netSalary/i)).toHaveTextContent('netSalary: 97000.00 KZ');
  });
});
