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
  const overtimeHours = Math.max(0, hours - 40);
  return overtimeHours * rate * 1.5;
}

