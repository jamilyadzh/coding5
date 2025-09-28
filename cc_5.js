// 2

let  employees = [
  { name: "Mimi", hourlyRate: 20, hoursWorked: 38 },
  { name: "Bob", hourlyRate: 22, hoursWorked: 45 },
  { name: "Jami", hourlyRate: 18, hoursWorked: 40 },
  { name: "Rumi", hourlyRate: 25, hoursWorked: 50 }
];

// 3

function calculateBasePay(rate, hours) {
  const regularHours = Math.min(hours, 40);
  return regularHours * rate;
}

// 4

function calculateOvertimePay(rate, hours) {
  const overtimeHours = Math.max(0, hours - 40,0);
  return overtimeHours * rate * 1.5;
}

// 5
function calculateTaxes(grossPay) {
  return grossPay * 0.15;

// 6

function processPayroll(employee) {
  const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
  const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
  const grossPay = basePay + overtimePay;
  const taxes = calculateTaxes(grossPay);
  const netPay = grossPay - taxes;

  return {
    name: employee.name,
    basePay: basePay,
    overtimePay: overtimePay,
    grossPay: grossPay,
    netPay: netPay
  };
}
