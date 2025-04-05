export const calculateGrossSalary = (baseSalary: number, index: number): number => {
    return baseSalary * index;
};

export const calculateSocialSecurity = (grossSalary: number): number => {
    const employeeShare = 0.03;
    return grossSalary * employeeShare;
};

export const calculateIRT = (grossSalary: number): number => {
    if (grossSalary <= 100000) {
        return 0;
    }

    const excess = grossSalary - 100001;

    const irtLevels = [
        { maxSalary: 150000, rate: 0.13, fixed: 0 },
        { maxSalary: 200000, rate: 0.16, fixed: 12500 },
        { maxSalary: 300000, rate: 0.18, fixed: 31250 },
        { maxSalary: 500000, rate: 0.19, fixed: 49259 },
        { maxSalary: 1000000, rate: 0.20, fixed: 87250 },
        { maxSalary: 1500000, rate: 0.21, fixed: 187249 },
        { maxSalary: 2000000, rate: 0.22, fixed: 292249 },
        { maxSalary: 2500000, rate: 0.23, fixed: 402249 },
        { maxSalary: 5000000, rate: 0.24, fixed: 517249 },
        { maxSalary: 10000000, rate: 0.245, fixed: 1117249 },
        { maxSalary: Infinity, rate: 0.25, fixed: 2342248 },
    ];
    for (const level of irtLevels) {
        if (grossSalary <= level.maxSalary) {
            return level.fixed + (excess * level.rate);
        }
    }

    return 0;
};

export const calculateNetSalary = (grossSalary: number, socialSecurity: number, irt: number): number => {
    return grossSalary - socialSecurity - irt;
};
