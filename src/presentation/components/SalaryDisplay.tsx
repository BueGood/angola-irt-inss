import { useTranslation } from "react-i18next";
import { Salary } from "../../domain/entities/Salary";

interface SalaryDisplayProps {
    salary: Salary;
}

const SalaryDisplay: React.FC<SalaryDisplayProps> = ({ salary }) => {
    const { t } = useTranslation();
    return (
        <div className="bg-white p-6 rounded shadow-md w-full max-w-md mx-auto">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">{t('salaryDetails')}</h2>
            <p className="text-gray-700 mb-1">
                <strong>{t('grossSalary')}:</strong> {salary.grossSalary.toFixed(2)} KZ
            </p>
            <p className="text-gray-700 mb-1">
                <strong>{t('socialSecurity')}:</strong> {salary.socialSecurity.toFixed(2)} KZ
            </p>
            <p className="text-gray-700 mb-1">
                <strong>{t('irt')}:</strong> {salary.irt.toFixed(2)} KZ
            </p>
            <p className="text-gray-700">
                <strong>{t('netSalary')}:</strong> {salary.netSalary.toFixed(2)} KZ
            </p>
        </div>
    );
};

export default SalaryDisplay;
