let employees = ["Janet K.", "Francis B.", "Edward J."]
let salaries = [500000, 675000, 700000]
console.log(`Employee Salaries`)
console.log(`Employee name: ${employees[0]}, Salary: ${salaries[0]}`)
console.log(`Employee name: ${employees[1]}, Salary: ${salaries[1]}`)
console.log(`Employee name: ${employees[2]}, Salary: ${salaries[2]}`)
salaries[0] = salaries[0] - 50000
salaries[2] = salaries[2] + 50000
console.log(`Employee Salaries *After cuts & promotions*`)
console.log(`Employee name: ${employees[0]}, Salary: ${salaries[0]}`)
console.log(`Employee name: ${employees[1]}, Salary: ${salaries[1]}`)
console.log(`Employee name: ${employees[2]}, Salary: ${salaries[2]}`)
employees.push("Marvin G.")
salaries.push(100000)
console.log(`Employee Salaries *After new hire*`)
console.log(`Employee name: ${employees[0]}, Salary: ${salaries[0]}`)
console.log(`Employee name: ${employees[1]}, Salary: ${salaries[1]}`)
console.log(`Employee name: ${employees[2]}, Salary: ${salaries[2]}`)
console.log(`Employee name: ${employees[3]}, Salary: ${salaries[3]}`)
employees.pop
salaries.pop
salaries[0] = salaries[0] + 100000
console.log(`Employee Salaries *After resignations*`)
console.log(`Employee name: ${employees[0]}, Salary: ${salaries[0]}`)
console.log(`Employee name: ${employees[1]}, Salary: ${salaries[1]}`)
console.log(`Employee name: ${employees[2]}, Salary: ${salaries[2]}`)
