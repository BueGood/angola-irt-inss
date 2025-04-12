import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import backend from "i18next-xhr-backend";

i18n
  .use(LanguageDetector)
  .use(backend)
  .use(initReactI18next)
  .init({
    fallbackLng: "pt",
    debug: false,
    resources: {
      en: {
        translation: {
          welcome: "Calculate your net salary here, find out how much you need to pay for Social Security and Income Tax (IRS)",
          baseSalary: "Base Salary (KZ)",
          index: "Index",
          calculate: "Calculate",
          grossSalary: "Gross Salary",
          socialSecurity: "Social Security (Employee's Share)",
          irt: "IRT (Income Tax)",
          netSalary: "Net Salary",
          salaryDetails: "Salary Details",
        },
      },
      pt: {
        translation: {
          welcome: "Cálcule aqui o teu salário líquido, saiba qual é o valor a pagar para Segurança Social e o Imposto de Rendimento de Trabalho (IRS)",
          baseSalary: "Salário Base (KZ)",
          index: "Índice",
          calculate: "Calcular",
          grossSalary: "Salário Bruto",
          socialSecurity: "Segurança Social (Parte do Empregado)",
          irt: "IRT (Imposto sobre Rendimento)",
          netSalary: "Salário Líquido",
          salaryDetails: "Detalhes do Salário",
        },
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
