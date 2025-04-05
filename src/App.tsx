import React, { useState } from 'react';
import SalaryForm from './presentation/components/SalaryForm';
import SalaryDisplay from './presentation/components/SalaryDisplay';
import { Salary } from './domain/entities/Salary';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './presentation/components/LanguageSwitcher';

const App: React.FC = () => {
  const { t } = useTranslation();
  const [salary, setSalary] = useState<Salary | null>(null);

  const handleCalculation = (calculatedSalary: Salary) => {
    setSalary(calculatedSalary);
  };

  return (
    <div>
      <LanguageSwitcher />
      <h1>{t('welcome')}</h1>
      <SalaryForm onCalculate={handleCalculation} />
      {salary && <SalaryDisplay salary={salary} />}
    </div>
  );
};

export default App;