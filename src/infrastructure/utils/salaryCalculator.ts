export const calculateGrossSalary = (baseSalary: number, index: number): number => {
    return baseSalary * index;
};

export const calculateSocialSecurity = (grossSalary: number): number => {
    const employeeShare = 0.03;
    return grossSalary * employeeShare;
};

export const calculateIRT = (grossSalary: number): number => {

    const IRT_LEVELS = [
        { min: 0, max: 100_000, rate: 0, fixed: 0 },
        { min: 100_001, max: 150_000, rate: 0.13, fixed: 0 },
        { min: 150_001, max: 200_000, rate: 0.16, fixed: 12_500 },
        { min: 200_0001, max: 300_000, rate: 0.18, fixed: 31_250 },
        { min: 300_0001, max: 500_000, rate: 0.19, fixed: 49_259 },
        { min: 500_001, max: 1_000_000, rate: 0.20, fixed: 87_250 },
        { min: 1_000_001, max: 1_500_000, rate: 0.21, fixed: 187_249 },
        { min: 1_500_001, max: 2_000_000, rate: 0.22, fixed: 292_249 },
        { min: 2_000_001, max: 2_500_000, rate: 0.23, fixed: 402_249 },
        { min: 2_500_001, max: 5_000_000, rate: 0.24, fixed: 517_249 },
        { min: 5_000_001, max: 10_000_000, rate: 0.245, fixed: 1_117_249 },
        { min: 10_000_001, max: Infinity, rate: 0.25, fixed: 2_342_248 },
    ]

    const irtLevel = IRT_LEVELS.find(level => grossSalary <= level.max && grossSalary >= level.min)!
    console.log("test", irtLevel, grossSalary)

    return ((grossSalary - irtLevel.min)  * irtLevel.rate ) + irtLevel.fixed

};

export const calculateNetSalary = (grossSalary: number, socialSecurity: number, irt: number): number => {
    return grossSalary - socialSecurity - irt;
};
