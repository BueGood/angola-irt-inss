import React, { useState } from 'react';
import SalaryForm from './presentation/components/SalaryForm';
import SalaryDisplay from './presentation/components/SalaryDisplay';
import { Salary } from './domain/entities/Salary';

const App: React.FC = () => {
  const [salary, setSalary] = useState<Salary | null>(null);

  const handleCalculation = (calculatedSalary: Salary) => {
    setSalary(calculatedSalary);
  };

  return (
    <div>
      <h1>Cálcule aqui o teu salário líquido, saiba qual é o valor a pagar para Segurança Social e o Imposto de Rendimento de Trabalho (IRS)</h1>
      <SalaryForm onCalculate={handleCalculation} />
      {salary && <SalaryDisplay salary={salary} />}
    </div>
  );
};

export default App;