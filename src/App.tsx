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
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-3xl mx-auto">
        <LanguageSwitcher />
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">{t('welcome')}</h1>
        <SalaryForm onCalculate={handleCalculation} />
        {salary && <SalaryDisplay salary={salary} />}
      </div>
    </div>
  );
};

export default App;