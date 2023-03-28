const basicSalary = 50000;
const benefits = 10000;
const grossSalary = basicSalary + benefits;
// Calculate NSSF deduction
const nssfDeduction = Math.min(grossSalary * 0.06, 2160);
// Calculate taxable income
const taxableIncome = grossSalary - nssfDeduction - 2430;
// Calculate Payee Tax
let payeeTax = 0;
if (taxableIncome <= 12298) {
  payeeTax = taxableIncome * 0.1;
} else if (taxableIncome <= 23885) {
  payeeTax = 1229.8 + (taxableIncome - 12298) * 0.15;
} else if (taxableIncome <= 35472) {
  payeeTax = 3452.95 + (taxableIncome - 23885) * 0.20;
} else if (taxableIncome <= 47059) {
  payeeTax = 6238.95 + (taxableIncome - 35472) * 0.25;
} else {
  payeeTax = 11108.7 + (taxableIncome - 47059) * 0.3;
}
// Calculate NHIF deduction
let nhifDeduction = 0;
if (grossSalary <= 5999) {
  nhifDeduction = 150;
} else if (grossSalary <= 7999) {
  nhifDeduction = 300;
} else if (grossSalary <= 11999) {
  nhifDeduction = 400;
} else if (grossSalary <= 14999) {
  nhifDeduction = 500;
} else if (grossSalary <= 19999) {
  nhifDeduction = 600;
} else if (grossSalary <= 24999) {
  nhifDeduction = 750;
} else if (grossSalary <= 29999) {
  nhifDeduction = 850;
} else if (grossSalary <= 34999) {
  nhifDeduction = 900;
} else if (grossSalary <= 39999) {
  nhifDeduction = 950;
} else if (grossSalary <= 44999) {
  nhifDeduction = 1000;
} else if (grossSalary <= 49999) {
  nhifDeduction = 1100;
} else if (grossSalary <= 59999) {
  nhifDeduction = 1200;
} else if (grossSalary <= 69999) {
  nhifDeduction = 1300;
} else if (grossSalary <= 79999) {
  nhifDeduction = 1400;
} else if (grossSalary <= 89999) {
  nhifDeduction = 1500;
} else {
  nhifDeduction = 1700;
}
// Calculate net salary
const totalDeductions = nssfDeduction + payeeTax + nhifDeduction;
const netSalary = grossSalary - totalDeductions;