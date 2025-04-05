import React, { useState } from 'react';
import { CalculateSalary } from '../../application/use-cases/CalculateSalary';
import { Salary } from '../../domain/entities/Salary';
import { useTranslation } from 'react-i18next';

interface SalaryFormProps {
    onCalculate: (salary: Salary) => void;
}

const SalaryForm: React.FC<SalaryFormProps> = ({ onCalculate }) => {
    const { t } = useTranslation();
    const [baseSalary, setBaseSalary] = useState<number>(0);
    const [index, setIndex] = useState<number>(1);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const calculateSalary = new CalculateSalary();
        const salary = calculateSalary.execute(baseSalary, index);

        onCalculate(salary);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    {t('baseSalary')}:
                    <input
                        type="number"
                        value={baseSalary}
                        onChange={(e) => setBaseSalary(Number(e.target.value))}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    {t('index')}:
                    <input
                        type="number"
                        value={index}
                        onChange={(e) => setIndex(Number(e.target.value))}
                        min="1"
                        required
                    />
                </label>
            </div>
            <button type="submit">{t('calculate')}</button>
        </form>
    );
};

export default SalaryForm;
