import { Salary } from "../../domain/entities/Salary";

interface SalaryDisplayProps {
    salary: Salary;
}
  
const SalaryDisplay: React.FC<SalaryDisplayProps> = ({ salary }) => {
return (
    <div>
        <h2>Detalhes</h2>
        <p>Salário ilíquido: {salary.grossSalary.toFixed(2)} KZ</p>
        <p>Segurança Social: {salary.socialSecurity.toFixed(2)} KZ</p>
        <p>IRT: {salary.irt.toFixed(2)} KZ</p>
        <p>Salário líquido: {salary.netSalary.toFixed(2)} KZ</p>
    </div>
);
};

export default SalaryDisplay;
