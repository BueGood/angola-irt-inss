import { useTranslation } from "react-i18next";
import { Salary } from "../../domain/entities/Salary";

interface SalaryDisplayProps {
    salary: Salary;
}

const SalaryDisplay: React.FC<SalaryDisplayProps> = ({ salary }) => {
    const { t } = useTranslation();
    return (
        <div>
            <h2>{t('salaryDetails')}</h2>
            <p>{t('grossSalary')}: {salary.grossSalary.toFixed(2)} KZ</p>
            <p>{t('socialSecurity')}: {salary.socialSecurity.toFixed(2)} KZ</p>
            <p>{t('irt')}: {salary.irt.toFixed(2)} KZ</p>
            <p>{t('netSalary')}: {salary.netSalary.toFixed(2)} KZ</p>
        </div>
    );
};

export default SalaryDisplay;
