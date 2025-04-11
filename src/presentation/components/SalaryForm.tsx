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
        <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded shadow-md w-full max-w-md mx-auto mb-6"
        >
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('baseSalary')}:
                </label>
                <input
                    type="number"
                    value={baseSalary}
                    onChange={(e) => setBaseSalary(Number(e.target.value))}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('index')}:
                </label>
                <input
                    type="number"
                    value={index}
                    onChange={(e) => setIndex(Number(e.target.value))}
                    min="1"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
                {t('calculate')}
            </button>
        </form>
    );
};

export default SalaryForm;
