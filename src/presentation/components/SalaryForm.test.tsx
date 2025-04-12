import { render, screen, fireEvent } from '@testing-library/react';
import { vi, it, describe, expect } from 'vitest';
import SalaryForm from './SalaryForm';

// Mocking react-i18next
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

// Mocking CalculateSalary use case
vi.mock('../../application/use-cases/CalculateSalary', () => {
  return {
    CalculateSalary: vi.fn().mockImplementation(() => ({
      execute: vi.fn().mockReturnValue({
        grossSalary: 1000,
        socialSecurity: 100,
        irt: 50,
        netSalary: 850,
      }),
    })),
  };
});

describe('SalaryForm', () => {
  it('renders baseSalary and index inputs and a submit button', () => {
    render(<SalaryForm onCalculate={vi.fn()} />);

    expect(screen.getByLabelText(/baseSalary/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/index/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /calculate/i })).toBeInTheDocument();
  });

  it('calls onCalculate with calculated salary when form is submitted', () => {
    const onCalculateMock = vi.fn();
    render(<SalaryForm onCalculate={onCalculateMock} />);

    fireEvent.change(screen.getByLabelText(/baseSalary/i), { target: { value: '2000' } });
    fireEvent.change(screen.getByLabelText(/index/i), { target: { value: '2' } });
    fireEvent.click(screen.getByRole('button', { name: /calculate/i }));

    expect(onCalculateMock).toHaveBeenCalledWith({
      grossSalary: 1000,
      socialSecurity: 100,
      irt: 50,
      netSalary: 850,
    });
  });
});
